"use client"
import HomePage from "./(pages)/home/page";
import { visionMission } from "./hook/data";




export default function Home() {

  return (
    <main className="w-full h-full">
      <div>
        <HomePage data={visionMission}/>
      </div>
     
    </main>
  );
}
