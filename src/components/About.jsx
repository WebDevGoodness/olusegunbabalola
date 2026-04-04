import React from 'react';
import olusegunImage from '../img/Reverend Olusegun Babalola.jpg';


export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-6xl mb-6 font-bold" style={{ color: '#0A2540' }}>About Rev Olusegun</h2>
                        <p className="text-gray-700 mb-4 text-xl tracking-tighter">
                            Rev. Olusegun Babalola has been serving as the Senior Pastor of The Glad Tidings Baptist Church since 1997. With a deep passion for God's Word and a heart for pastoral care, he has led the congregation through seasons of tremendous growth and spiritual transformation.
                        </p>
                        <p className="text-gray-700 mb-4 text-xl tracking-tighter">
                            He holds a Doctor of Divinity degree from the Nigerian Baptist Theological Seminary and has ministered in various capacities across Nigeria and internationally. His teaching ministry focuses on practical Christianity, family values, and developing strong biblical foundations.
                        </p>
                        <p className="text-gray-700 text-xl tracking-tighter">
                            Under his leadership, the church has expanded its outreach programs, established several new ministries, and strengthened commitment to community service. Pastor Olusegun is married to Mrs. Babalola, and they are blessed with Four children.
                        </p>
                    </div>
                    <div className="relative h-80 sm:h-96 md:h-[500px] lg:h-full min-h-[350px]">
                        <img
                            src={olusegunImage}
                            alt="Olusegun Babalola"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
