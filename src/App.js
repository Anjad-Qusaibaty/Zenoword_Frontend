import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import Home from "../src/pages/Home/index";
import { Navbar } from "./components/navbar";
import { AccountBox } from "./components/accountBox";
import styled from "styled-components";
import { Pwreset } from "./components/accountBox/pwReset";
import { EmailConfAlt } from "./components/accountBox/emailConf";
import { Appfooter } from "./components/footer/appfooter";

const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
  `;
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <MessageBox />

      {isLoading ? <Loading /> : null}
      <div style={{ paddingBottom: "2.5rem" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/other" component={Other} />
          <AppContainer>
            <Route path="/login" component={AccountBox} />
            <Route path="/patchpw/:token" component={Pwreset} />
            <Route path="/emailconf" component={EmailConfAlt} />
          </AppContainer>
        </Switch>
      </div>
      <Appfooter />
    </div>
  );
}

export default App;
