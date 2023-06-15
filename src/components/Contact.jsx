import React from 'react';
import ContactImage from '../assets/contact.svg'

const Contact = () => {
    return (
        <section id="contact" className="contact_area relative pt-18 pb-120">
            <div className="contact_image flex items-center justify-end">
                <div className="image lg:pr-13">
                    <img src={ContactImage} alt="about" />
                </div>
            </div>{" "}
            {/* about image */}
            <div className="container">
                <div className="row justify-end">
                    <div className="w-full lg:w-1/2">
                        <div className="contact_wrapper mt-11">
                            <div className="section_title pb-4">
                                <h5 className="sub_title">Contact</h5>
                                <h4 className="main_title">Get In Touch</h4>
                                <p>
                                    Lorem ipsum dolor sitrg amet, consetetur sadipscing elitr sed diam
                                    nonumy eirmod tempor invidunt ut labore et dolore magna.
                                </p>
                            </div>{" "}
                            {/* section title */}
                            <div className="contact_form">
                                <form
                                    id="contact-form"
                                    action="assets/php/contact.php"
                                    method="POST"
                                >
                                    <div className="row">
                                        <div className="w-full md:w-1/2">
                                            <div className="mx-3">
                                                <div className="single_form mt-8">
                                                    <input
                                                        name="name"
                                                        id="name"
                                                        type="text"
                                                        placeholder="Name"
                                                        className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                                                    />
                                                </div>{" "}
                                                {/* single form */}
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2">
                                            <div className="mx-3">
                                                <div className="single_form mt-8">
                                                    <input
                                                        name="email"
                                                        id="email"
                                                        type="email"
                                                        placeholder="Email"
                                                        className="w-full rounded-md py-4 px-6 border border-solid border-body-color"
                                                    />
                                                </div>{" "}
                                                {/* single form */}
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <div className="mx-3">
                                                <div className="single_form mt-8">
                      <textarea
                          name="message"
                          id="message"
                          placeholder="Message"
                          rows={5}
                          className="w-full rounded-md py-4 px-6 border border-solid border-body-color resize-none"
                          defaultValue={""}
                      />
                                                </div>{" "}
                                                {/* single form */}
                                            </div>
                                        </div>
                                        <p className="form-message mx-3" />
                                        <div className="w-full">
                                            <div className="mx-3">
                                                <div className="single_form mt-8">
                                                    <button type="submit" className="main-btn contact-btn">
                                                        Submit
                                                    </button>
                                                </div>{" "}
                                                {/* single form */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                    {/* row */}
                                </form>
                            </div>{" "}
                            {/* contact form */}
                        </div>{" "}
                        {/* contact wrapper */}
                    </div>
                </div>{" "}
                {/* row */}
            </div>{" "}
            {/* container */}
        </section>

    );
};

export default Contact;