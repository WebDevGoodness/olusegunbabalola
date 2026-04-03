import React from 'react';
import olusegunImage from '../img/Reverend Olusegun Babalola.jpg';


export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-6xl mb-6 text-gray-900 font-bold">About Rev Olusegun</h2>
                        <p className="text-gray-700 mb-4 text-xl">
                            For over 20 years, I've had the privilege of serving God's people and sharing His Word. My calling is to guide believers in their spiritual journey, provide biblical teaching, and create a community where faith can flourish.
                        </p>
                        <p className="text-gray-700 mb-4 text-xl">
                            I hold a Master of Divinity from Seminary College and have served in various ministry roles including youth pastor, associate pastor, and currently as senior pastor at Grace Community Church.
                        </p>
                        <p className="text-gray-700 text-xl">
                            My passion is to make God's Word accessible and relevant to everyday life, helping people discover their purpose and grow in their relationship with Christ.
                        </p>
                    </div>
                    <div className="relative h-96 md:h-full min-h-[400px]">
                        <img
                            src={olusegunImage}
                            alt="Olusegun Babalola"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
