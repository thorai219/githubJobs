import React from 'react';
import JobInfo from './JobInfo';

const JobCard = ({image, name, title, type, location, created}) => {
  return (
    <div className='job-card'>
      <img src={`${image}`} alt='company'/>
      <div className='job-info'>
        <p>{name}</p>
        <p>{title}</p>
        <p>{type}</p>
      </div>
      <JobInfo
        location={location}
        created={created}
      />
    </div>
  )
}

export default JobCard
