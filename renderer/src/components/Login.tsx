import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { login } from "../reduxState/player/actions";
import { AppState } from "../reduxState";
import { Users, User } from "../reduxState/registration/types";
import { LoginAction } from "../reduxState/player/types";
import { CharacterState } from "../reduxState/characters/types";
import styled from "styled-components";
import theme from "../constants/theme";
import Button from "./Atoms/Button";
import Header from "./Atoms/Header";
import Error from "./Atoms/Error";
import StarterWrapper from "./Containers/StarterWrapper";

interface Props extends RouteComponentProps<any> {
  users: Users;
  login: LoginAction;
  characters: CharacterState;
}

const Home: React.FC<Props> = ({ users, login, history, characters }) => {
  const [error, setError] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const validate = (user?: User) => {
    if (!username || !password) {
      setError("Please fill in all details");
      return false;
    }
    if (!user) {
      setError("This user does not exist");
      return false;
    }
    if (user && user.password !== password) {
      setError("Incorrect Password, please try again");
      return false;
    }

    return true;
  }

  const handleLogin = async () => {
    const user = users.find(user => user.username === username);
    if (validate(user)) {
      await login(username);

      const hasCharacter = characters.find(item => item.owner === username);

      await history.push(hasCharacter ? "/characters/" : "/create/");
    }
  };

  const handleResetCheck = () => {
    const user = users.find(user => user.username === username);
    if (!user) {
      setError("This user does not exist");
      return;
    }
    if (user && validate(user)) {
      history.push('/change-password/', user.password);
    }
  }

  const isReset = window.location.pathname === "/reset-password";

  return (
    <StarterWrapper>
      <Header variant="Large">Login</Header>
      <Input
        type="text"
        value={username}
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />
      <Input
        type="text"
        value={password}
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <Error variant="Small">{error}</Error>
      <Button onClick={isReset ? handleResetCheck : handleLogin}>{isReset ? 'Log In' : 'Validate'}</Button>
      <BlockedLink to="/register/">Register</BlockedLink>
    </StarterWrapper>
  );
};

const mapStateToProps = ({ users, characters }: AppState) => ({
  users,
  characters
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Home)
);

const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 1rem 0.4rem;
  display: block;
  background-color: transparent;
  margin: 2rem auto;
  width: 100%;
  font-size: 1.4rem;
  color: ${theme.colors.eggshell};
  border-bottom: 1px solid ${theme.colors.eggshell};

  &::placeholder {
    color: ${theme.colors.eggshell};
    opacity: 0.1;
  }
`;

const BlockedLink = styled(Link)`
  margin: 1rem 0;
  display: block;
  color: ${theme.colors.wine};
  font-weight: 600;
`;
