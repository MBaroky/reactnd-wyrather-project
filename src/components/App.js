import { Nav } from "./Nav";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleGetQuestion } from "../actions/questions";
import { handleGetUsers } from "../actions/users";
import { setAuthed } from "../actions/authedUser";

function App(props) {
  useEffect(() => {
    props.dispatch(setAuthed("johndoe"));
    props.dispatch(handleGetQuestion());
    props.dispatch(handleGetUsers());
  }, []);
  return (
    <div className='app'>
      {console.log(props.state.questions)}
      <Nav />
    </div>
  );
}
const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(App);
