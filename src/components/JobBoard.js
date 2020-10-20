import React, { useState, useEffect } from 'react';
import JobCard from './JobCard'

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://jobs.github.com/positions.json?location=los+angeles"

  useEffect(() => {
    getGitHubJob();
  }, []);

  const getGitHubJob = async () => {
    const response = await fetch(proxyurl + url);
    const jobData = await response.json();
    setJobs(jobData);
    console.log(jobData)
  };

  return (
    <div>
      {jobs.map(job => {
        return (
          <a href='#'>
            <JobCard
              image={job.company_logo}
              name={job.company}
              apply={job.how_to_apply}
              title={job.title}
              type={job.type}
              location={job.location}
              created={job.created_at}
            />
          </a>
        )
      })}
    </div>
  )
}

export default JobBoard