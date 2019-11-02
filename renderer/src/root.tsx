import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCharacter from "./components/CreateCharacter";
import SelectCharacter from "./components/SelectCharacter";
import Login from "./components/Login";
import Register from "./components/Register";
import AccountDetails from "./components/AccountDetails";
import Menu from "./components/Menu";
import EnemySelect from "./components/EnemySelect";
import Battlefield from "./components/Battlefield";
import { logout } from "./reduxState/player/logout";
import { connect } from "react-redux";

const Root = () => {
  return (
    <Router>
      <Menu />
      <Route exact path="/" component={Login} />
      <Route path="/create/" component={CreateCharacter} />
      <Route path="/characters/" component={SelectCharacter} />
      <Route path="/select/" component={EnemySelect} />
      <Route path="/battlefield/" component={Battlefield} />
      <Route path="/account-details/" component={AccountDetails} />
      <Route path="/register/" component={Register} />
    </Router>
  );
};

export default connect(null, {
  logout
})(Root);
