import { motion } from 'framer-motion'
import React from 'react'
import { slideInFromBottom, slideInFromLeft } from '../hook/motion'
import AnimatedText from './AnimatedText'
import Button from './button'
import { Card } from './card'
import Link from 'next/link'
import { VisionMissionTypes } from '../hook/data'

interface Props {
    data:VisionMissionTypes[];
   }
   

const AboutHome = ({data}: Props) => {
  return (
    <div className='pt-20 md:pb-20 pb-10 md:grid md:grid-cols-5 md:gap-20 flex flex-col items-center gap-14 px-10 md:bg-no-repeat md:bg-fixed md:bg-[center_center] md:bg-home-about relative md:bg-[length:500px_300px] overflow-x-hidden'>
      <div className='absolute inset-0 bg-white/90 hidden md:block'/>
      <motion.div 
           initial={{opacity:0, x:-100}}
           whileInView={{opacity:1, x:0}}
           transition={{duration:0.5, delay:0.5}}
           viewport={{once:true, amount:0.5}}
          className='md:col-span-3 flex flex-col gap-4 z-[20] '>
           <h4 className='text-justify text-lg md:text-left tracking-wider leading-loose text-primary-50'>
            Berlog Multi Project is Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore minima id temporibus nihil iste dolor nobis similique 
            voluptate alias nam quisquam sit, sint tempore ab. Dolore minima id temporibus nihil iste dolor nobis similique 
            voluptate alias nam quisquam sit, sint tempore ab
            </h4> 
           
            <Button className='font-roboto text-primary-50 text-lg'>
            <Link href={"/aboutus"} className=''>Learn more</Link>
            </Button>
            
            
          </motion.div>
         
          <div className='col-span-2 text-primary-50 z-[20]'>
            {
              data.map((data, i) => (
                <div key={i} className=' pb-10 flex items-center justify-center gap-7'>
                <motion.div 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true, amount:0.5}}
                transition={{duration:0.5, delay:0.5}}
                className='md:w-3 w-2 h-24 bg-primary-100'/>
                <Card key={i}>
                  <AnimatedText text={data.text} className='md:text-2xl text-xl font-bold text-primary-100' />
                  <motion.p
                  className='text-lg leading-relaxed tracking-wider'
                    initial={{x:100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    viewport={{once:true, amount:0.5}}
                    transition={{duration:0.5, delay:0.9}}
                  >{data.description}</motion.p>
                </Card>
                </div>
              ))
            }
            
          </div>
          
        </div>
  )
}

export default AboutHome