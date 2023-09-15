import React from "react";
import '../styles/Projects.css';

const Projects = () => {
    return (
    <div className="projects">
        <div className="completed-projects">
            <h2>Completed Projects:</h2>
            <div className="texas-hold-em">
                <h4>Texas Hold 'Em Game Creation</h4>
                <p>Description: For the CSC 132 Project, the class gathered in teams to create a product from scratch. Our team recreated Texas Hold 'Em in Python and utilized GitHub to host our code. As a Back End Developer, I wrote code that dealt with creating the process that is the game and how it communicates within itself.</p>
            </div>
        </div>
        <div className="current-projects">
            <h2>Currently In Progress:</h2>
            <div className="portfolio-website">
                <h4>Portfolio Website</h4>
                <p>Description: This website right here.</p>
            </div>
        </div>
        <div className="on-hold-projects">
            <h2>On Hold:</h2>
            <div className="cyen403002-website">
                <h4>CYEN 403-002 Project Website</h4>
                <p>Description: website for our project in this class.</p>
            </div>
        </div>
    </div>
    );
}

export default Projects;