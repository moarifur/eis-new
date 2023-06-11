import React from 'react';

const OurService = () => {
    return (
        <div className="bg-zinc-200">
            <div className="container mx-auto py-16">
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Card 1</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            vulputate urna quis commodo vestibulum.</p>
                        <a href="#" className="text-blue-500 mt-4">Read More</a>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Card 2</h2>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            vulputate urna quis commodo vestibulum.</p>
                        <a href="#" className="text-blue-500 mt-4">Read More</a>
                    </div>
                </div>
            </div>
        </div>

    );
};





export default OurService;