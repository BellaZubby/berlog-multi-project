import { motion } from 'framer-motion'
import { PlusIcon, Percent} from 'lucide-react'
import React from 'react'
import { slideInFromLeft } from '../hook/motion'
import SliderCounter from './slider/sliderCounter'
import BgMobileAsset from './subComponents/bgMobileAsset'
import Link from 'next/link'

type Props = {}

const ParallaxFact = (props: Props) => {
  return (
    <div className='hidden md:block pb-16'>

<div className="bg-fact-image w-full h-[500px] bg-cover bg-fixed bg-no-repeat bg-center">
<div className='bg-black/65 w-full h-full inset-0 flex flex-col items-center justify-center gap-5'>
            <h4 className='text-primary-300 text-sm ssm:text-xl sm:text-3xl md:text-5xl font-semibold'>EXECELLENCE IN DESIGN AND CONSTRUCTION</h4>
            <div className='flex items-center gap-10'>
            <motion.div 
               variants={slideInFromLeft(0)} 
               initial="hidden"
               whileInView="visible"
               viewport={{once:true}}
              className='flex flex-col items-center text-white font-semibold  sm:px-0'>
                <div className='text-[40px] md:text-[60px] font-roboto flex items-center'>
                 <SliderCounter from={0} to={35}/>
                <PlusIcon className='w-10 h-10' />
            
                </div>
                <h4 className='text-sm md:text-xl  font-roboto font-medium hidden sm:block'>Completed Projects across Nigeria</h4>
                <h4 className='text-sm md:text-xl  font-roboto font-medium sm:hidden'>Completed Projects</h4>
              </motion.div>

                {/* <hr className='bg-[#C2C2C2C2] h-[1.5px] my-8 w-[70%]'/> */}
                <motion.div 
               variants={slideInFromLeft(0)} 
               initial="hidden"
               whileInView="visible"
               viewport={{once:true}}
              className='flex flex-col text-white items-center justify-center sm:px-0 font-semibold'>
                <div className='text-[40px] md:text-[60px] font-roboto flex items-center'>
                 <SliderCounter from={0} to={90}/>
                <Percent className='w-10 h-10' />
            
                </div>
                <h4 className='text-sm md:text-xl font-roboto font-medium hidden sm:block'>Happy and satisfied clients</h4>
                <h4 className='text-sm md:text-xl font-roboto font-medium sm:hidden'>Happy Clients</h4>
                </motion.div>
            </div>
          <button className='hero-btn bg-gradient-secondary text-sm md:text-lg font-semibold text-white tracking-wider px-12 py-2'>
            <Link href={'/contactus'}>Hire Us</Link>
          </button>
          </div>
        
          </div>

</div>
  )
}

export default ParallaxFact