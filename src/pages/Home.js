import React from "react";
import Pict1 from "../assets/texasHoldEmLogo.jpg"
import Pict2 from "../assets/portfolio-pic.png"
import '../styles/Home.css';

const Home = () => {
    return(
        <div className="home">
            <div className="intro">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <img src={Pict2}></img>
                </div>
                <div className="about-me">
                    <h2>About Me</h2>
                    <div className="about-me-text">I am Senior Cyber Engineer at LaTech. My major is not specified to a certain profession and gives me a broad understanding of a lot of interesting topics. My professional goal is to maintain, innovate, and collaborate over technology that prove helpful to most. For example, working with a team of like-minded individuals on the Apple watch or the garmin forerunner watch. With the skills I've developed over the last 4 years of college and my drive to learn, I hope to achieve this one day.</div>
                </div>
            </div>
            <div className="education">
                <h2>Education</h2>
                <p>Louisiana Tech University</p>
            </div>
            <div className="experience">
                <h2>Exp.</h2>
                <p>lorem espli</p>
            </div>
        </div>
    );
}

export default Home;