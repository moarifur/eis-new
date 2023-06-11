import React from 'react';
import Hero from "./sections/Hero.jsx";
import PhysicalServices from "./sections/PhysicalServices.jsx";
import DigitalServices from "./sections/DigitalServices.jsx";
import Navbar from "./components/Navbar.jsx";
import {BrowserRouter} from "react-router-dom";
import OurService from "./sections/OurService.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <OurService />
            <PhysicalServices />
            <DigitalServices />
        </BrowserRouter>
    );
};

export default App;