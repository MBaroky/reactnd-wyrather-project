import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoadingBarContainer from "react-redux-loading";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import Nav from "./Nav";

import { handleInitialData } from "../actions/shared";
// Nav links after login
const pages = [
  { title: "HOME", path: "/" },
  { title: "ADD QUESTION", path: "/add" },
  { title: "LEADERBOARD", path: "/leaderboard" },
];

function App({ authed, loading, dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Fragment>
      <LoadingBarContainer style={{ zIndex: "9999" }} />
      {!authed ? (
        <div>
          <LoginPage />
          {loading && (
            <div className='container'>
              <h3>Loading...</h3>
            </div>
          )}
        </div>
      ) : (
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
      )}
    </Fragment>
  );
}
const mapStateToProps = ({ authedUser, users, questions }) => ({
  authed: authedUser,
  loading:
    Object.keys(users).length === 0 ||
    Object.keys(users).length === 0,
});

export default connect(mapStateToProps)(App);
