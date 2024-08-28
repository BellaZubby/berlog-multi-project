"use client"
import AnimatedText from '@/app/components/AnimatedText'
import Button from '@/app/components/button'
import { Card } from '@/app/components/card'
import React, { useEffect, useRef, useState } from 'react'
import { motion} from 'framer-motion'
import { slideInFromLeft} from '@/app/hook/motion'
import Link from 'next/link'
import ServiceHome from '@/app/components/serviceHome'
import useMediaQuery from '@/app/hook/useMediaQuery'
import MobileExpertise from '@/app/components/mobileExpertise'
import Facts from '@/app/components/facts'
import Loading from '../../components/loader'
import DesktopHero from '@/app/components/desktopHero'
import ParallaxFact from '@/app/components/parallaxFact'
import DoneProjects from '@/app/components/projects/doneProjects'
import Testimonals from '@/app/components/testimonials/testimonals'
import {catchPhraseList, doneProject, testimonialData, VisionMissionTypes} from '@/app/hook/data'



interface ValueType {
 data:VisionMissionTypes[];
}



const HomePage:React.FC<ValueType> = ({data}) => {
  const [loading, setLoading] = useState(true);
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const ref = useRef(null);
 
  // for loading
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 900)
  }, [])

  if(loading) {
    return <Loading/>
  }

  if (!loading) {
  
  return (
    <div className='font-roboto'>
        <DesktopHero data={catchPhraseList}/>

        <div className='pt-20 md:pb-20 pb-10 md:grid md:grid-cols-5 md:gap-20 flex flex-col items-center gap-14 px-10'>
          <motion.div 
          variants={slideInFromLeft(0)}
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount:0.5}}
          className='md:col-span-3 flex flex-col gap-4'>
           <h4 className='text-center text-sm md:text-left ssm:text-lg md:leading-loose leading-loose '>
            Berlog Multi Project is Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore minima id temporibus nihil iste dolor nobis similique 
            voluptate alias nam quisquam sit, sint tempore ab. Dolore minima id temporibus nihil iste dolor nobis similique 
            voluptate alias nam quisquam sit, sint tempore ab
            </h4> 
           
            <Button className='font-roboto'>
            <Link href={"/aboutus"} className=''>Learn more</Link>
            </Button>
            
            
          </motion.div>
          <div className='col-span-2'>
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
                  className='text-sm ssm:text-lg'
                    ref={ref}
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
        {/* service section */}
        
        {
          aboveMediumScreen && <ServiceHome/>
        }
         {
          !aboveMediumScreen && <MobileExpertise/>
        } 
        <DoneProjects data={doneProject}/>
        <Facts/>
        <ParallaxFact/>
        <Testimonals data={testimonialData}/>
        
        
       
    </div>
  )
}
}

export default HomePage