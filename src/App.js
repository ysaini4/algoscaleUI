import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/login";
import Tweets from "./components/tweets";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/tweets" component={Tweets} />
        <Redirect from="/" to="/login" exact />
      </Switch>
    </React.Fragment>
  );
}

export default App;
