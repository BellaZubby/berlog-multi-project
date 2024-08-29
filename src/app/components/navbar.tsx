"use client"
import React, { useEffect, useState } from 'react'
import { Droplets, Menu, XIcon} from 'lucide-react'
import Link from 'next/link'
import MenuDesktop from './subComponents/menu'
import useMediaQuery from '../hook/useMediaQuery'
import MenuMobile from './subComponents/menuMobile'
import { AnimatePresence, motion } from 'framer-motion'
import { slideInFromBottom, slideInFromLeft, slideInFromTop } from '../hook/motion'
import berlogLogo from '@/app/assets/berlogBg.png'
import Image from 'next/image'
type Props = {}

const Navbar = (props: Props) => {
  const [isTopOfPage, setIsTopOfPage] =useState<boolean>(true);
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const closeMobileMenu = () => {
      setIsMenuToggled(false);
  }
  
  // useEffect
  useEffect(
    () => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
        }
        if (window.scrollY >= 10) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []
  );
  const navbarBackground = isTopOfPage ? "hidden" :  "block";
  return (
     <nav className='font-roboto relative z-[99] overflow-x-hidden'>
      {
        aboveMediumScreen && (
          <motion.div 
            variants={slideInFromTop(2.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once:true}}

          //className={`bg-[#F3F4F6] fixed w-full top-0 text-primary-50 `}
          className={isTopOfPage ? "bg-transparent fixed w-full top-0 text-primary-50" : "hidden"}
          >
          <div className='w-full mx-auto flex items-center justify-between px-4 py-4'>
          <Link href={"/"}>
            <Image className='w-28 object-cover' src={berlogLogo} alt='berlog-logo'/>
          </Link>
          <div>
            <MenuDesktop isTopOfPage={isTopOfPage}/>
          </div>
              <Link href='/contactus'>
                <button className={`border-2 w-[200px] h-[50px] rounded-md font-medium text-lg outline-none navBtn border-primary-50 tracking-wider`}>Hire Us</button>
              </Link>
  
         </div>
          
          </motion.div>
        ) }

        {/* offTopNav */}
        {
          aboveMediumScreen && (
            <motion.div 
            initial={{opacity:0, y:-150}}
              animate={{opacity:1, y:0}}
              viewport={{once:false}}
                exit={{opacity:0, y:-120}}
                transition={{duration:2, delay:0}}
            className={isTopOfPage ? "hidden":"bg-[#F3F4F6] fixed w-full top-0 text-primary-50 shadow-md"}
          >
          <div className='w-full mx-auto flex items-center justify-between px-4 py-2'>
          <Link href={"/"}>
            <Image className='w-28 object-cover' src={berlogLogo} alt='berlog-logo'/>
          </Link>
          <div>
            <MenuDesktop isTopOfPage={isTopOfPage}/>
          </div>
              <Link href='/contact'>
                <button className={`border-2 w-[200px] h-[50px] rounded-md font-medium text-lg outline-none navBtn border-gray-400 tracking-wider`}>Hire Us</button>
              </Link>
  
         </div>
          
          </motion.div>

          )
        }

      
        {
          !aboveMediumScreen &&
         (
          <motion.div  
          className={'bg-[#F3F4F6] fixed w-full md:hidden shadow-md'}
          variants={slideInFromTop(1.5)}
            initial="hidden"
            animate="visible"
          
          >
            <div className='px-7 flex relative items-center justify-between py-4'>
            <Link href={"/"} className=''>
              <Image className='w-20 ssm:w-24 object-cover' src={berlogLogo} alt='berlog-logo'/>
            </Link>
            
            <span className='border rounded-full p-[10px] border-gray-600'>
                <Menu className='text-primary-100 w-7 h-7' onClick={() => setIsMenuToggled(true)}/>
            </span>
            </div>
          </motion.div>
          
        )
      }
      <AnimatePresence>
      {
       !aboveMediumScreen && isMenuToggled && (
            <div className='fixed left-0 bottom-0 z-[999] h-full w-full flex items-start bg-black/40'>
              <motion.div 
              variants={{
                open: {
                  x:"0%",
                  transition:{
                    duration:0.5,
                    when:"beforeChildren",
                  },
                },
                closed: {
                  x:"-100%",
                  transition: {
                    when: "afterChildren",
                    duration:0.4
                  }
                }
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className='w-[250px] ssm:w-[430px] sm:w-[500px] h-screen bg-[#F3F4F6] drop-shadow-xl text-primary-50'>
              <div className='shadow-lg flex items-center justify-between px-4 py-5'>
              <Link href={"/"} className=''>
              <Image className='w-24 object-cover' src={berlogLogo} alt='berlog-logo'/>
              </Link>
              <span className='border rounded-full p-[10px] border-gray-400'>
                <XIcon className='text-primary-100 w-7 h-7' onClick={() => setIsMenuToggled(!isMenuToggled)}/>
              </span>
              
              </div>

             <motion.div 
              variants={{
                open: {
                  y:"0%",
                  opacity: 1,
                  transition: {
                    duration:0.3,
                  }
                },

                closed: {
                  y: "25%",
                  opacity: 0,
                }
              }}
            >
              <MenuMobile closeMenu={closeMobileMenu}/>
             </motion.div>
             

              </motion.div>
            </div> 
        )
      }
     </AnimatePresence>   
       
     </nav>
   
    
  )
}

export default Navbar