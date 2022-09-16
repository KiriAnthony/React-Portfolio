import React from "react";
import runBuddyImg from "../../images/run-buddy_Screenshot.png";
import moveiesImg from "../../images/movies screenshot.png";
import myPantryImg from "../../images/my-pantry screenshot.png";
import wheytsUpImg from "../../images/Wheyts-Up screenshot.png";

function Projects() {
    return (
        <div id="projects">
            {/* projects section */}
            <h2>Projects</h2>
            {/* <a href="https://wheyts-up.herokuapp.com/"><img
                title="Budget App"
                class="projects" src={wheytsUpImg}
                alt="Budget App Websit Homepage" /></a>
            <p>Budget App is an app designed to be a simple and easy to use budgeting app that does not need to connect to your bank account. Built using MongoDB, React.js, JSON web Tokens and more by Kiri and Keian.</p> */}
            <a href="https://wheyts-up.herokuapp.com/"><img
                title="Wheyts Up"
                class="projects" src={wheytsUpImg}
                alt="Wheyts Up Website Homepage" /></a>
            <p>Wheyts Up is designed to allow users to create workout routines and rate them for ease of use at the gym, build by Kiri, Becca, Bryan, and Jace</p>
            <a href="https://whispering-tundra-55246.herokuapp.com/"><img
                title="My Pantry"
                class="projects" src={myPantryImg}
                alt="My Pantry Website Homepage" /></a>
            <p>My pantry is designed to allow users to access a list of foods they have on the go built by Kiri, Jonathan, Griffin, and Drew.</p>
            <a href="https://cwmasters.github.io/moveiesfinal/"><img
                title="Moveies" class="projects"
                src={moveiesImg} alt="Movies Website Homepage" /></a>
            <p>Movies is a site to search movies by year built by Kiri, Becca, and Chris. This site utilied third party APIs, teamwork, and communication.</p>
            <a href="https://KiriAnthony.github.io/run-buddy"><img title="Run Buddy"
                class="first-project projects" src={runBuddyImg}
                alt="Run-Buddy Website Homepage" /></a>
            <p>Run-Buddy is the First Website Built by Kiri. This site specialized in CSS, HTML, and JavaScript.</p>
        </div>
    );
}

export default Projects;