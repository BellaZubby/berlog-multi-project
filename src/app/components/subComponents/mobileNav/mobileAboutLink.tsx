"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

type Props = {
  closeMenu:any;
}

const MobileAboutLink = ({closeMenu}: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
    const title = "about"
     const titleUpperCase = title.charAt(0).toUpperCase() + title.slice(1);
  return (
   
    <div >
        <Link onClick={closeMenu} className={isActive("/aboutus") ? "text-primary-100 relative": "relative"}  href={"/aboutus"}>{titleUpperCase}
        </Link>
    </div>
  )
}

export default MobileAboutLink