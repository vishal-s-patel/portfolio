"use client";
import Link from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

const Email = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="w-10 fixed bottom-0 left-auto right-10 text-[#a8b2d1]"
    >
      <div className="flex flex-col items-center relative after:content-[''] after:block after:w-px after:h-20 after:bg-[#a8b2d1] after:my-0 after:mx-auto">
        <Link
          href="mailto:vishalpatel7543@gmail.com"
          className="email font-bodyFont text-xs hover:-translate-y-1 hover:text-green"
        >
          vishalpatel7543@gmail.com
        </Link>
      </div>
    </motion.div>
  );
};

export default Email;
