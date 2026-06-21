import "./ProjectLibrary.css";

import MaoriFlag from "../../assets/NavBar/MaoriFlag.png";
import NZFlag from "../../assets/NavBar/NZFlag.png";
import LevelUpWorksWhite from "../../assets/NavBar/LevelUpWorks-white.png";
import ProfilePic from "../../assets/profile.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="levelupWorks">
                <img src={LevelUpWorksWhite} alt="LevelUp Works Logo" />
            </div>

            <ul className="nav-links">
                <li><a href="/">HOME</a></li>
                <li><a href="/project-library">PROJECTS</a></li>
                <li><a href="#">TEACHERS</a></li>
            </ul>
        <div className="rightSide">
    <div className="flags">
        <span>LANG</span>
        <img src={NZFlag} alt="NZ" />
        <img src={MaoriFlag} alt="Maori" />
    </div>

    <div className="profile">
       <a href="/teacher-profiles"><img src={ProfilePic} alt="Profile" /></a>
        <span>RAWIRI FLETCHER</span>
    </div>
</div>
        </nav>
    );
}

export default Navbar;
