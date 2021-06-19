import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Email_conf from "./pages/Password_Reset/Email_conf";
import Pw_reset from "./pages/Password_Reset/Pw_reset";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import Home from "../src/pages/Home/index";
import { Navbar } from "./components/navbar";

const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <MessageBox />

      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/emailconf" component={Email_conf} />
        <Route path="/patchpw/:token" component={Pw_reset} />
      </Switch>
    </div>
  );
}

export default App;
