import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Question from "./Question";
import NotFoundPage from "./NotFoundPage";

const QuestionPage = ({ questions }) => {
  const { id } = useParams();
  if (!questions[id]) {
    return <NotFoundPage />;
  }
  return (
    <div className='container'>
      <div className='border p-4 bg-light my-2'>
        <h1 className='display-4 text-center'>Would You Rather..?</h1>
      </div>
      <Question id={id} />
    </div>
  );
};

const mapStateToProps = ({ questions }) => {
  return { questions };
};

export default connect(mapStateToProps)(QuestionPage);
