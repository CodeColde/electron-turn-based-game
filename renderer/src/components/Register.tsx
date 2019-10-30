import * as React from "react";
import { connect } from "react-redux";
import { createUser } from "../redux/registration/actions";
import { AppState } from "../redux";
import { Users, User } from "../redux/registration/types";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import StarterWrapper from "./Containers/StarterWrapper";
import styled from "styled-components";
import theme from "../constants/theme";
import Header from "./Atoms/Header";
import Button from "./Atoms/Button";

interface Props extends RouteComponentProps<any> {
  users: Users;
  createUser: (data: User) => void;
}

const Register: React.FC<Props> = ({ users, createUser, history }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleClick = () => {
    const userExists = users.find(user => user.username === username);
    if (!userExists) {
      createUser({ username, password });
      setError("");
      history.push("/");
    } else {
      setError(`Username "${username}" already exists!`);
    }
  };

  return (
    <StarterWrapper>
      <Header variant="Large">Register</Header>
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
      <Button onClick={handleClick}>Register</Button>
      <BlockedLink to="/">Login</BlockedLink>
    </StarterWrapper>
  );
};

const mapStateToProps = ({ users }: AppState) => ({
  users
});

export default withRouter(
  connect(
    mapStateToProps,
    { createUser }
  )(Register)
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

const Error = styled(Header)`
  height: 1rem;
  color: ${theme.colors.rustyRed};
`;

const BlockedLink = styled(Link)`
  margin: 1rem 0;
  display: block;
  color: ${theme.colors.wine};
  font-weight: 600;
`;
