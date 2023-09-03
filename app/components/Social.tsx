"use client";
import Link from "next/link";
import * as React from "react";
import Icon from "./icons/Icon";
import { motion } from "framer-motion";

const Social = () => {
  const socialMedia = [
    {
      name: "Github",
      url: "https://github.com/vishal-s-patel",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ig_vishalpatel",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/vishalspatel_",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vishalp9",
    },
    {
      name: "Codepen",
      url: "https://www.linkedin.com/in/bchiang7",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="w-10 fixed bottom-0 left-10 right-auto text-[#a8b2d1]"
    >
      <ul className="flex flex-col items-center m-0 p-0 list-none after:content-[''] after:block after:w-px after:h-20 after:bg-[#a8b2d1] after:my-0 after:mx-auto">
        {socialMedia.map((social) => {
          return (
            <li key={social.name}>
              <Link
                href={social.url}
                className="p-2.5 hover:-translate-y-1 hover:text-green"
              >
                <Icon name={social.name} />
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Social;
