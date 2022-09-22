// import runBuddyImg from "../../images/run-buddy_Screenshot.png";
// import moveiesImg from "../../images/movies screenshot.png";
// import myPantryImg from "../../images/my-pantry screenshot.png";
// import wheytsUpImg from "../../images/Wheyts-Up screenshot.png";

const testData = [
    {
        appLink: "https://wheyts-up.herokuapp.com/",
        gitHubLink: "",
        title: "Wheyts Up",
        class: "projects",
        image: require('../images/projectScreenshots/WheytsUpScreenshot.png'),
        alt: "Wheyts Up Website Homepage",
        description: "Wheyts Up is designed to allow users to create workout routines and rate them for ease of use at the gym, build by Kiri, Becca, Bryan, and Jace"
    },
    {
        appLink: "https://whispering-tundra-55246.herokuapp.com/",
        title: "My Pantry",
        class: "projects",
        image: require('../images/projectScreenshots/myPantryScreenshot.png'),
        alt: "My Pantry Website Homepage",
        description: "My pantry is designed to allow users to access a list of foods they have on the go built by Kiri, Jonathan, Griffin, and Drew."
    },
    {
        appLink: "https://cwmasters.github.io/moveiesfinal/",
        title: "Moveies",
        class: "projects",
        image: require('../images/projectScreenshots/moviesScreenshot.png'),
        alt: "Movies Website Homepage",
        description: "Movies is a site to search movies by year built by Kiri, Becca, and Chris. This site utilied third party APIs, teamwork, and communication."
    },
    {
        appLink: "https://KiriAnthony.github.io/run-buddy",
        title: "Run Buddy",
        class: "first-project projects",
        image: require('../images/projectScreenshots/runBuddyScreenshot.png'),
        alt: "Run-Buddy Website Homepage",
        description: "Run-Buddy is the First Website Built by Kiri. This site specialized in CSS, HTML, and JavaScript."
    }
    /* <a href="https://wheyts-up.herokuapp.com/"><img
                title="Budget App"
                class="projects" src={wheytsUpImg}
                alt="Budget App Websit Homepage" /></a>
            <p>Budget App is an app designed to be a simple and easy to use budgeting app that does not need to connect to your bank account. Built using MongoDB, React.js, JSON web Tokens and more by Kiri and Keian.</p> */
];

export default testData;