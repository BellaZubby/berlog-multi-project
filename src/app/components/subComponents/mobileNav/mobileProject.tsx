"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
  closeMenu:any;
}

const MobileProjectsLink = ({closeMenu}: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const title = "Projects"
     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div >
        <Link onClick={closeMenu} className={isActive("/projects") ? "text-primary-100 relative": "relative"}  href={"/projects"}>{titleUpperCase}
        </Link>
    </div>
  )
}

export default MobileProjectsLink

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
// type closeMenuType = {
//   closeMenu : any
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

// const MobileProjectsLink = ({closeMenu}:closeMenuType) => {
//   const pathname = usePathname();
//   const isActive = (path: string) => path === pathname;
//     const [isToggled, setIsToggled] = useState(false);
//     const title = "projects"
//     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
    
//     const closeMobileMenu = () => {
//       setIsToggled(false);
//       closeMenu()
//     }
//   return (
//     <div>
//         <div className='flex items-center justify-between'>
//         <Link className={isActive("/projects") ? "text-primary-100": ""}  href={"/projects"}>{titleUpperCase}</Link>
//          {
//             isToggled ? <ChevronUp 
//             onClick={() => setIsToggled(false)} 
//             className={isActive("/projects") ? "text-primary-100 w-4 h-4": "w-4 h-4"} /> 
//             : 
//             <ChevronDown 
//             onClick={() => setIsToggled(true)} 
//             className={isActive("/projects") ? "text-primary-100 w-4 h-4": "w-4 h-4"}/>

//          }
//         </div>
       
//          <div>
//           <AnimatePresence>
//             {
//                 isToggled &&
//                <motion.div 
//                 className={`absolute z-[99] flex flex-col justify-evenly bg-gray-50 w-[250px] 
//                 h-[180px] px-1 shadow-md mt-2`}
//                 initial={{opacity:0, y:-20}}
//                 animate={{opacity:1, y:0}}
//                 exit={{opacity:0, y:-20}}
//                 transition={{duration:0.5}}>
//                 {
//                     projects.map((project, idx) => {
//                         const titleText=project.title.charAt(0).toUpperCase() + project.title.slice(1);
//                       return(
//                         <Link 
//                         onClick={closeMobileMenu} 
//                         className={isActive(project.href) ? "text-primary-100 mobileSublinks": "text-primary-50 mobileSublinks"} key={idx} href={project.href}>{titleText}</Link> 
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

// export default MobileProjectsLink