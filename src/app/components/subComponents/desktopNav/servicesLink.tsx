"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

type Props = {
    href: string;
    title: string; 
 }

 type Page = {
  isTopOfPage: boolean;
}
 const services:Array<Props> = [
     {
         title:"Building Construction",
         href: "/services/building"
     },
     {
         title:"Renovation",
         href: "/services/renovation"
     },
     {
         title:"Designing",
         href: "/services/designing"
     },
     {
      title:"Consultancy",
      href: "/services/consultancy"
  },
 ]

const ServicesLink = ({isTopOfPage}: Page) => {
  const pathname = usePathname();
  const isActive = (path:string) => path === pathname;
    const [isToggled, setIsToggled] = useState(false);
    const title = "services"
    const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <div
    onMouseEnter={() =>setIsToggled(true)}
    onMouseLeave={() =>setIsToggled(!isToggled)}
    >
        <div className='flex items-center justify-center relative'>
        <Link className={isActive("/services/building") || isActive("/services/renovation") || isActive("/services/designing")  || isActive("/services/consultancy") ? "text-primary-100": ""}  href={""}>{titleUpperCase}</Link>
         {
            isToggled ? <ChevronUp className={isActive("/services/building") || isActive("/services/renovation") || isActive("/services/designing") || isActive("/services/consultancy") ? "text-primary-100 w-4 h-4": "w-4 h-4"} /> : <ChevronDown className= {isActive("/services/building") || isActive("/services/renovation") || isActive("/services/designing") || isActive("/services/consultancy") ? "text-primary-100 w-4 h-4": "w-4 h-4"} />
         }
         <span 
          style={{transform: isToggled ? "scaleX(1)" : "scaleX(0)"}}
          className={`bg-gradient-primary absolute -bottom-2 -left-2 -right-2 h-[1px] origin-left rounded-full transition-transform duration-300 ease-out`}/>
        </div>
         
         <div>
          <AnimatePresence>
            {
                isToggled &&
                <motion.div 
                className='absolute top-12 flex flex-col justify-evenly bg-gray-50 w-[200px] 
                h-[180px] px-3 py-1 rounded-md shadow-md mt-9'
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}
                transition={{duration:0.5}}>
                    <div className='absolute left-0 right-0 -top-9 h-10 bg-transparent'/>
                {
                    services.map((service, idx) => {
                        const titleText=service.title.charAt(0).toUpperCase() + service.title.slice(1);
                      return(
                        <Link className={isActive(service.href) ? "text-primary-100 mobileSublinks text-[16px]": "text-primary-50 mobileSublinks text-[16px]"} key={idx} href={service.href}>{titleText}</Link> 
                      ) 
    })
                }
               </motion.div>
            }
            </AnimatePresence>
         </div>
    </div>
  )
}

export default ServicesLink