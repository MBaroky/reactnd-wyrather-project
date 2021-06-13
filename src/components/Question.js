import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/shared";
import ProgressBar from "./ProgressBar";

const Question = ({
  id,
  question,
  authedUser,
  authorName,
  authorImg,
  dispatch,
}) => {
  const history = useHistory();
  const params = useParams();

  const { timestamp, optionOne, optionTwo } = question;
  const isOnPage = params.id === id;
  const answered =
    optionOne.votes.includes(authedUser) ||
    optionTwo.votes.includes(authedUser)
      ? true
      : false;
  const allVotes = optionOne.votes.length + optionTwo.votes.length;
  const handleClick = () => {
    history.push(`/questions/${id}`);
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
    answered
      ? e.preventDefault()
      : dispatch(
          handleSaveQuestionAnswer({ authedUser, qid: id, answer })
        );
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
            <div className='card-body w-100 text-start'>
              {optionOne.text}
              {answered && isOnPage && (
                <span className='badge rounded-circle bg-dark pill-badge float-end'>
                  {optionOne.votes.length}
                </span>
              )}
            </div>
            {answered && isOnPage && (
              <ProgressBar allVotes={allVotes} option={optionOne} />
            )}
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
            <span className='card-body w-100 text-start'>
              {optionTwo.text}
              {answered && isOnPage && (
                <span className='badge rounded-circle bg-dark pill-badge float-end'>
                  {optionTwo.votes.length}
                </span>
              )}
            </span>

            {answered && isOnPage && (
              <ProgressBar allVotes={allVotes} option={optionTwo} />
            )}
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
  { id }
) => {
  const question = questions[id];
  const authorName = questions[id] && users[question.author].name;
  const authorImg = questions[id] && users[question.author].avatarURL;
  return { id, question, authedUser, authorName, authorImg };
};

export default connect(mapStateToProps)(Question);
