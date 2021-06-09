import React from "react";
import { connect } from "react-redux";

export const Nav = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <div className='navbar-nav'>
          <button className='btn nav-link'>HOME </button>
          <button className='btn nav-link'>ADD QUESTION </button>
          <button className='btn nav-link'>LEADERBOARD </button>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
