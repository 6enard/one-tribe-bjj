// src/pages/Home.jsx
import React, { useRef } from "react";
import Hero from "../components/Hero/Hero";
import Programs from "../components/Programs/Programs";
import Instructors from "../components/Instructors/Instructors";

const Home = () => {
  const programsRef = useRef(null);

  const scrollToPrograms = () => {
    programsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Hero scrollToPrograms={scrollToPrograms} />
      
      <Instructors />
      <div ref={programsRef}>
        <Programs title="Our Programs" />
      </div>
    </div>
  );
};

export default Home;
