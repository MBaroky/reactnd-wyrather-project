import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";

// Nav links after login
const pages = [
  { title: "HOME", path: "/" },
  { title: "ADD QUESTION", path: "/add" },
  { title: "LEADERBOARD", path: "/leaderboard" },
];

export const Dashboard = ({ authed }) => {
  return (
    <div>
      <Nav pages={pages} />
      <p>{authed}</p>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authed: authedUser,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
