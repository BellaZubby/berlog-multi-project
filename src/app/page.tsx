"use client"
import Image from "next/image";
import Navbar from "./components/navbar";
import FeaturesPage from "./(pages)/aboutus/page";
import HomePage from "./(pages)/home/page";


export default function Home() {

  return (
    <main className="w-full h-full">
      <div>
        <HomePage text={""} description={""}/>
      </div>
     
    </main>
  );
}
