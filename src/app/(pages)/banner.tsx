"use client"
import BgAssetOne from '@/app/components/subComponents/bgAssetOne'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useState } from 'react'

type Props = {
    children:ReactNode
}
// image motion
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Banner = ({children}: Props) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isInView, setIsInView] = useState(false);
  return (
    <div className='font-roboto sm:pt-[110px] pt-20'>
        <AnimatePresence>
       <motion.div 
       className=''
       initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 0.5, delay: 0.5, when:"beforeChildren" }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}>
         <div className='w-full h-64 ssm:h-72 sm:h-96 bg-primary-100 text-white flex items-center justify-center relative overflow-x-hidden'>
         <h2 className='text-3xl sm:text-[42px] font-bold z-1 absolute z-[1] tracking-wider'>{children}</h2>
         <BgAssetOne className='w-72 h-72 ssm:w-[350px] ssm:h-[350px] md:w-96 md:h-96 rounded-full bg-black/30 absolute left-1/2 -translate-x-1/2  md:block'/>
         </div>
         
        </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Banner