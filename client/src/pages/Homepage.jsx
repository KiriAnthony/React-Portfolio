import React from "react";
import "./Homepage.css";
import selfImg from "../images/self-image-small.jpg";
import runBuddyImg from "../images/run-buddy_Screenshot.png";
import moveiesImg from "../images/movies screenshot.png";
import myPantryImg from "../images/my-pantry screenshot.png";
import wheytsUpImg from "../images/Wheyts-Up screenshot.png";

import { Box } from "@mui/material";

function Homepage() {
    return (
        <Box>
            <Box id="about">
                <h2>About Me</h2>
                <img title="Image of Kiri" class="self-img" src={selfImg} alt="Kiri's face" />
                <p>Hello! My name is Kiriko Anthony and I go by Kiri for short. I have a background in an Anti Money
                    Laundering (AML) and terrorist financing specialty in financing. I have enjoyed my job as an AML Analyst
                    and that it is something so impactful to not only our own country but also to the global safety in the
                    financial industry. I am looking for a job that provides just as meaningful of an outcome but is also
                    more challenging and allows me to help solve problems daily. I believe that I will be most able to
                    accheive this within the technology industry, especially through the use of coding.</p>
            </Box>
            <Box id="projects">
                {/* projects section */}
                <h2>Projects</h2>
                <a href="https://KiriAnthony.github.io/run-buddy"><img title="Run Buddy"
                    class="first-project" src={runBuddyImg}
                    alt="Run-Buddy Website Homepage" /></a>
                <p>Run-Buddy is the First Website Built by Kiri. This site specialized in CSS, HTML, and JavaScript.</p>
                <a href="https://cwmasters.github.io/moveiesfinal/"><img
                    title="Moveies" class="projects"
                    src={moveiesImg} alt="Movies Website Homepage" /></a>
                <p>Movies is a site to search movies by year built by Kiri, Becca, and Chris. This site utilied third party APIs, teamwork, and communication.</p>
                <a href="https://whispering-tundra-55246.herokuapp.com/"><img
                    title="My Pantry"
                    class="projects" src={myPantryImg}
                    alt="My Pantry Website Homepage" /></a>
                <p>My pantry is designed to allow users to access a list of foods they have on the go built by Kiri, Jonathan, Griffin, and Drew.</p>
                <a href="https://wheyts-up.herokuapp.com/"><img
                    title="Wheyts Up"
                    class="projects" src={wheytsUpImg}
                    alt="Wheyts Up Website Homepage" /></a>
                <p>Wheyts Up is designed to allow users to create workout routines and rate them for ease of use at the gym, build by Kiri, Becca, Bryan, and Jace</p>
            </Box>
            <Box id="travels">
                {/* travels section */}
            </Box>
            <Box id="contact">
                {/* contact section */}
                <h2>Contact</h2>
                <p>Phone Number: 425-420-6466</p>
                <p>Email: Kiriko.Anthony@gmail.com</p>
                <p><a href="www.linkedin.com/in/KiriAnthony" id="p">Linkedin: www.linkedin.com/in/kiri-anthony</a></p>
                <p><a href="https://github.com/KiriAnthony" id="p">GitHub: https://github.com/KiriAnthony</a></p>
            </Box>
        </Box>
    );
}

export default Homepage;