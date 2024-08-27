"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  closeMenu:any
}


const MobileHomeLink = ({closeMenu}: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const title = "home"
     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div className=''>
        <Link onClick={closeMenu}
         className={isActive("/") ? "text-primary-100 relative": "relative"}  href={"/"}>
            {titleUpperCase}
        </Link>
        
    </div>
  )
}

export default MobileHomeLink