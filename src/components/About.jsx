import React from 'react';

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl mb-6 text-gray-900">About Rev Olusegun</h2>
                        <p className="text-gray-700 mb-4">
                            For over 20 years, I've had the privilege of serving God's people and sharing His Word. My calling is to guide believers in their spiritual journey, provide biblical teaching, and create a community where faith can flourish.
                        </p>
                        <p className="text-gray-700 mb-4">
                            I hold a Master of Divinity from Seminary College and have served in various ministry roles including youth pastor, associate pastor, and currently as senior pastor at Grace Community Church.
                        </p>
                        <p className="text-gray-700">
                            My passion is to make God's Word accessible and relevant to everyday life, helping people discover their purpose and grow in their relationship with Christ.
                        </p>
                    </div>
                    <div className="relative h-96 md:h-full min-h-[400px]">
                        <img
                            src="https://images.unsplash.com/photo-1709390594155-9b1db07d2883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYmlibGUlMjBzdHVkeXxlbnwxfHx8fDE3NjcxMzM1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Bible study"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
