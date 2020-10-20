import React from 'react';
import JobBoard from './JobBoard';
import Search from './Search';
import '../index.css';

const GithubJobs = () => {
  return (
    <div className="container">
      <h1>Github Jobs</h1>
      <Search />
      <JobBoard />
    </div>
  )
}

export default GithubJobs