import * as React from "react";
import Github from "./Github";
import Twitter from "./Twitter";
import LinkedIn from "./LinkedIn";
import Instagram from "./Instagram";
import Codepen from "./Codepen";

type Props = {
  name: string;
};

const Icon = ({ name }: Props) => {
  switch (name) {
    case "Github":
      return <Github />;
    case "Twitter":
      return <Twitter />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Instagram":
      return <Instagram />;
    case "Codepen":
      return <Codepen />;
  }
};

export default Icon;
