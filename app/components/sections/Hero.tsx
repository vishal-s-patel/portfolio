import Link from "next/link";
import * as React from "react";

const Hero = () => {
  const one = (
    <h1 className="mt-0 mr-0 mb-7 ml-1 text-green font-bodyFont font-normal intro-title">
      Hi, my name is
    </h1>
  );
  const two = <h2 className="big-heading font-titleFont m-0">Vishal Patel.</h2>;
  const three = (
    <h3 className="big-heading text-slate-400 mt-1 leading-[0.9] font-titleFont">
      I build things for the web.
    </h3>
  );
  const four = (
    <>
      <p className="content-p">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <Link
          href="https://upstatement.com/"
          target="_blank"
          rel="noreferrer"
          className="text-green inline-block relative transition-all"
        >
          Upstatement
        </Link>
        .
      </p>
    </>
  );
  const five = (
    <Link
      href="#"
      className="text-green bg-transparent border border-solid border-green rounded py-5 px-7 text-sm mt-12 transition-all hover:shadow-[3px_3px_0_0_#64ffda] hover:-translate-y-1 hover:-translate-x-1"
    >
      Check out my Github!
    </Link>
  );

  const items = [one, two, three, four, five];
  return (
    <section className="flex justify-center flex-col items-start p-0 h-screen">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;
