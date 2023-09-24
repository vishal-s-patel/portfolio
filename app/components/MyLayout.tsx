import * as React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Jobs from "./sections/Jobs";
import Contact from "./sections/Contact";

const Layout = () => {
  return (
    <main className="px-[25px] md:px-[150px] py-0">
      <Hero />
      <About />
      <Jobs />
      <Contact />
    </main>
  );
};

export default Layout;
