"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  isTopOfPage: boolean;
}

const AboutLink = ({isTopOfPage}: Props) => {
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const [hover, setIsHover] = useState(false)
    const title = "about us"
    const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div  
    onMouseEnter={() =>setIsHover(true)}
    onMouseLeave={() =>setIsHover(!hover)}>
        <Link className={isActive("/aboutus") ? "text-primary-100 relative": "relative"} href={"/aboutus"}>{titleUpperCase}
        <span 
          style={{transform: hover ? "scaleX(1)" : "scaleX(0)"}}
          className={`bg-gradient-primary absolute -bottom-2 -left-2 -right-2 h-[1px] origin-left rounded-full transition-transform duration-300 ease-out`}/>
        </Link>
    </div>
  )
}

export default AboutLink