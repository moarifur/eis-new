import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {

    const heroSubtext = `
    h-[200px] w-[400px]
    font-bold text-white
    lg:text-[45px] sm:text-[45px] xs:text-[35px] text-[30px] lg:leading-[55px]
    `

    return (
        <div className="bg-gray-800 py-10 px-6 h-screen">
            <div className="max-w-6xl mx-auto mt-20">
                <div className="flex items-center justify-between mb-[10rem]">
                    <div className="max-w-md relative">
                        <h1 className="text-8xl text-white font-bold">EIS, an One Stop Solution For Your Business</h1>
                    </div>
                    <div className="flex flex-row-reverse">
                        <div className={`${heroSubtext}`}>
                            <div className="mb-10 border-4 p-3 text-center">
                                WE OFFER
                            </div>

                            <Typewriter
                                options={{
                                    strings: [
                                        'Branding Your Company',
                                        'Videography & Animation',
                                        'Internet Marketing',
                                        'Web Development',
                                        'Virtual Assistant Service',
                                        'Facility Management',
                                        'Security Services',
                                        'Cleaning Services',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100,
                                    pauseFor:2000
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;


// import React from 'react';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
//
// const Hero = () => {
//     return (
//         <ParallaxProvider>
//             <div className="h-screen">
//                 <Parallax y={[-30, 30]} tagOuter="figure" speed={0}>
//                     <div className="h-screen bg-gray-900 flex items-center justify-center parallax-image1">
//                         <h1 className="text-4xl text-white font-bold">Section 1</h1>
//                     </div>
//                 </Parallax>
//             </div>
//             <div className="h-screen">
//                 <Parallax y={[-30, 30]} tagOuter="figure" speed={-10}>
//                     <div className="h-screen bg-blue-900 flex items-center justify-center parallax-image2">
//                         <h1 className="text-4xl text-white font-bold">Section 2</h1>
//                     </div>
//                 </Parallax>
//             </div>
//             <div className="h-screen">
//                 <Parallax y={[-30, 30]} tagOuter="figure" speed={-10}>
//                     <div className="h-screen bg-green-900 flex items-center justify-center parallax-image3">
//                         <h1 className="text-4xl text-white font-bold">Section 3</h1>
//                     </div>
//                 </Parallax>
//             </div>
//         </ParallaxProvider>
//     );
// };
//
// export default Hero;

// import React from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
// import TextBlock from "../components/TextBlock.jsx";
//
// const Hero = () => {
//     return (
//         <div className="App">
//             <Parallax pages={4} style={{top: '0', left: '0'}} className="animation">
//                 <ParallaxLayer offset={0} speed={0.8}>
//                     <div className="animation_layer parallax" id="hero">
//
//                     </div>
//                 </ParallaxLayer>
//                 <ParallaxLayer offset={1} speed={0.3}>
//                     <div className="animation_layer parallax" id="mountain"></div>
//                 </ParallaxLayer>
//                 <ParallaxLayer offset={2} speed={-0.1}>
//                     <div className="animation_layer parallax" id="logoland"></div>
//                 </ParallaxLayer>
//
//                 <ParallaxLayer offset={3} speed={0.25}>
//                     <TextBlock/>
//                 </ParallaxLayer>
//             </Parallax>
//         </div>
//     );
// };
//
// export default Hero;

// import React, {useRef} from 'react';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax'
//
// // Little helpers ...
// const url = (name, wrap) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
//
// const Hero = () => {
//     const parallax = useRef()
//     return (
//         <div style={{ width: '100%', height: '100%', background: '#253237' }}>
//             <Parallax ref={parallax} pages={3}>
//                 <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
//                 <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
//
//                 <ParallaxLayer
//                     offset={0}
//                     speed={0}
//                     factor={3}
//                     style={{
//                         backgroundImage: url('stars', true),
//                         backgroundSize: 'cover',
//                     }}
//                 />
//
//                 <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
//                     <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
//                     <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
//                     <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
//                     <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
//                     <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
//                     <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
//                     <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
//                     <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
//                     <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
//                     <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
//                     <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
//                     <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer
//                     offset={2.5}
//                     speed={-0.4}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         pointerEvents: 'none',
//                     }}>
//                     <img src={url('earth')} style={{ width: '60%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer
//                     offset={2}
//                     speed={-0.3}
//                     style={{
//                         backgroundSize: '80%',
//                         backgroundPosition: 'center',
//                         backgroundImage: url('clients', true),
//                     }}
//                 />
//
//                 <ParallaxLayer
//                     offset={0}
//                     speed={0.1}
//                     onClick={() => parallax.current.scrollTo(1)}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}>
//                     <img src={url('server')} style={{ width: '20%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer
//                     offset={1}
//                     speed={0.1}
//                     onClick={() => parallax.current.scrollTo(2)}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}>
//                     <img src={url('bash')} style={{ width: '40%' }} />
//                 </ParallaxLayer>
//
//                 <ParallaxLayer
//                     offset={2}
//                     speed={-0}
//                     style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                     }}
//                     onClick={() => parallax.current.scrollTo(0)}>
//                     <img src={url('clients-main')} style={{ width: '40%' }} />
//                 </ParallaxLayer>
//             </Parallax>
//         </div>
//     );
// };
//
// export default Hero;

// import React from 'react';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
//
// const Hero = () => {
//     return (
//         <ParallaxProvider>
//             <div className="h-screen">
//                 <Parallax y={[-30, 30]} tagOuter="figure" speed={0}>
//                     <div className="h-screen bg-gray-900 flex items-center justify-center parallax-image1">
//                         <h1 className="text-4xl text-white font-bold">Section 1</h1>
//                     </div>
//                 </Parallax>
//             </div>
//             <div className="h-screen">
//                 <Parallax y={[-30, 30]} tagOuter="figure" speed={-10}>
//                     <div className="h-screen bg-blue-900 flex items-center justify-center parallax-image2">
//                         <h1 className="text-4xl text-white font-bold">Section 2</h1>
//                     </div>
//                 </Parallax>
//             </div>
//             <div className="h-screen">
//                 <Parallax y={[-30, 30]} tagOuter="figure" speed={0}>
//                     <div className="h-screen bg-green-900 flex items-center justify-center parallax-image3">
//                         <h1 className="text-4xl text-white font-bold">Section 3</h1>
//                     </div>
//                 </Parallax>
//             </div>
//         </ParallaxProvider>
//     );
// };
//
// export default Hero;
//


