import React from 'react';

const JobInfo = (props) => {
  return (
    <div className='job-description'>
      <p>{props.location}</p>
      <p>{props.created}</p>
    </div>
  )
}

export default JobInfo