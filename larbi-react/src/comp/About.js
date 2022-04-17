import React from 'react'
import '../styles/About.css'
import '../styles/Global.css'

const About = () => {
    const description = (
        <p>
            I am currently a third year <b>Computer Science</b> student at {" "}
            <a href="https://www.qmul.ac.uk/about/">
                 Queen Mary, University of London
            </a>.
            I am also a part-time Research Analyst Intern at {" "}
            <a href="https://www.abiresearch.com/pages/about-us/">
                ABI Research
            </a>
        </p>
    )

    const interests = (
        <p>
            Outside of work, I'm interested in following the developments
            of science, sports such as Formula 1, basketball and football. I also play
            a lot of video games.
        </p>
    )

    const tech_stack = [
        "Javascript",
        "Python",
        "React.js",
        "Java",
        "HTML & CSS",
    ]


  return (
    <div className="about">
        <div className="section-header">
            <span className="section-title">./ about</span>
        </div>
        <div className="about-content">
            <div className="about-description">
                {[description]}
                {"Here are some technologies I have been working with:"}
                <ul className="tech-stack">
                    {tech_stack.map(function (tech_item) {
                        return (
                            <li>{tech_item}</li>
                        )
                    })}
                </ul>
                {[interests]}
            </div>
            <div className="about-image">
                <img src="#" alt="Larbi Image" />
            </div>
        </div>
    </div>
  )
}

export default About