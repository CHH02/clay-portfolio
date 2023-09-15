import React, { useState } from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="name-and-major">
                <p id="name">Clayton Hopkins</p>
                <p id="major">Cyber Engineer</p>
            </div>
            <div className="leftSide" id={openLinks?"open":"close"}>
                <div className="hiddenLinks">
                    <Link to='/clay-portfolio'>ABOUT</Link>
                    <Link to='/clay-portfolio/projects'>PROJECTS</Link>
                    <Link to='/clay-portfolio/resume'>RESUME</Link>
                    <Link to='/clay-portfolio/hobbies'>HOBBIES</Link>
                </div>                               
            </div>
            <div className="rightSide">
                <Link to='/clay-portfolio'>ABOUT</Link>
                <Link to='/clay-portfolio/projects'>PROJECTS</Link>
                <Link to='/clay-portfolio/resume'>RESUME</Link>
                <Link to='/clay-portfolio/hobbies'>HOBBIES</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;