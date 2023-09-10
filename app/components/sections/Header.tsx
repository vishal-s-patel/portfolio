import * as React from "react";

type Props = {
  heading: string;
  counter: string;
};

const Header = ({ heading, counter }: Props) => (
  <h2 className="flex items-center relative mt-2.5 mx-0 mb-10 w-full whitespace-nowrap text-clamp">
    <span className="text-green font-bodyFont mr-2.5 font-normal text-header-clamp">
      {counter}.
    </span>
    {heading}
    <span className="h-px w-80 bg-gray-700 ml-5"></span>
  </h2>
);

export default Header;
