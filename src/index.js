import React from 'react';
import ReactDOM from 'react-dom';
import GithubJobs from './components/GithubJobs'

const App = () => {
  return (
    <GithubJobs />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))