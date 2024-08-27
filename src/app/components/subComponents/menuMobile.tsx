import React from 'react'
import MobileHomeLink from './mobileNav/mobileHomeLink'
import MobileAboutLink from './mobileNav/mobileAboutLink'
import MobileProjectsLink from './mobileNav/mobileProject'
import MobileServicesLink from './mobileNav/mobileServices'
import MobileContactLink from './mobileNav/mobileContact'

type Props = {
  closeMenu:any
}

const MenuMobile = ({closeMenu}: Props) => {
  return (
    <div className=' flex flex-col gap-10 font-medium text-[15px] sm:text-lg p-7'>
       <MobileHomeLink closeMenu={closeMenu}/>
       <MobileAboutLink closeMenu={closeMenu}/>
       <MobileProjectsLink closeMenu={closeMenu}/>
       <MobileServicesLink closeMenu={closeMenu}/>
       <MobileContactLink closeMenu={closeMenu}/>
    </div>
  )
}

export default MenuMobile