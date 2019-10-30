import * as React from "react";
import { connect } from "react-redux";
import { hasCharacter } from "../redux/player/actions";
import { logout } from "../redux/player/logout";
import { LogoutAction, PlayerProps } from "../redux/player/types";
import { withRouter, RouteComponentProps, Link } from "react-router-dom";
import { AppState } from "../redux";
import styled from "styled-components";
import theme from "../constants/theme";

interface Props extends RouteComponentProps<any> {
  logout: LogoutAction;
  player: PlayerProps;
}

const Menu: React.FC<Props> = ({ logout, player, history }) => {
  React.useEffect(() => {
    const pathOk = ["/", "/register", "/examples"];
    if (!pathOk[window.location.pathname] && !player.username) {
      history.push("/");
    }
    if (player.username && window.location.pathname === "/") {
      if (hasCharacter(player.username)) {
        history.push("/select/");
      } else {
        history.push("/create/");
      }
    }
  }, [history, player]);

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <Navigation>
      {window.location.pathname !== "/" && player.username ? (
        <NavLink to="/characters/">Home</NavLink>
      ) : (
        window.location.pathname !== "/" && <NavLink to="/">Home</NavLink>
      )}
      {player.username && (
        <>
          <NavLink to="/account-details/">Account Details</NavLink>
          <NavButton onClick={handleLogout}>Logout</NavButton>
        </>
      )}
    </Navigation>
  );
};

const mapStateToProps = ({ player }: AppState) => ({
  player
});

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Menu)
);

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  z-index: 1;
`;

const NavLink = styled(Link)`
  padding: 2rem;
  color: ${theme.colors.eggshell};
  margin-right: 2rem;
  display: inline-block;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const NavButton = styled.button`
  padding: 2rem;
  color: ${theme.colors.eggshell};
  margin-right: 2rem;
  text-decoration: none;
  border: 0;
  outline: 0;
  background-color: transparent;
  float: right;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
