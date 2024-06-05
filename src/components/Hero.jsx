import React from 'react'
import { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
const Hero = ({ title = 'Default Title', subtitle = 'Default Subtitle' ,isHome}) => {
  const [jobcount,setJobCount] = useState(0);
  useEffect(()=> {
    const fetchJobCount = async() => {
      const apiURL = isHome?'/api/jobs?_limit=3':'/api/jobs';
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setJobCount(data.length);
      } catch (error) {
          console.log(`error fetching data:::>`,error);
      } finally {
        
      }
    }
    fetchJobCount();
  },[]);


  return (
    <>
    {/* <!-- Hero --> */}
    <section className="bg-indigo-700 py-20 mb-4">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center">
          <h1
            className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="my-4 text-xl text-white">
            {subtitle}
          </p>
          <p className="my-4 text-xl text-white">
          {isHome?
          ``:`Shown only in jobs page ${jobcount}`
          }
          </p>
        
          <SearchBar jobcountplaceholder={jobcount} />
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero