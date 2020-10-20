import React from 'react';
import JobInfo from './JobInfo';
import './jobcard.css';

const JobCard = (props) => {
  return (
    <div className='job-card'>
      <img src={`${props.image}`} alt='company'/>
      <div>
        <p>{props.companyName}</p>
        <p>{props.jobTitle}</p>
        <JobInfo
          type={props.type}
          location={props.location}
          posted={props.created_at}
        />
      </div>
    </div>
  )
}

export default JobCard