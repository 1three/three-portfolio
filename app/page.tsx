import React from "react";
import Intro from "../components/home/Intro";
import About from "../components/home/About";
import Title from "@/components/home/Title";
import Introduce from "@/components/home/Introduce";

export default function Home() {
  return (
    <main>
      <Intro />
      <div id="about-section">
        <About />
      </div>
      <Title />
      <Introduce />
    </main>
  );
}
