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

 type closeMenuType = {
  closeMenu : any
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

const MobileServicesLink = ({closeMenu}:closeMenuType) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const [isToggled, setIsToggled] = useState(false);
    const title = "services"
    const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);

    const closeMobileMenu = () => {
      setIsToggled(false);
      closeMenu()
    }

  return (
    <div>
        <div className='flex items-center justify-between'>
        <Link onClick={()=>setIsToggled(!isToggled)} className={isActive("/services/building") || isActive("/services/renovation") || isActive("/services/designing")  || isActive("/services/consultancy") ? "text-primary-100": ""}  href={""}>{titleUpperCase}</Link>
         {
            isToggled ? <ChevronUp 
            onClick={() => setIsToggled(false)} 
            className={isActive("/services/building") || isActive("/services/renovation") || isActive("/services/designing")  || isActive("/services/consultancy") ? "text-primary-100 w-4 h-4": "w-4 h-4"} /> : 
            <ChevronDown 
            onClick={() => setIsToggled(true)}
            className={isActive("/services/building") || isActive("/services/renovation") || isActive("/services/designing")  || isActive("/services/consultancy") ? "text-primary-100 w-4 h-4": "w-4 h-4"}/>
         } 
        </div>
         
         <div>
          <AnimatePresence>
            {
                isToggled &&
                <motion.div 
                className='absolute z-[99] flex flex-col justify-evenly bg-gray-50 w-[250px] 
                h-[210px] px-3 py-1 rounded-md shadow-md mt-2'
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}
                transition={{duration:0.5}}>
                {
                    services.map((service, idx) => {
                        const titleText=service.title.charAt(0).toUpperCase() + service.title.slice(1);
                      return(
                        <Link 
                        onClick={closeMobileMenu}
                        className={isActive(service.href) ? "text-primary-100 mobileSublinks": "text-primary-50 mobileSublinks"} key={idx} href={service.href}>{titleText}</Link> 
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

export default MobileServicesLink