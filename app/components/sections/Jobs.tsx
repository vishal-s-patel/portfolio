import * as React from "react";
import Header from "./Header";
import Link from "next/link";

const Jobs = () => {
  const jobsData = [
    {
      companyName: "Crest",
      range: "",
      jobTitle: "",
      tasks: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
    },
  ];
  return (
    <section className="my-0 mx-auto py-24 px-0">
      <Header heading="Where I've worked" counter="02" />
      <div className="flex">
        <div className="relative w-max m-0 p-0 list-none">
          <button className="h-10 font-bodyFont pt-0 px-5 pb-0.5 border-l-2 border-lightest-navy text-xs">
            Crest
          </button>
          <button className="h-10 font-bodyFont pt-0 px-5 pb-0.5 border-l-2 border-lightest-navy text-xs">
            GS Lab
          </button>
        </div>
        <div className="relative w-full ml-5">
          <div className="w-full h-auto py-2.5 px-1">
            <h3>
              <span>Software Engineer</span>
              <span>
                &nbsp;@&nbsp;{" "}
                <Link href="https://www.crestinfosystems.com/">
                  Crest Infosystems
                </Link>
              </span>
            </h3>
            <p>March 2024 - Present</p>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
