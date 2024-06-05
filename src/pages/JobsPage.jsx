import React from 'react'
import JobListings from '../components/JobListings'
import Hero from '../components/Hero'
const JobsPage = () => {
  return (
   <>
   <Hero isHome = {false}/>
   <section className='bg-blue-50 px-4 py-6'>
      <JobListings isHome={false} />
   </section>
   </>
  )
}

export default JobsPage