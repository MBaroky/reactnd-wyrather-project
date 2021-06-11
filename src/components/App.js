import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Nav from "./Nav";

import { handleGetQuestions } from "../actions/questions";
import { handleGetUsers } from "../actions/users";
// Nav links after login
const pages = [
  { title: "HOME", path: "/" },
  { title: "ADD QUESTION", path: "/add" },
  { title: "LEADERBOARD", path: "/leaderboard" },
];

function App({ authed, dispatch }) {
  useEffect(() => {
    dispatch(handleGetUsers());
    dispatch(handleGetQuestions());
  }, [dispatch]);
  if (!authed) {
    return <LoginPage />;
  }
  return (
    <Fragment>
      <Nav pages={pages} />
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/question/:id'>
          <QuestionPage />
        </Route>
        <Route path='/add'>new Question</Route>
        <Route path='/leaderboard'>leaderboard</Route>
        <Route path='*'>404 page</Route>
      </Switch>
    </Fragment>
  );
}
const mapStateToProps = state => ({
  authed: state.authedUser,
});

export default connect(mapStateToProps)(App);
