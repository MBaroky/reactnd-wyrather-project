import React, { useEffect } from "react";
import Nav from "./Nav";
import User from "./User";
import { connect } from "react-redux";

import { handleGetUsers } from "../actions/users";

const LoginPage = ({ usersIds, dispatch }) => {
  useEffect(() => {
    dispatch(handleGetUsers());
  }, [dispatch]);
  console.log(usersIds);
  return (
    <div>
      <Nav />
      <ul className='list-group list-group-flush'>
        {usersIds.length !== 0 &&
          usersIds.map(userId => (
            <li
              className='list-group-item border-0 py-4'
              key={userId}>
              <User userId={userId} />
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ users }, { pathname }) => {
  console.log(users);
  return {
    usersIds: Object.keys(users),
    pathname,
  };
};

export default connect(mapStateToProps)(LoginPage);
