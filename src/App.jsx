import React from 'react';
import {BrowserRouter} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./sections/Services.jsx";
import Offers from "./sections/Offers.jsx";
import Footer from "./components/Footer.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Hero />
            <About />
            <Offers />
            <Services />
            <Footer />
        </BrowserRouter>
    );
};

export default App;