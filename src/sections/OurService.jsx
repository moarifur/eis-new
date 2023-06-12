import React from 'react';
import Typewriter from "typewriter-effect";
import Identity from "../assets/dgicon1.png"
import Element from "../assets/dgicon2.png"
import Web from "../assets/dgicon3.png"
import Hype from "../assets/dgicon4.png"
import CallCenter from "../assets/call-center.jpg"
import CallCenter2 from "../assets/call-center-2.jpg"
import Security1 from "../assets/security-1.jpg"
import Security2 from "../assets/security-2.jpg"
import FacilityManager from "../assets/hr.jpg"

const OurService = () => {
    return (
        <div className='bg-[#c9efe2]'>
            <div className="container mx-auto overflow-hidden pb-20">
                <div className="flex flex-wrap items-center pt-32">
                    <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                        <div className="justify-center flex flex-wrap relative">
                            <div className="my-4 w-full lg:w-6/12 px-4">
                                <div className="bg-sky-500 shadow-lg rounded-lg text-center p-8">
                                    <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src={Identity}
                                    />
                                    <p className="text-lg text-white mt-4 font-semibold">EIS Identity</p>
                                    <p className="text-base text-white opacity-75 mt-2">
                                        EIS Identity service offers to build trust through your brand identity.
                                    </p>
                                </div>
                                <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                    <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src={Element}
                                    />
                                    <p className="text-lg text-white mt-4 font-semibold">EIS Elements</p>
                                    <p className="text-base text-white opacity-75 mt-2">
                                        This service includes digital media such as 3D Animation, Promotional Videos, Photography, Copywriting, and Custom Graphics.
                                    </p>
                                </div>
                            </div>
                            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8">
                                    <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src={Web}
                                    />
                                    <p className="text-lg text-white mt-4 font-semibold">
                                        EIS Web
                                    </p>
                                    <p className="text-base text-white opacity-75 mt-2">
                                        An effective customized website spreads brand awareness, enhances your credibility, and generates new leads.
                                    </p>
                                </div>
                                <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
                                    <img
                                        alt="..."
                                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                        src={Hype}
                                    />
                                    <p className="text-lg text-white mt-4 font-semibold">EIS Hype</p>
                                    <p className="text-base text-white opacity-75 mt-2">
                                        EIS Hype is our host of internet marketing services that help you
                                        to promote your business online through tailored marketing campaigns.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-0">
                        <h3 className="text-8xl mb-2 font-bold leading-normal text-stone-700">
                            DIGITAL SERVICES
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                            We customize a company’s online experience through digital masterpieces, powerful
                            online platforms, and storytelling through marketing campaigns across major media channels.
                        </p>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                            A Holistic Approach For Your Business Online.
                        </p>
                        <div className='mt-10'>
                            <button
                                className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-lg rounded-full font-bold text-white">
                                SCHEDULE A CONSULTATION
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                        <h3 className="text-8xl mb-2 font-bold leading-normal text-stone-700">
                            PHYSICAL SERVICES
                        </h3>
                        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                            In today's fast-paced business world requires the assistance of reliable physical services that encompass facility management,
                            call center support, and robust security measures.
                        </p>
                        <div className='mt-10'>
                            <button
                                className="bg-sky-500 hover:bg-sky-700 px-5 py-2 text-lg rounded-full font-bold text-white">
                                SCHEDULE A CONSULTATION
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                        <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                            <img
                                alt="..."
                                src={CallCenter}
                                className="w-full align-middle rounded-lg absolute shadow-lg"
                                style={{ maxWidth: 300, left: -50, top: "-300px", zIndex: 2 }}
                            />
                            <img
                                alt="..."
                                src={CallCenter2}
                                className="w-full align-middle rounded-lg absolute shadow-lg"
                                style={{ maxWidth: 350, left: 260, top: "-400px" }}
                            />
                            <img
                                alt="..."
                                src={Security1}
                                className="w-full align-middle rounded absolute shadow-lg"
                                style={{ maxWidth: 300, left: -50, top: "-70px", zIndex: 3 }}
                            />

                            {/*<img*/}
                            {/*    alt="..."*/}
                            {/*    src={Security}*/}
                            {/*    className="w-full align-middle rounded-lg absolute shadow-2xl"*/}
                            {/*    style={{ maxWidth: 200, left: "-50px", top: 25 }}*/}
                            {/*/>*/}

                            <img
                                alt="..."
                                src={FacilityManager}
                                className="w-full align-middle rounded absolute shadow-xl"
                                style={{ maxWidth: 450, left: 280, top: "-190px" }}
                            />
                            <img
                                alt="..."
                                src={Security2}
                                className="w-full align-middle rounded absolute shadow-lg"
                                style={{ maxWidth: 580, left: "-20px", top: 150 }}
                            />
                        </div>
                    </div>
                </div>

            </div>
            <div className="justify-center text-center flex flex-wrap mt-24">
                {/*<div className="w-full md:w-6/12 px-12 md:px-4">*/}
                {/*    <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>*/}
                {/*    <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">*/}
                {/*        Tailwind Starter Kit is a completly new product built using our past*/}
                {/*        experience in web templates. Take the examples we made for you and start*/}
                {/*        playing with them.*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};





export default OurService;