import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter, } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
                        Contact Info
                    </div>
                    <a href="#" className="block flex items-center opacity-75 hover:opacity-100">
                        <div className=' text-3xl mr-3'>
                            <FontAwesomeIcon icon={faLocationDot} />
                        </div>
                        <p className='text-sm'>
                            Suite 523,
                            <br/>
                            368 Sussex Street Sydney,
                            <br/>
                            New South Wales 2000
                        </p>
                    </a>
                    <a href="#" className="block flex items-center opacity-75 hover:opacity-100 mt-5">
                        <div className=' text-2xl mr-3'>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <p className='text-sm'>
                            1300 702 044
                        </p>
                    </a>
                    <a href="#" className="block flex items-center opacity-75 hover:opacity-100 mt-5">
                        <div className=' text-2xl mr-3'>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <p className='text-lg lowercase'>
                            accounts@eiservices.info
                        </p>
                    </a>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
                        Contact With Us
                    </div>
                    <a href="https://www.facebook.com/eiservicesltd" className="block mb-4">
                        <FontAwesomeIcon icon={faFacebookF} />  Facebook
                    </a>
                    <a href="#" className="block mb-4">
                        <FontAwesomeIcon icon={faTwitter} />  Twitter
                    </a>
                    <a href="#" className="block mb-4">
                        <FontAwesomeIcon icon={faInstagram} />  Instagram
                    </a>
                    {/*<a href="#" className="block mb-4">*/}
                    {/*    <FontAwesomeIcon icon={faLinkedInIn} />  Linkedin*/}
                    {/*</a>*/}

                    {/*<a href="#" target="_blank" className="bg-white text-sky-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center">*/}
                    {/*    <FontAwesomeIcon icon={faLinkedInIn} />*/}
                    {/*</a>*/}
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">
                        Our Services
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
            <hr/>
            <div className="text-sm lg:text-base text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-20 mt-10">
                ESSENTIAL INTELLIGENCE SERVICES ALL RIGHTS RESERVED © 2023
            </div>
        </div>
    );
};

export default Footer;
