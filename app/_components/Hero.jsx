import React from 'react'

function Hero() {
    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl py-2 font-extrabold text-transparent sm:text-5xl"
                    >
                        Discover Unique Projects
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                        Explore a wide range of innovative projects and digital content. Download and enhance your creativity today!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded border border-button1 bg-button1 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="#pythonProject"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded border border-button1 px-12 py-3 text-sm font-medium text-white hover:bg-button1 focus:outline-none focus:ring active:bg-button1 sm:w-auto"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
