import React, { useState } from 'react'
import axios from 'axios';

function GetJobs() {
  const [jobs, setJobs] = useState([])
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://jobs.github.com/positions.json?location=los+angeles"

  const fetchJobs = async () => {
    try {
      const response = await axios.get(proxyurl + url)
      setJobs(response.json())
    } catch (e) {
      console.log(e)
    }
  };
}

export default GetJobs;