import React from 'react'
import JobList from './JobList'
import '../styles/Experience.css'

const Experience = () => {
  return (
    <div className="experience">
        <div className="section-header">
            <span className="section-title">./ experience</span>
        </div>
        <JobList></JobList>
    </div>
  )
}

export default Experience