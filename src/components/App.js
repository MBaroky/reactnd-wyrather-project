import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

import { handleGetQuestions } from "../actions/questions";
import { handleGetUsers } from "../actions/users";

function App({ authed, dispatch }) {
  useEffect(() => {
    dispatch(handleGetUsers());
    dispatch(handleGetQuestions());
  }, [dispatch]);
  return (
    <Switch>
      {
        !authed && <LoginPage /> // if not signed in
      }
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route path='/question/:id'> Question Page</Route>
      <Route path='/add'>new Question</Route>
      <Route path='/leaderboard'>leaderboard</Route>
      <Route path='*'>404 page</Route>
    </Switch>
  );
}
const mapStateToProps = state => ({
  authed: state.authedUser,
});

export default connect(mapStateToProps)(App);
