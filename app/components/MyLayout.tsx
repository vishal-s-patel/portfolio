import * as React from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";

const Layout = () => {
  return (
    <main className="px-36 py-0">
      <Hero />
      <About />
    </main>
  );
};

export default Layout;
