import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
                <div>
                    <div className="text-white opacity-50 text-4xl font-display">ESSENTIAL INTELLIGENCE SERVICE</div>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
                        Physical Services
                    </div>
                    <a href="#" className="block mb-4">
                        Call Center
                    </a>{" "}
                    <a href="#" className="block mb-4">
                        Security Service
                    </a>{" "}
                    <a href="#" className="block mb-4">
                        Facility Management
                    </a>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
                        Digital Services
                    </div>
                    <a href="#" className="block mb-4">
                        Branding
                    </a>{" "}
                    <a href="#" className="block mb-4">
                        Content & Media
                    </a>{" "}
                    <a href="#" className="block mb-4">
                        Web & App Development
                    </a>
                    <a href="#" className="block mb-4">
                        Digital Marketing
                    </a>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
                        Helpful Links
                    </div>
                    <a href="#" className="block mb-4">
                        About Us
                    </a>{" "}
                    <a href="#" className="block mb-4">
                        Contact Us
                    </a>{" "}
                    <a href="#" className="block mb-4">
                        Privacy Policy
                    </a>
                    <a href="#" className="block mb-4">
                        Terms of Service
                    </a>
                    <a href="#" className="block mb-4">
                        FAQ
                    </a>

                </div>
            </div>
            <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-20">
                Copyright © 2023 || All Right Reserved by EIS Development Team
            </div>
        </div>

    );
};

export default Footer;