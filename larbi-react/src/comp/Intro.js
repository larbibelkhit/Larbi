import React from 'react'
import '../styles/Intro.css'
import '../styles/Global.css'

const Intro = () => {
  return (
    <div className='introduction'>
        <span className="intro-title">
            {"hello, this is "}
            <span className="intro-name">{"Larbi"}</span>.
        </span>
        <div className="intro-subtitle">I try to code</div>
        
        <div className="intro-description">
                I am a Computer Science student based in London. I have great interest in
                artificial intelligence, human-computer interaction, game development, and
                everything in between.
        </div>
        <a href="mailto:larbibelkhit@outlook.com" className="intro-contact">contact me</a>
    </div>
  )
}

export default Intro