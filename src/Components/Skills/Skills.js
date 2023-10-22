import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">I am a skilled Frontend Developer proficient in designing user-friendly web interfaces and proficient in Android Studio for mobile app development. My focus is on creating visually appealing, user-centered solutions that stay up-to-date with industry trends. I excel at bridging design and code to deliver high-quality digital experiences.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src="./frontend2.png" alt="" className="skillBarImg" /> {/* <a href="https://www.flaticon.com/free-icons/web-page" title="web page icons">Web page icons created by rukanicon - Flaticon</a> */}
                <div className="skillBarText">
                    <h2>Front-End Development</h2>
                    <p>I'm a Front-End Developer, creating user-friendly web experiences with a focus on design and interactivity.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src="./appdesign2.png" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Android App Development</h2>
                    <p>I'm an experienced Android app developer known for crafting user-friendly, high-performance mobile solutions.</p>
                </div>
            </div>
            {/* <div className="skillBar">
                <img src="" alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Heading</h2>
                    <p>Paragraph</p>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Skills