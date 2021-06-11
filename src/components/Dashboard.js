import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Question from "./Question";

export const Dashboard = ({ authedUser, qIds, answered }) => {
  const [filter, setfilter] = useState("unanswered");
  useEffect(() => {
    if (answered.length === qIds.length) {
      setfilter("answered");
    } else {
      setfilter("unanswered");
    }
  }, [answered, qIds]);
  return (
    <div>
      <div className='container'>
        <div className='border p-4 bg-light mt-2'>
          <h1 className='display-4'>Dashboard</h1>
        </div>
        <div className='row'>
          <ul className='nav nav-pills p-4'>
            <button
              name='unanswered'
              onClick={e => {
                setfilter(e.target.name);
              }}
              className={`nav-link ${
                filter === "unanswered" && "active"
              } ${
                answered.length === qIds.length && "text-secondary"
              }`}
              disabled={answered.length === qIds.length}>
              Unanswered
            </button>
            <button
              name='answered'
              onClick={e => setfilter(e.target.name)}
              className={`nav-link ${
                filter === "answered" && "active"
              }`}>
              Answered
            </button>
          </ul>
        </div>
        <ul id='questions-wrapper' className='p-4 list-unstyled'>
          {}
          {qIds
            .filter(qId =>
              filter === "unanswered"
                ? !answered.includes(qId)
                : answered.includes(qId)
            )
            .map(qId => (
              <li key={qId}>
                <Question id={qId} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  qIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
  answered: Object.keys(users[authedUser].answers),
});

export default connect(mapStateToProps)(Dashboard);
