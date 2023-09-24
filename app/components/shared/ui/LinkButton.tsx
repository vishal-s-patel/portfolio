import Link from "next/link";
import * as React from "react";

type Props = {
  btnText: string;
  link: string;
  classes: string;
};

export default function LinkButton({ btnText, link, classes }: Props) {
  return (
    <Link
      href={link}
      className={`text-green bg-transparent border border-solid border-[#64ffda] rounded py-3 px-4 font-bodyFont ml-3.5 hover:shadow-[3px_3px_0_0_#64ffda] resume-button ${classes}`}
    >
      {btnText}
    </Link>
  );
}
