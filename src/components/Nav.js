import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import User from "./User";

export const Nav = ({ pages, authedUser }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <div className='container-fluid'>
        <div className='nav navbar-nav w-100'>
          {!pages && <h3 className='text-light'>Sign in as:</h3>}
          {pages &&
            pages.map(page => {
              const { title, path } = page;
              return (
                <NavLink
                  to={path}
                  key={title}
                  className='btn nav-link d-inline'
                  activeClassName='active'>
                  {title}
                </NavLink>
              );
            })}
        </div>
        <div style={{ minWidth: "420px" }}>
          {authedUser && <User navUser={true} userId={authedUser} />}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ authedUser }, { pages }) => ({
  pages,
  authedUser,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
