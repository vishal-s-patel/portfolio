import Image from "next/image";
import Navbar from "./components/Navbar";
import Email from "./components/Email";
import Social from "./components/Social";
import Hero from "./components/sections/Hero";
import Layout from "./components/MyLayout";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Social />
      <Email />
      <Layout />
    </div>
  );
}
