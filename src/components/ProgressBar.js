import React from "react";

export default function ProgressBar({ option, allVotes }) {
  const handlePercentage = elm => {
    return elm.votes.length > 0
      ? Math.round((option.votes.length / allVotes) * 100)
      : "0";
  };
  return (
    <div className='card-footer w-100 border-0'>
      <div className='progress'>
        <div
          className='progress-bar bg-warning '
          role='progressbar'
          style={{
            width: `${handlePercentage(option)}%`,
            color: "black",
            overflow: "visible",
            textIndent: "7px",
          }}
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}>
          {handlePercentage(option)}%
        </div>
      </div>
    </div>
  );
}
