import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

export const NewQuestion = ({ dispatch }) => {
  const [valueOne, setvalueOne] = useState("");
  const [valueTwo, setvalueTwo] = useState("");
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      handleAddQuestion({
        optionOneText: valueOne,
        optionTwoText: valueTwo,
      })
    );
    setvalueOne("");
    setvalueTwo("");
    history.push("/");
  };
  return (
    <div className='container'>
      <div className='border p-4 bg-light my-2'>
        <h1 className='display-4 text-center'>Would You Rather..?</h1>
      </div>
      <form className='row g-2' onSubmit={handleSubmit}>
        <div className='col-md'>
          <div className='form-floating'>
            <textarea
              style={{ height: "250px" }}
              type='text'
              className='form-control'
              id='optionOne'
              placeholder='Option #1'
              value={valueOne}
              onChange={e => setvalueOne(e.target.value)}
              maxLength='280'
            />
            <label htmlFor='optionOne'>Option #1</label>
          </div>
          {280 - valueOne.length <= 100 && (
            <span className='form-text'>
              Remaining text: {280 - valueOne.length}
            </span>
          )}
        </div>
        <div className='col-md'>
          <div className='form-floating'>
            <textarea
              style={{ height: "250px" }}
              type='text'
              className='form-control'
              id='optionTwo'
              placeholder='Option #2'
              value={valueTwo}
              onChange={e => setvalueTwo(e.target.value)}
              maxLength='280'
            />
            <label htmlFor='optionTwo'>Option #2</label>
          </div>
          {280 - valueTwo.length <= 100 && (
            <span className='form-text'>
              Remaining text: {280 - valueTwo.length}
            </span>
          )}
        </div>
        <button
          className='btn btn-danger form-control'
          type='submit'
          disabled={
            valueOne.trim().length === 0 ||
            valueTwo.trim().length === 0
          }>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(NewQuestion);
