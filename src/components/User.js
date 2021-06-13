import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setAuthed } from "../actions/authedUser";

const User = ({
  userId,
  user,
  dispatch,
  authedUser,
  navUser,
  rank,
}) => {
  const { name, avatarURL, answers, questions } = user;
  const handleClick = () => {
    authedUser === null && dispatch(setAuthed(userId));
  };
  const handleSignout = () => {
    dispatch(setAuthed(null));
  };
  return (
    <Fragment>
      <div
        className={`btn btn-outline-primary w-100 card shadow ${
          navUser ? "text-white bg-dark" : ""
        }
      ${userId === authedUser && "bg-danger text-light"}
      `}
        style={{ cursor: "pointer" }}
        onClick={handleClick}>
        <div className={`card-body w-100 ${navUser && "py-sm-0"}`}>
          <div className='row align-items-center'>
            {rank && (
              <span className='fs-3 col-2 text-nowrap'>{rank}.</span>
            )}
            <div className='col-2'>
              <div
                className='rounded-circle'
                style={{
                  width: "50px",
                  height: "50px",
                  overflow: "hidden",
                  background: `url("${avatarURL}") no-repeat center center`,
                  backgroundSize: "cover",
                }}></div>
            </div>
            <div className='col text-lg-start text center'>
              <h3
                className={`d-inline font-weight-normal ${
                  navUser ? "fs-5" : ""
                }`}>
                {name}
              </h3>
              {authedUser === userId && navUser && (
                <h6>
                  <button
                    onClick={handleSignout}
                    className='btn btn-secondary btn-sm rounded-pill py-0'>
                    Sign Out
                  </button>
                </h6>
              )}
            </div>
            <div className={`${navUser ? "col-5" : "col-md-5"}`}>
              <div className='row'>
                <div className={navUser ? "col" : "col-6"}>
                  <button
                    className={`btn w-100 ${
                      navUser
                        ? "btn-dark text-end py-1"
                        : "btn-outline-dark text-center"
                    }`}>
                    <h4
                      className={navUser ? "d-inline px-2 fs-6" : ""}>
                      {questions.length}
                    </h4>
                    <span className='badge rounded-pill bg-secondary font-weight-light'>
                      Questions
                    </span>
                  </button>
                </div>
                <div className={navUser ? "col" : "col-6"}>
                  <button
                    className={`btn w-100 ${
                      navUser
                        ? "btn-dark text-end py-1"
                        : "btn-outline-dark text-center"
                    }`}>
                    <h4
                      className={navUser ? "d-inline px-2 fs-6" : ""}>
                      {Object.keys(answers).length}
                    </h4>
                    <span className='badge rounded-pill bg-secondary font-weight-light'>
                      Answered
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (
  { users, authedUser },
  { userId, navUser, rank }
) => ({
  user: users[userId],
  userId,
  authedUser,
  navUser,
  rank,
});

export default connect(mapStateToProps)(User);
