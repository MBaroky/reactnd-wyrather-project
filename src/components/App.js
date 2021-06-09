import { Nav } from "./Nav";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleGetQuestion } from "../actions/questions";
import { handleGetUsers } from "../actions/users";
import { setAuthed } from "../actions/authedUser";

function App(props) {
  const { authed, dispatch } = props;
  useEffect(() => {
    dispatch(setAuthed("johndoe"));
    dispatch(handleGetQuestion());
    dispatch(handleGetUsers());
  }, [dispatch]);
  return (
    <div className='app'>
      <Nav />
      <p>{authed}</p>
    </div>
  );
}
const mapStateToProps = state => ({
  authed: state.authedUser,
});

export default connect(mapStateToProps)(App);
