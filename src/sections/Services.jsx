import React from 'react';
import {CCarousel, CCarouselCaption, CCarouselItem, CImage} from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Brand from '../assets/brand.jpg'
import Animation from '../assets/animation.jpg'
import VirtualAssistant from '../assets/va.jpg'


const Services = () => {
    return (
        <CCarousel controls indicators transition="crossfade" interval>
            {/*Brand Identity*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Brand} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400'>BRAND IDENTITY</h1>
                    <p className='text-lg text-white m-2'>
                        EIS offers branding services to empower your company's identity and drive success.
                        We specialize in brand strategy, visual identity, messaging, and online branding.
                        Our goal is to establish a strong brand presence that connects with your target audience,
                        builds trust, and fuels business growth. Partner with us to unlock your brand's full
                        potential in the competitive marketplace.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Animation & Videography*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Animation} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400'>ANIMATION & VIDEOGRAPHY</h1>
                    <p className='text-lg text-white m-2'>
                        EIS provides videography and animation services that combine creativity,
                        technical expertise, and storytelling. From corporate videos to animated ads
                        and visual effects, we bring your vision to life. Partner with us to create
                        captivating and impactful videos and animations that elevate your brand and
                        help you achieve your goals.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Digital Marketing*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Brand} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400'>DIGITAL MARKETING</h1>
                    <p className='text-lgl text-white m-2'>
                        We offer digital marketing services to drive online success, boost visibility, and
                        deliver meaningful results. Partner with us to leverage digital channels, strategic
                        marketing techniques, and data-driven insights for accelerated growth and achieving
                        business objectives.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Web Development*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Brand} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400 uppercase'>Web Development</h1>
                    <p className='text-lg text-white m-2'>
                        EIS is passionate about creating exceptional web experiences that represent your brand
                        and engage your audience. Our web development services combine technical expertise,
                        creative design, and user-centric experiences for impactful websites. Partner with us
                        to unlock your online potential, enhance brand identity, and drive business growth.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Virtual Assistant Service*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={VirtualAssistant} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400 text-uppercase'>Virtual Assistant Service</h1>
                    <p className='text-lg text-white m-2'>
                        Virtual Assistant Service provide a professional and efficient support
                        for your businesses where our skilled virtual assistants handle administrative tasks,
                        customer support, data management, social media, content creation, and project coordination.
                        By partnering with us, you can optimize your time and resources, focus on core activities,
                        and achieve strategic objectives. Experience the benefits of a dedicated virtual assistant
                        tailored to your business needs.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Facility Management Services*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Brand} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400 text-uppercase'>Facility Management Services</h1>
                    <p className='text-lgl text-white m-2'>
                        EIS offers comprehensive Facility Management services to streamline operations and
                        create a productive environment. From maintenance and repairs to space planning and
                        vendor management, we handle the complexities, allowing you to focus on your core
                        business. Partner with us for efficient facility operations and improved productivity.
                        Experience the benefits of professional Facility Management with EIS.
                        Contact us today to discuss your needs and explore how we can support your success.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Security Services*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Brand} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400 text-uppercase'>Security Services</h1>
                    <p className='text-lgl text-white m-2'>
                        EIS offers comprehensive Security Services tailored to your needs. We protect your assets,
                        mitigate risks, and ensure safety through risk assessment, access control, video surveillance,
                        personnel services, alarm systems, training, and compliance. Our proactive approach identifies
                        and addresses potential threats, giving you peace of mind. Partner with us to focus on core
                        activities and achieve your objectives. We go beyond traditional security measures,
                        prioritizing the protection of your assets, data, and people. Strengthen your security
                        infrastructure, minimize risks, and create a secure environment for success.
                        Trust us for reliable and comprehensive security services.

                    </p>
                </CCarouselCaption>
            </CCarouselItem>
            {/*Cleaning Services*/}
            <CCarouselItem>
                <CImage className="d-block w-100 h-screen" src={Brand} alt="slide 1" />
                <CCarouselCaption className="d-none d-md-block backdrop-brightness-50 justify-center mb-4">
                    <h1 className='text-4xl text-amber-400 text-uppercase'>Cleaning Services</h1>
                    <p className='text-lg text-white m-2'>
                        EIS Cleaning Services offers reliable and customized solutions for creating a clean
                        and inviting workspace. Our range of cleaning services, including office cleaning,
                        deep cleaning, and carpet care, is tailored to meet your specific needs.
                        Partner with us to elevate cleanliness standards, make a positive impression,
                        and ensure employee well-being. With our dedicated professionals, advanced equipment,
                        and eco-friendly practices, we maintain your premises to the highest standards.
                        Experience the difference in cleanliness and hygiene with EIS Cleaning Services.
                        Contact us today to discuss your needs and schedule a consultation.
                    </p>
                </CCarouselCaption>
            </CCarouselItem>
        </CCarousel>
    );
};

export default Services;
