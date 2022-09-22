import React from "react";

function Projects(props) {
    return (
        <div id="projects">
            {/* projects section */}
            <h2>Projects</h2>
            {/* map through projects array */}
            {
                props.data.map((item, idx) => {
                    if (item !== null) {
                        return (
                            <div key={idx}>
                                <div className="project">
                                    <h3>{item.title}</h3>
                                    <a href={item.appLink}>
                                        <img
                                            title={item.title}
                                            className="projects"
                                            src={item.image}
                                            alt={item.alt}>
                                        </img>
                                    </a>
                                    <p>{item.description}</p>
                                    <a href={item.gitHubLink}>
                                        Click Here to View the {item.title} GitHub Repo!
                                    </a>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div>
                                <p>failure</p>
                            </div>
                        );
                    }
                }
                )}
        </div>
    );
}

export default Projects;