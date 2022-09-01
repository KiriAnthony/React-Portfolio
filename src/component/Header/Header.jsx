import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="container py-1 flex-row " id="header">
            <h1 id="title" className="ml-4 mr-4">Kiri's Coding Projects</h1>
            <div id="nav" className=" flex-row  justify-center">
                <Link to="/" className="ml-4 mr-4"><h2>About</h2></Link>
                <Link to="/Projects" className="ml-4 mr-4"><h2>Projects</h2></Link>
                <Link to="/Contact" className="ml-4 mr-4"><h2>Contact</h2></Link>
            </div>
        </div>
    );
}

export default Header;