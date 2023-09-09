import Image from "next/image";
import * as React from "react";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "MongoDB",
  ];
  return (
    <section>
      <h2 className="flex items-center relative w-full whitespace-nowrap numbered-heading">
        About Me
      </h2>
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
              <a href="https://us.mullenlowe.com/">an advertising agency</a>,{" "}
              <a href="https://starry.com/">a start-up</a>,{" "}
              <a href="https://www.apple.com/">a huge corporation</a>, and{" "}
              <a href="https://scout.camd.northeastern.edu/">
                a student-led design studio
              </a>
              . My main focus these days is building accessible, inclusive
              products and digital experiences at{" "}
              <a href="https://upstatement.com/">Upstatement</a> for a variety
              of clients.
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
          <div className="shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] block relative w-full rounded bg-green">
            <div>
              <Image
                src="/me.jpg"
                alt="Vishal's photo"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
