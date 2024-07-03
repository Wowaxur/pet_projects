import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProfileCard from "./pages/profileCard/ProfileCard";
import Navbar from "./pages/navbar/Navbar";
import MainPage from "./pages/mainPage/mainPage";
import CitySkyline from "./pages/cityCss/cityCss";
import Junior from "./pages/Junior/Junior";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className={"content"}>
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="profileCard" element={<ProfileCard/>}></Route>
            <Route path="CitySkyline" element={<CitySkyline/>}></Route>
            <Route path="junior/*" element={<Junior/>} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
