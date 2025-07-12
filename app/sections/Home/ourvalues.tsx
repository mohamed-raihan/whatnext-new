import Image from "next/image";

export default function OurValues() {
    return (
        <section className="bg-[#1A4FA3] min-h-[406px] text-white py-20 px-6 md:px-12 -mt-[100px]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Left Text Section */}
                <div>
                    <p className="text-md text-white opacity-60 font-semibold  mb-2 font-roboto">Want to study abroad?</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">Get ahead with WhatNext</h2>
                    <p className="text-white text-base leading-relaxed font-montserrat ">
                    Welcome to WhatNext! If you dream of studying abroad, we&apos;re here to help you find the right course, the right university, and the right funding option. Try our handy search tool and find out everything you need to know if you want to study abroad.
                    </p>
                </div>

                {/* Right Core Values Section */}
                <div>
                    <h3 className="text-center text-lg font-bold mb-6 uppercase font-roboto">Our Core Values</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {[
                            {
                                title: "Striving Towards Excellence",
                                icon: "/valueicon1.png",
                            },
                            {
                                title: "Driving Towards Innovation",
                                icon: "/valueicon2.png",
                            },
                            {
                                title: "Transparency",
                                icon: "/valueicon3.png",
                            },
                            {
                                title: "Customize Your Passion",
                                icon: "/valueicon4.png",
                            },
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 flex items-center space-x-4 shadow-md"
                            >
                                <Image src={value.icon} alt={value.title} width={40} height={40} />
                                <p className="text-gray-900 font-semibold text-md">{value.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}