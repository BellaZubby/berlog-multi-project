"use client"
import HomePage from "./(pages)/home/page";
import { visionMission } from "./hook/data";




const Home:React.FC = () => {

  return (
    <main className="w-full h-full">
      <div>
        <HomePage data={visionMission}/>
      </div>
     
    </main>
  );
}

export default Home
