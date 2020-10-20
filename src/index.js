import React from 'react';
import ReactDOM from 'react-dom';
import JobBoard from './components/JobBoard'

const App = () => {
  return (
    <JobBoard />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))