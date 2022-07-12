import React from "react";
// comment

import { Box } from "@mui/material";

function Homepage() {
    return (
        <Box>
            <Box id="about">
                <h2>About Me</h2>
                <p>Hello! My name is Kiriko Anthony and I go by Kiri for short. I have a background in an Anti Money
                    Laundering (AML) and terrorist financing specialty in financing. I have enjoyed my job as an AML Analyst
                    and that it is something so impactful to not only our own country but also to the global safety in the
                    financial industry. I am looking for a job that provides just as meaningful of an outcome but is also
                    more challenging and allows me to help solve problems daily. I believe that I will be most able to
                    accheive this within the technology industry, especially through the use of coding.</p>
            </Box>
            <Box id="projects">
                {/* projects section */}
            </Box>
            <Box id="travels">
                {/* travels section */}
            </Box>
            <Box id="contact">
                {/* contact section */}
            </Box>
        </Box>
    );
}

export default Homepage;