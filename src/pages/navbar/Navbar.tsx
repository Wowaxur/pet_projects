import {Link} from "react-router-dom";
import React from "react";
import s from './navbar.module.css'
import '../../App.css'
const Navbar = () => {
    return (
        <nav className={s.navbar}>
            {/*<h1>Мое Портфолио</h1>*/}
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/profileCard">Profile Card</Link></li>
                <li><Link to="/CitySkyline">CitySkyline</Link></li>
                <li><Link to="/junior">Junior</Link></li>
            </ul>
        </nav>
    );
};


export default Navbar;