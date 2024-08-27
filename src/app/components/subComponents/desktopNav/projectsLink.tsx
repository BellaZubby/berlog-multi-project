"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  isTopOfPage: boolean;
}

const ProjectsLink = ({isTopOfPage}: Props) => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const [hover, setIsHover] = useState(false)
    const title = "Projects"
    const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div  
    onMouseEnter={() =>setIsHover(true)}
    onMouseLeave={() =>setIsHover(!hover)}>
        <Link className={isActive("/projects") ? "text-primary-100 relative": "relative"} href={"/projects"}>{titleUpperCase}
        <span 
          style={{transform: hover ? "scaleX(1)" : "scaleX(0)"}}
          className={`bg-gradient-primary absolute -bottom-2 -left-2 -right-2 h-[1px] origin-left rounded-full transition-transform duration-300 ease-out`}/>
        </Link>
    </div>
  )
}

export default ProjectsLink





// "use client"

// import { ChevronDown, ChevronUp } from 'lucide-react';
// import Link from 'next/link';
// import React, { useState } from 'react'
// import { AnimatePresence, motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

// type Props = {
//    href: string;
//    title: string; 
   
// }
// type Page = {
//     isTopOfPage: boolean;
// }
// const projects:Array<Props> = [
//     {
//         title:"Project1",
//         href: "/projects/project1"
//     },
//     {
//         title:"Project2",
//         href: "/projects/project2"
//     },
//     {
//         title:"Project3",
//         href: "/projects/project3"
//     },
// ]

// const ProjectsLink = ({isTopOfPage}:Page) => {
//     const pathname = usePathname();
//     const isActive = (path:string) => path === pathname;
//     const [isToggled, setIsToggled] = useState(false);
//     const title = "projects"
//     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
//      const dropDownItems = isTopOfPage ? "text-primary-50" : ""
//   return (
//     <div 
//         onMouseEnter={() =>setIsToggled(true)}
//         onMouseLeave={() =>setIsToggled(!isToggled)}
//     >
//         <div className='flex items-center justify-center relative'>
//         <Link className={isActive("/projects") ? "text-primary-100": ""}  href={"/projects"}>{titleUpperCase}</Link>
//          {
//             isToggled ? <ChevronUp className={isActive("/projects") ? "text-primary-100 w-4 h-4": "w-4 h-4"}/> : <ChevronDown  className={isActive("/projects") ? "text-primary-100 w-4 h-4": "w-4 h-4"}/>
//          }
//           <span 
//           style={{transform: isToggled ? "scaleX(1)" : "scaleX(0)"}}
//           className={`bg-gradient-primary absolute -bottom-2 -left-2 -right-2 h-[1px] origin-left rounded-full transition-transform duration-300 ease-out`}/>
//         </div>
       
//          <div>
//             <AnimatePresence>
//             {
//                 isToggled &&
//                <motion.div 
//                 className={`${dropDownItems} absolute top-12 flex flex-col justify-evenly rounded-md bg-gray-50 w-[200px] 
//                 h-[180px] px-1 shadow-md mt-9`}
//                 initial={{opacity:0, y:-20}}
//                 animate={{opacity:1, y:0}}
//                 exit={{opacity:0, y:-20}}
//                 transition={{duration:0.5}}>
//                     <div className='absolute left-0 right-0 -top-9 h-10 bg-transparent'/>
//                 {
//                     projects.map((project, idx) => {
//                         const titleText=project.title.charAt(0).toUpperCase() + project.title.slice(1);
//                       return(
//                         <Link className='sublinks text-primary-50' key={idx} href={project.href}>{titleText}</Link> 
//                       ) 
//     })
//                 }
//                </motion.div>
//             }
//             </AnimatePresence>
//          </div>
//     </div>
//   )
// }

// export default ProjectsLink