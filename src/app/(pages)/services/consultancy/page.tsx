"use client"
import React, { useEffect, useState } from 'react'
import Banner from '../../banner'
import Loading from '@/app/components/loader'
import Clipped from '@/app/components/clipped-asset'
import ClosingRemark from '@/app/components/closingRemark'
import { slideInFromLeft, slideInFromRight } from '@/app/hook/motion'
import { motion } from 'framer-motion'
import consultancyImage from '@/app/assets/consultancy.jpg'
import Image from 'next/image'
import Testimonals from '@/app/components/testimonials/testimonals'

type Props = {}

const ConsultancyPage = (props: Props) => {
  const[loading, setLoading] = useState(true)
  // for loading
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 200)
  }, [])

  if(loading) {
    return <Loading/>
  }
 if (!loading) {
  return (
    <div>
      <Banner>
        Consultancy
      </Banner>
      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{
          duration:0.5,
          delay:1.4
        }}
        className='grid md:grid-cols-2 items-center justify-center gap-10 pb-12 md:gap-16 md:py-28 md:px-16'>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{
          duration:0.5,
          delay:1.4
        }}
        className='relative flex items-center justify-center md:hidden'>
          <Image src={consultancyImage} alt='globe' className='w-full h-[280px] object-cover'/>
          </motion.div>
          {/* for mobile */}
          <motion.div 
         className='flex flex-col items-center justify-center gap-5 px-4 md:hidden'
         variants={slideInFromLeft(1.2)}
         initial='hidden'
         whileInView='visible'
         viewport={{once:true}}
         > 
            <h6 className='font-bold text-primary-100'>QUALITY CONSTRUCTION FOR EVERY PROJECT</h6>
            <p className='mx-auto text-justify md:text-[16px] text-sm leading-relaxed text-[#525150]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolore eos nemo voluptates magni provident totam. Doloremque qui sed minus et velit, quos tenetur 
              inventore distinctio odit saepe, quam veniam id beatae, itaque officia? Non sunt, unde rerum vel nostrum labore, facilis voluptate eaque ratione, 
              dignissimos quam alias assumenda. Magni, minus. <br/> <br/>Eveniet ex assumenda tenetur, laboriosam optio beatae sed officia, officiis deserunt aspernatur laborum dicta rem ipsum recusandae, cum doloremque porro doloribus facilis perferendis nostrum! Qui ratione, aperiam necessitatibus 
              corporis quaerat dolores recusandae in voluptatem quia, quae, dolore ipsa quasi doloribus ipsum illum dolorem tenetur dolorum. A laborum rem quaerat vel?</p>
          </motion.div>

         
         
         <motion.div 
         className='flex-col items-center justify-center gap-5 px-4 hidden md:flex'
         variants={slideInFromLeft(0)}
         initial='hidden'
         whileInView='visible'
         viewport={{once:true, amount:0.2}}
         > 
            <h6 className='font-bold text-primary-100 md:text-lg'>QUALITY CONSTRUCTION FOR EVERY PROJECT</h6>
            <p className='mx-auto text-justify md:text-[16px] text-sm leading-relaxed text-[#525150]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolore eos nemo voluptates magni provident totam. Doloremque qui sed minus et velit, quos tenetur 
              inventore distinctio odit saepe, quam veniam id beatae, itaque officia? Non sunt, unde rerum vel nostrum labore, facilis voluptate eaque ratione, 
              dignissimos quam alias assumenda. Magni, minus. <br/> <br/>Eveniet ex assumenda tenetur, laboriosam optio beatae sed officia, officiis deserunt aspernatur laborum dicta rem ipsum recusandae, cum doloremque porro doloribus facilis perferendis nostrum! Qui ratione, aperiam necessitatibus 
              corporis quaerat dolores recusandae in voluptatem quia, quae, dolore ipsa quasi doloribus ipsum illum dolorem tenetur dolorum. A laborum rem quaerat vel?</p>
          </motion.div>
          <motion.div 
          className='relative hidden md:block'
          variants={slideInFromRight(0)}
          initial='hidden'
          whileInView='visible'
          viewport={{once:true, amount:0.2}}
          >
          <Image src={consultancyImage} alt='construction' className='w-[500px] h-[350px] object-contain'/>
          </motion.div>
        </motion.div>
        <Testimonals review={''} image={undefined} name={''} occupation={''}/>
        <Clipped/>
        <ClosingRemark/>
    </div>
  )
}
}

export default ConsultancyPage