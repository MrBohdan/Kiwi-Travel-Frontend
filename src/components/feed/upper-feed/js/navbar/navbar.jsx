import React from 'react';

const navbar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar-list">
                <li>
                    <a href="/">Intro</a>
                </li>
                <li>
                    <a href="/">Work</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

const smallNavbar = () => {
    return (
        <nav className="nav-bar">
            <ul className="nav-bar-list">
                <li>
                    <a href="/">Intro</a>
                </li>
                <li>
                    <a href="/">Work</a>
                </li>
            </ul>
            <ul className="nav-bar-list">
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default function Navbar({ screenResolution }) {
    if (screenResolution) {
        return smallNavbar();
    } else {
        return navbar();
    }
}
