import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/shared";

const Question = ({
  id,
  question,
  filter,
  authedUser,
  authorName,
  authorImg,
  dispatch,
}) => {
  let history = useHistory();
  const { timestamp, optionOne, optionTwo } = question;
  const handleClick = () => {
    history.push(`/question/:${id}`);
  };
  const dateFormatter = stamp => {
    const date = new Date(stamp);
    const time = date.toLocaleTimeString("en-US");
    return `${date.toLocaleDateString("en-GB")} ( ${time.substr(
      0,
      4
    )} ${time.slice(-2)})`;
  };

  const handleChooseOption = (answer, e) => {
    // e.preventDefault();
    // const answer = e.target.name;
    filter !== "answered"
      ? dispatch(
          handleSaveQuestionAnswer({ authedUser, qid: id, answer })
        )
      : e.preventDefault();
  };
  return (
    <div
      className={`container mb-5 border p-2`}
      style={{ cursor: "pointer" }}>
      <div className='row'>
        <div className={`col`}>
          <button
            name='optionOne'
            onClick={e => handleChooseOption("optionOne", e)}
            className={`w-100 card btn btn-outline-danger text-white ${
              optionOne.votes.includes(authedUser)
                ? "bg-danger"
                : "bg-secondary"
            }`}>
            <div className='card-body'>{optionOne.text}</div>
          </button>
        </div>
        <div className={`col`}>
          <button
            name='optionTwo'
            onClick={e => handleChooseOption("optionTwo", e)}
            className={`w-100 card btn btn-outline-primary text-white ${
              optionTwo.votes.includes(authedUser)
                ? "bg-primary"
                : "bg-secondary"
            }`}>
            <div className='card-body'>{optionTwo.text}</div>
          </button>
        </div>
      </div>
      <div onClick={handleClick} className='card'>
        <div
          className='card-body mx-auto my-2'
          style={{ maxWidth: "320px" }}>
          <div className='row'>
            <div className='col-3'>
              <div
                className='rounded-circle'
                style={{
                  width: "50px",
                  height: "50px",
                  overflow: "hidden",
                  background: `url("${authorImg}") no-repeat center center`,
                  backgroundSize: "cover",
                }}></div>
            </div>
            <div className='col'>
              <p className='my-0'>{authorName}</p>
              <p style={{ color: "gray" }}>
                {dateFormatter(timestamp)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (
  { questions, authedUser, users },
  { id, filter }
) => {
  const question = questions[id];
  const authorName = users[question.author].name;
  const authorImg = users[question.author].avatarURL;
  return { id, question, filter, authedUser, authorName, authorImg };
};

export default connect(mapStateToProps)(Question);
