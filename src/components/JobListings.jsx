import React from 'react'
import { useState,useEffect } from 'react'
import JobListingCard from "./JobListingCard"
import Spinner from './Spinner'
const JobListings = ({isHome}) => {
  const [jobs,setJobs] = useState([]); 
  const [loading,setLoading] = useState(true); 
  useEffect(()=> {
    const fetchJobs = async() => {
      const apiURL = isHome?'/api/jobs?_limit=3':'/api/jobs';
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
          console.log(`error fetching data:::>`,error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  },[]);
  return (
    <>
     {/* <!-- Browse Jobs --> */}
     <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome 
            ? jobs.length === 1 
              ? 'Recent Job' 
              : 'Recent Jobs' 
            : jobs.length === 1 
              ? 'All Job' 
              : 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <>
            <Spinner loading={true} />
            </>
          ):(
            <>
              {jobs.map((job) => (
                <JobListingCard key = {job.id} job = {job} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
    </>
  )
}

export default JobListings