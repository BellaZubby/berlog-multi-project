import { motion } from 'framer-motion'
import { PlusIcon, Percent } from 'lucide-react'
import React from 'react'
import { slideInFromLeft } from '../hook/motion'
import SliderCounter from './slider/sliderCounter'
import Image from 'next/image'
import factsImage from '@/app/assets/factsImage.jpg'
import Link from 'next/link'
import BgMobileAsset from './subComponents/bgMobileAsset'

type Props = {}

const Facts = (props: Props) => {
  return (
            <div className='py-16 sm:pt-10 sm:pb-32 sm:px-10 relative w-full md:hidden'>
          <div className='w-full md:w-[95%] md:mx-auto relative'>
          <Image src={factsImage} alt='factImage' className='h-80 object-cover'/>
          <div className='bg-black/65 absolute inset-0 flex flex-col items-center justify-center gap-5'>
            <h4 className='text-secondary-300 text-[16px] ssm:text-xl sm:text-3xl font-semibold mt-10'>EXECELLENCE IN DESIGN AND CONSTRUCTION</h4>
            <div className='flex items-center gap-10'>
            <motion.div 
               variants={slideInFromLeft(0)} 
               initial="hidden"
               whileInView="visible"
               viewport={{once:true}}
              className='flex flex-col items-center text-white font-semibold  sm:px-0'>
                <div className='text-[45px] md:text-[50px] font-roboto flex items-center'>
                 <SliderCounter from={0} to={35}/>
                <PlusIcon className='w-10 h-10' />
            
                </div>
                <h4 className='text-lg  font-roboto font-medium hidden sm:block'>Completed Projects across Nigeria</h4>
                <h4 className='text-lg  font-roboto font-medium sm:hidden'>Completed Projects</h4>
              </motion.div>

                <motion.div 
               variants={slideInFromLeft(0)} 
               initial="hidden"
               whileInView="visible"
               viewport={{once:true}}
              className='flex flex-col text-white items-center justify-center sm:px-0 font-semibold'>
                <div className='text-[45px] md:text-[50px] font-roboto flex items-center'>
                 <SliderCounter from={0} to={90}/>
                <Percent className='w-10 h-10' />
            
                </div>
                <h4 className='text-lg font-roboto font-medium hidden sm:block'>Happy and satisfied clients</h4>
                <h4 className='text-lg font-roboto font-medium sm:hidden'>Happy Clients</h4>
                </motion.div>
            </div>
          <button className='hero-btn bg-gradient-secondary text-[16px] md:text-lg font-semibold text-white tracking-wider px-7 py-2'>
            <Link href={'/contactus'}>Hire Us</Link>
          </button>
          </div>
          <BgMobileAsset className='mobileClip w-[65px]  sm:w-[100px] h-20 bg-secondary-300 absolute top-0'/>
          <BgMobileAsset className='mobileClipTwo w-[65px] sm:w-[100px] h-20 bg-secondary-300 absolute bottom-0 right-0'/>
          </div>
          {/* <BgAssetOne className='clip w-[75px] h-6 bg-primary-200 absolute top-[55%] z-[-1] left-0 -skew-y-12 hidden md:block'/>
          <BgAssetOne className='clip w-[75px] h-6 bg-primary-300 absolute top-[25%] z-[-1] left-0 -skew-y-12 hidden md:block'/>
           */}
          
        </div>
  )
}

export default Facts