import { StaticImageData } from 'next/image'
import image1 from '@/app/assets/project1.jpg'
import image2 from '@/app/assets/project2.jpg'
import image3 from '@/app/assets/project8.jpeg'
import image4 from '@/app/assets/project6.jpeg'
import person1 from '@/app/assets/testimonalImg.jpg'
import person2 from '@/app/assets/testimonialImg2.jpg'
import person3 from '@/app/assets/testimonialImg3.jpg'

// for doneProjects
export type projects = {
    image:StaticImageData
  }
  
export const doneProject:projects[] = [
    {
      image:image1
    },
    {
      image:image2
    },
    {
      image:image3
    },
    {
      image:image4
    },
  ]
  // for testimonial
export type testimonialType = {
    review:string;
    image:any;
    name:string;
    occupation:string
  }
  
export const testimonialData:testimonialType[] = [
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:person1,
        name: "John Doe",
        occupation: "Entrepreneur"
    },
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:person2,
        name: "Chukwudi Nathan",
        occupation: "Banker"
    },
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:person3,
        name: "Patricia Hassan",
        occupation: "Accountant"
    },
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:person2,
        name: "Chukwudi Nathan",
        occupation:  "Banker"
    },
  
  ]
  
  // for catchPhrase
  export type catchPhraseType = {
    catchPhrase:string;
    
  }
  export const catchPhraseList:catchPhraseType[] = [
     {catchPhrase: "A construction company known for innovative concepts and creative designs",
    
     },
     {catchPhrase: "Our works are marked by precision, and flawless execution",
      
     },
     {catchPhrase: "Berlog, where expertise meets execellence",
      
     },
    
    
  ]
  export type visionMissionTypes = {
    text:string;
    description: string;
    
  }
  
 export const visionMission:visionMissionTypes[] = [
    {
      text: "Our Vision",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta ipsum quia quos officiis suscipit fuga quis iure facilis eaque."
    },
    {
      text: "Our Mission",
      description: 
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta ipsum quia quos officiis suscipit fuga quis iure facilis eaque."
    },
  
  ]
  