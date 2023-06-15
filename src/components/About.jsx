import React, {useRef} from 'react';
import ReactPlayer from "react-player";

const About = () => {
    const playerRef = useRef(null);
    const VIDEO_PATH = 'https://www.youtube.com/watch?v=Onl79y_uR-4';

    return (
        <section className="relative py-20">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: 80 }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x={0}
                    y={0}
                >
                    <polygon
                        className="text-white fill-current"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                        <ReactPlayer
                            className="max-w-full"
                            ref={playerRef}
                            url={VIDEO_PATH}
                            controls={true}
                        />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div className="md:pr-12">
                            <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                <i className="fas fa-rocket text-xl" />
                            </div>
                            <h3 className="text-3xl font-semibold">ABOUT US</h3>
                            <p className="mt-4 text-lg leading-relaxed text-slate-500">
                                EIS Solutions is a renowned Australian company that specializes in delivering high-quality services to meet both physical and digital needs.
                                We understand the unique challenges faced by businesses and offer comprehensive solutions in two key areas: Physical Services and Digital
                                Services. Our expert teams in each division are dedicated to providing exceptional service and helping businesses thrive in their
                                respective domains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default About;