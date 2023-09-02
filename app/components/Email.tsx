import Link from "next/link";
import * as React from "react";

const Email = () => {
  return (
    <div className="w-10 fixed bottom-0 left-auto right-10 text-[#a8b2d1]">
      <div className="flex flex-col items-center relative after:content-[''] after:block after:w-px after:h-20 after:bg-[#a8b2d1] after:my-0 after:mx-auto">
        <Link
          href="mailto:vishalpatel7543@gmail.com"
          className="email font-bodyFont text-xs"
        >
          vishalpatel7543@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Email;
