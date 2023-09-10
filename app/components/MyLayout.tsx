import * as React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Jobs from "./sections/Jobs";

const Layout = () => {
  return (
    <main className="px-36 py-0">
      <Hero />
      <About />
      <Jobs />
    </main>
  );
};

export default Layout;
