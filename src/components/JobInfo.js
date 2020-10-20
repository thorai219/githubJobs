import React from 'react';

const JobInfo = (props) => {
  return (
    <div>
      <p>{props.type}</p>
      <p>{props.location}</p>
      <p>{props.created_at}</p>
    </div>
  )
}

export default JobInfo