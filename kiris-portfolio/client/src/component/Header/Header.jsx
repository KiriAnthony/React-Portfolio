import "./Header.css";

function Header() {
    return (
        <div id="header">
            <h1 id="title flex-child">Kiri's Coding and Traveling Adventures</h1>
            <div id="nav flex-child">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#ravels">Travels</a>
                <a href="#contact">Contact Me</a>
            </div>
        </div>
    );
}

export default Header;