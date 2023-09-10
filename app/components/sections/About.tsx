import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Header from "./Header";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "MongoDB",
  ];

  const links = [
    {
      company: "a small company",
      url: "https://www.aspiresoftserv.com/",
    },
    {
      company: "a small agency",
      url: "https://webashlar.com/",
    },
    {
      company: "a huge corporation",
      url: "https://www.gslab.com/",
    },
    {
      company: "a freelancing agency",
      url: "https://www.crestinfosystems.com/",
    },
  ];
  return (
    <section>
      {/* <h2 className="numbered-heading">About Me</h2> */}
      <Header heading="About Me" counter="01" />
      <div className="grid grid-cols-[3fr_2fr] gap-12">
        <div>
          <div>
            <p>
              Hello! My name is Vishal and I enjoy creating things that live on
              the internet. My interest in web development started back in 2012
              when I decided to try editing custom Tumblr themes — turns out
              hacking together a custom reblog button taught me a lot about HTML
              &amp; CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at{" "}
              <Link
                href="https://www.aspiresoftserv.com/"
                className="text-green inline-block relative transition-all"
              >
                a small company
              </Link>
              ,{" "}
              <Link
                href="https://webashlar.com/"
                className="text-green inline-block relative transition-all"
              >
                a freelancing agency
              </Link>
              , and{" "}
              <Link
                href="https://www.gslab.com/"
                className="text-green inline-block relative transition-all"
              >
                a huge corporation
              </Link>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <Link
                href="https://upstatement.com/"
                className="text-green inline-block relative transition-all"
              >
                Crest Infosystems
              </Link>{" "}
              for a variety of clients.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <ul className="skill-list relative">
            {skills.map((skill, i) => (
              <li className="relative mb-2.5 pl-5 font-bodyFont text-xs">
                <span className="absolute left-0 text-green text-sm leading-3">
                  ▹
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative max-w-xs">
          <div className="shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] block relative w-full transition-all rounded bg-green wrapper hover:-translate-x-1 hover:-translate-y-1">
            <span className="block absolute w-full h-full rounded transition border-solid top-0 left-0 bg-navy-blue mix-blend-screen"></span>
            <div className="">
              <Image
                src="/me.jpg"
                alt="Vishal's photo"
                width={500}
                height={500}
                className="relative rounded mix-blend-multiply grayscale contrast-100 transition hover:grayscale-0 hover:mix-blend-normal"
              />
            </div>
            <span className="block absolute w-full h-full rounded transition border-2 border-solid border-green top-3.5 left-3.5 -z-10"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
