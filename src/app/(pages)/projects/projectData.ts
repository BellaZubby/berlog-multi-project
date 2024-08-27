import project1 from '@/app/assets/project4.jpg'
import project2 from '@/app/assets/project2.jpg'
import project3 from '@/app/assets/project5.jpeg'
import project4 from '@/app/assets/project7.jpg'
import project5 from '@/app/assets/project8.jpeg'
import project6 from '@/app/assets/project9.jpeg'
import { MapPin } from 'lucide-react'

export type imageTypes = {
    image: any;
    description: string;
    icon: any;
    location:string
  }
  
 export const images:Array<imageTypes> = [
    {
      image: project1,
      description: "A semi-detached Duplex",
      icon: MapPin,
      location: "Port Harcourt, Rivers State, Nigeria"
    },
    {
      image: project2,
      description: "A semi-detached Duplex",
      icon: MapPin,
      location: "Port Harcourt, Rivers State, Nigeria"
    },
    {
      image: project3,
      description: "A semi-detached Duplex",
      icon: MapPin,
      location: "Port Harcourt, Rivers State, Nigeria"
    },
    {
      image: project4,
      description: "A semi-detached Duplex",
      icon: MapPin,
      location: "Port Harcourt, Rivers State, Nigeria"
    },
    {
      image: project5,
      description: "A semi-detached Duplex",
      icon: MapPin,
      location: "Port Harcourt, Rivers State, Nigeria"
    },
    {
        image: project6,
        description: "A semi-detached Duplex",
        icon: MapPin,
        location: "Port Harcourt, Rivers State, Nigeria"
      },
      {
        image: project3,
        description: "A semi-detached Duplex",
        icon: MapPin,
        location: "Port Harcourt, Rivers State, Nigeria"
      },
      {
        image: project4,
        description: "A semi-detached Duplex",
        icon: MapPin,
        location: "Port Harcourt, Rivers State, Nigeria"
      },
      {
        image: project5,
        description: "A semi-detached Duplex",
        icon: MapPin,
        location: "Port Harcourt, Rivers State, Nigeria"
      },
      {
          image: project6,
          description: "A semi-detached Duplex",
          icon: MapPin,
          location: "Port Harcourt, Rivers State, Nigeria"
        },
        {
            image: project1,
            description: "A semi-detached Duplex",
            icon: MapPin,
            location: "Port Harcourt, Rivers State, Nigeria"
          },
          {
            image: project2,
            description: "A semi-detached Duplex",
            icon: MapPin,
            location: "Port Harcourt, Rivers State, Nigeria"
          },
  ]
  
  