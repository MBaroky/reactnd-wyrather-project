import { connect } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function App({ authed }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Switch>
      {
        !authed && <LoginPage /> // if not signed in
      }
      <Route exact path='/'>
        <Dashboard />
      </Route>
      <Route path='*'>404 page</Route>
    </Switch>
  );
}
const mapStateToProps = state => ({
  authed: state.authedUser,
});

export default connect(mapStateToProps)(App);
