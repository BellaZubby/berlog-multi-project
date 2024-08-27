import React from 'react'
import { MenuLinks } from './menuData'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import HomeLink from './desktopNav/homeLink'
import AboutLink from './desktopNav/aboutLink'
import ProjectsLink from './desktopNav/projectsLink'
import ServicesLink from './desktopNav/servicesLink'
import ContactLink from './desktopNav/contact'


type Props = {
  isTopOfPage:boolean
}

const MenuDesktop = ({isTopOfPage}: Props) => {
  return (
    <div className='flex flex-row items-center justify-center gap-5 text-[16px] font-medium p-4 rounded-full'>
      <HomeLink isTopOfPage={isTopOfPage}/> 
      <AboutLink isTopOfPage={isTopOfPage}/>
      <ProjectsLink isTopOfPage={isTopOfPage}/>
      <ServicesLink isTopOfPage={isTopOfPage}/>
      <ContactLink isTopOfPage={isTopOfPage}/>
    </div>
  )
}

export default MenuDesktop