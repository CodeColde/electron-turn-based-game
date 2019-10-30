import * as React from "react";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { AppState } from "../redux";
import { deleteUser } from "../redux/registration/actions";
import { logout } from "../redux/player/logout";
import { LogoutAction, PlayerProps } from "../redux/player/types";
import { DeleteUserAction, Users } from "../redux/registration/types";
import BaseWrapper from "./Containers/BaseWrapper";
import Button from "./Atoms/Button";
import Header from "./Atoms/Header";

interface Props extends RouteComponentProps<any> {
  logout: LogoutAction;
  deleteUser: DeleteUserAction;
  users: Users;
  player: PlayerProps;
}

const AccountDetails: React.FC<Props> = ({
  logout,
  deleteUser,
  users,
  player,
  history
}) => {
  const user = users.find(item => item.username === player.username);

  const handleDeleteAccount = () => {
    if (user) {
      if (window.confirm("Are you sure?")) {
        if (prompt(`Please enter your password to confirm`) === user.password) {
          deleteUser(user.username);
          handleLogout();
        }
      }
    }
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <BaseWrapper>
      <Header variant="Large">Account Details</Header>
      <Header>Username</Header>
      {user && <p>{user.username}</p>}
      <Header>Password</Header>
      {user && <p>{user.password}</p>}
      <Button onClick={handleLogout} marginRight>
        Logout
      </Button>
      <Button onClick={handleDeleteAccount} variant="Danger">
        Delete Account
      </Button>
    </BaseWrapper>
  );
};

const mapStateToProps = ({ player, users }: AppState) => ({
  player,
  users
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      deleteUser,
      logout
    }
  )(AccountDetails)
);
