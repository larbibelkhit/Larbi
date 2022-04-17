import React from 'react'

const JobList = () => {

    const experienceItems = {
        "ABI Research": {
            jobTitle: "Research Analyst Intern @",
            duration: "JUN 2021 - PRESENT",
            description: [
                "Produced estimates for shipment data of different technology devices and associated OEMs",
                "Delivered a deep-dive analysis of TinyML and EdgeAI, including shipment forecasts and current vendor landscape",
                "Collected Key Performance Indicator data for AI chipset companies"
            ]
        },
        "Chislehurst Chiropractic Clinic": {
            jobTitle: "Office Assistant @",
            duration: "OCT 2018 - JUN 2020",
            description: [
                "Archived patient files and pulled patient files for next working day",
                "Assisted receptionists with answering customer calls",
                "Used Google Sheets and Google Docs for daily patient tracking and workday notes"
            ]
        }
    }

  return (
    <div className='joblist-container'>
        <div className="experience-content">
            {Object.keys(experienceItems).map((key, i) => (
                <div className="job-container">
                    <span className="job-title">
                        {experienceItems[key]["jobTitle"] + " "}
                    </span>
                    <span className="job-company">{key}</span>
                    <div className="job-duration">
                        {experienceItems[key]["duration"]}
                    </div>
                    <ul className="job-description">
                        {experienceItems[key]["description"].map(function (descItem, i) {
                            return (
                                <li key={i}>{descItem}</li>
                            )
                        })}
                    </ul>
                </div>
            ))}
        </div>
    </div>
  )
}

export default JobList