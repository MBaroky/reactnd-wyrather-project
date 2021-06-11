import React from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";

export default function QuestionPage() {
  const { id } = useParams();
  return (
    <div className='container'>
      <div className='border p-4 bg-light my-2'>
        <h1 className='display-4 text-center'>Would You Rather..?</h1>
      </div>
      <Question id={id} />
    </div>
  );
}
