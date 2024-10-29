// src/components/Hero.jsx
import React from "react";
import heroImage from "./hero.jpeg"; // Ensure the image is imported correctly
import Typewriter from "typewriter-effect";

const Hero = ({ scrollToPrograms }) => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Vibrant Jiu-Jitsu training atmosphere at One Tribe BJJ Kenya"
        className="absolute inset-0 w-full h-full object-cover" // Full coverage
      />
      {/* Dark Overlay with Subtle Blur */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" aria-hidden="true"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white p-4 md:p-12 lg:p-16 mt-20"> {/* Added mt-20 for margin-top */}
        <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Join the One Tribe BJJ Family
        </h1>

        {/* Typewriter Animation */}
        <p className="text-lg md:text-xl mb-6 drop-shadow-lg">
          <Typewriter
            options={{
              strings: ["Where warriors train and community thrives."],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 75,
            }}
          />
        </p>

        {/* Highlight Information */}
        <p className="text-md md:text-lg mb-6 drop-shadow-lg max-w-2xl mx-auto">
          Located in the heart of Nairobi, our gym welcomes everyone from beginners to seasoned competitors. With a growing community, we offer an affordable path to mastering Brazilian Jiu-Jitsu.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-center">
          <a
            href="/signup"
            className="bg-red-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            aria-label="Join our Jiu-Jitsu community"
          >
            Join Now
          </a>
          <a
            href="/trial"
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-black transition duration-300 transform hover:scale-105"
            aria-label="Schedule a free trial class at our gym"
          >
            Schedule a Free Trial Class
          </a>
          <button
            onClick={scrollToPrograms}
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Explore Programs
          </button>
        </div>

        {/* Location Information */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Location:</h2>
          <address className="text-md">
            <p>The Clubhouse, Ramata Greens Apartments</p>
            <p>(Google One Tribe BJJ or Ramata Greens Apartments)</p>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Hero;
