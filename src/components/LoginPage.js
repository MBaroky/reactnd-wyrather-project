import Nav from "./Nav";
import User from "./User";
import { connect } from "react-redux";

const LoginPage = ({ usersIds }) => {
  return (
    <div>
      <Nav />
      <div className='container'>
        <ul className='list-unstyled'>
          {usersIds.length !== 0 &&
            usersIds.map(userId => (
              <li className='px-4 py-2' key={userId}>
                <User userId={userId} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }, { pathname }) => {
  return {
    usersIds: Object.keys(users),
    pathname,
  };
};

export default connect(mapStateToProps)(LoginPage);
