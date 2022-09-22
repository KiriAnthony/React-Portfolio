import React from "react";
import selfImg from "../../images/self-image-small.jpg";

function Homepage() {
    return (
        <div>
            <div id="about">
                <h2>About Me</h2>
                <img title="Image of Kiri" class="self-img" src={selfImg} alt="Kiri's face" />
                <p>Hello! My name is Kiriko Anthony and I go by Kiri for short. I have a background in an Anti Money
                    Laundering (AML) and terrorist financing specialty in financing. I have enjoyed my job as an AML Analyst
                    as it is so impactful to not only our own country but also to the global safety in the
                    financial industry. I am looking for a job that provides just as meaningful of an outcome but is also
                    more challenging and allows me to help solve problems daily. I believe that I will be most able to
                    accheive this within the technology industry, especially through the use of coding.</p>
                <h3>Technical Skills</h3>
                <p>Javascript, HTML, CSS, React, Express, MongoDB, Node.js, Handlebars.js, SQL, NoSQL, GraphQL and more</p>
            </div>
        </div>
    );
}

export default Homepage;