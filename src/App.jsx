import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import OurService from "./sections/OurService.jsx";
import Footer from "./sections/Footer.jsx";
import PhysicalServices from "./sections/PhysicalServices.jsx";
import DigitalServices from "./sections/DigitalServices.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <OurService />
            <Footer />
            {/*<PhysicalServices />*/}
            {/*<DigitalServices />*/}
        </BrowserRouter>
    );
};

export default App;