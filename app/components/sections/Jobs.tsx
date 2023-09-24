import * as React from "react";
import Header from "./Header";
import Link from "next/link";

const Jobs = () => {
  const jobsData = [
    {
      companyName: "Crest",
      range: "March 2023 - Present",
      jobTitle: "Software Engineer",
      tasks: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
    },
    {
      companyName: "GS Lab",
      range: "June 2022 - February 2023",
      jobTitle: "Software Engineer",
      tasks: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
    },
    {
      companyName: "WebAshlar",
      range: "December 2020 - June 2022",
      jobTitle: "Jr Softare Developer",
      tasks: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
    },
    {
      companyName: "Aspire",
      range: "January - July 2020",
      jobTitle: "Intern",
      tasks: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
      ],
    },
  ];
  return (
    <section className="max-w-[700px]">
      <Header heading="Where I've worked" counter="02" />
      <div className="md:flex">
        <div
          className="flex w-[calc(100%+50px)] pl-[25px] -ml-[25px] overflow-x-auto mb-7 md:block relative md:w-max md:m-0 md:p-0 md:overflow-hidden list-none"
          role="tablist"
        >
          {jobsData.map((jobs, i) => (
            <button
              key={i + 1}
              className="flex justify-center items-center min-w-[120px] px-4 border-l-0 border-b-2 md:block md:w-full text-left h-10 font-bodyFont pt-0 md:px-5 pb-0.5 md:border-l-2 md:border-b-0 border-lightest-navy text-xs"
            >
              {jobs.companyName}
            </button>
          ))}
        </div>
        <div className="relative w-full md:ml-5">
          <div className="w-full h-auto py-2.5 px-1">
            <h3 className="mb-0.5 text-xl font-medium">
              <span>Software Engineer</span>
              <span className="text-green">
                &nbsp;@&nbsp;{" "}
                <Link
                  href="https://www.crestinfosystems.com/"
                  className="inline-block relative text-green transition"
                >
                  Crest Infosystems
                </Link>
              </span>
            </h3>
            <p className="mb-6 text-slate-500 font-bodyFont text-xs">
              March 2024 - Present
            </p>
            <div>
              <ul className="text-sm">
                {jobsData[0].tasks.map((task, i) => (
                  <li className="relative pl-7 mb-2.5">
                    <span className="absolute left-0 text-green">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
