import React from 'react';
import {Link} from "react-router-dom";
import s from './mainPage.module.css'
const MainPage = () => {
    return (
        <div className={s.mainPage}>
            <ul>
                <li>
                    <Link to="/profileCard">profileCard</Link>
                </li>
                <li>
                    <Link to="/CitySkyline">CitySkyline</Link>
                </li>
                <li>
                    <Link to="/JuniorCode">JuniorCode</Link>
                </li>
            </ul>
        </div>
    );
};

export default MainPage;