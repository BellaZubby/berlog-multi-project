"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Banner from '../banner'
import globe from '@/app/assets/globe.png'
import Image from 'next/image'
import image1 from '@/app/assets/berlogBg.png'
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from '@/app/hook/motion'
import { BsRocketTakeoff,BsGem , BsLightbulb} from 'react-icons/bs'
import Loading from '@/app/components/loader'
import Clipped from '@/app/components/clipped-asset'
import ClosingRemark from '@/app/components/closingRemark'

type valueTypes = {
  icon:any;
  title: string;
  details?: string;
  value1?: string;
  value2?: string;
  value3?: string;

}

const CardData:Array<valueTypes> = [
  {
    icon:BsLightbulb,
    title:"Our Vision",
    details: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta ipsum quia quos officiis suscipit fuga quis iure facilis eaque."
  },
  {
    icon:BsRocketTakeoff,
    title:"Our Mission",
    details: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta ipsum quia quos officiis suscipit fuga quis iure facilis eaque."
  },
  {
    icon:BsGem,
    title:"Our Core Values",
    value1: "Teamwork",
    value2: "Diligence",
    value3: "Integrity",

  }
];

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};


const AboutPage = () => {
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
    <div className='font-roboto'>
        <Banner>
          About Us
        </Banner>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{
          duration:0.5,
          delay:1.4
        }}
        className='grid md:grid-cols-2 items-center justify-center gap-16 md:gap-36 py-12 md:py-28 md:px-16'>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{
          duration:0.5,
          delay:1.4
        }}
        className='relative flex items-center justify-center md:hidden'>
          <Image src={globe} alt='globe' className='rotate w-[400px] h-[400px] md:w-[500px] md:h-[500px]'/>
          <Image src={image1} alt='project' className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:w-[350px] md:h-[350px] w-60 h-60 object-contain'/>
          </motion.div>
         
         {/* for mobile */}
         <motion.div 
         className='flex flex-col items-center justify-center gap-5 px-4 md:hidden'
         variants={slideInFromLeft(1.5)}
         initial='hidden'
         whileInView='visible'
         viewport={{once:true}}
         >
            <h6 className='font-bold text-primary-100 md:text-lg'>WELCOME TO BERLOG MULTI PROJECT LTD</h6>
            <p className='md:text-[26px] text-lg text-primary-300 font-semibold'>A construction company par excellence</p>
            <p className='mx-auto text-justify md:text-[16px] text-sm leading-relaxed text-[#525150]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolore eos nemo voluptates magni provident totam. Doloremque qui sed minus et velit, quos tenetur 
              inventore distinctio odit saepe, quam veniam id beatae, itaque officia? Non sunt, unde rerum vel nostrum labore, facilis voluptate eaque ratione, 
              dignissimos quam alias assumenda. Magni, minus. <br/> <br/>Eveniet ex assumenda tenetur, laboriosam optio beatae sed officia, officiis deserunt aspernatur laborum dicta rem ipsum recusandae, cum doloremque porro doloribus facilis perferendis nostrum! Qui ratione, aperiam necessitatibus 
              corporis quaerat dolores recusandae in voluptatem quia, quae, dolore ipsa quasi doloribus ipsum illum dolorem tenetur dolorum. A laborum rem quaerat vel?</p>
          </motion.div>
         
         
         <motion.div 
         className='md:flex flex-col items-center justify-center gap-5 px-4 hidden'
         variants={slideInFromLeft(0)}
         initial='hidden'
         whileInView='visible'
         viewport={{once:true}}
         >
            <h6 className='font-bold text-primary-100 md:text-lg'>WELCOME TO BERLOG MULTI PROJECT LTD</h6>
            <p className='md:text-[26px] text-lg text-primary-300 font-semibold'>A construction company par excellence</p>
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
          viewport={{once:true}}
          >
          <Image src={globe} alt='globe' className='rotate w-[500px] h-[500px]'/>
          <Image src={image1} alt='project' className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[350px] h-[350px] object-contain'/>
          </motion.div>
        </motion.div>
        <motion.div 
        initial="hidden"
        animate="hidden"
        whileInView='visible'
        viewport={{once:true, amount:0.4}}
        transition={{ staggerChildren: 0.5 }}
        className='bg-[#d4d5d6] sm:grid-cols-3 grid-cols-1 py-24 gap-9 sm:gap-0 hidden sm:grid'>
           {
            CardData.map((data, idx) => (
              <div key={idx} className='sm:w-[90%] w-[95%] mx-auto'>
                  <motion.div 
                  variants={defaultAnimation}
                  className='bg-white shadow-lg rounded-md pt-10 md:px-5 sm:px-3 px-6 h-80'>
                  <span className='text-primary-300 text-6xl w-20 h-20'><data.icon/></span>
                  <h6 className='text-xl font-bold text-primary-100 mt-5'>{data.title}</h6>
                  <p className='text-[#525150] mt-5 text-sm tracking-wider leading-relaxed'>{data.details}</p>
                  <p className='text-[#525150] mt-5 text-sm tracking-wider leading-relaxed'>{data.value1}</p>
                  <p className='text-[#525150] mt-2 text-sm tracking-wider leading-relaxed'>{data.value2}</p>
                  <p className='text-[#525150] mt-2 text-sm tracking-wider leading-relaxed'>{data.value3}</p>
               </motion.div>
              </div>
               
            ))
           }
        </motion.div>

        {/* for mobile */}
        <div 
        className='grid grid-cols-1 gap-7 pt-16 pb-24 bg-gradient-primary-200 sm:hidden'>
            {
                CardData.map((data, idx) => (
                    <motion.div 
                    variants={slideInFromBottom(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    key={idx} 
                    className='bg-white shadow-lg rounded-md pt-10 px-6 h-80 w-[95%] mx-auto'>
                        <span className='text-primary-300 text-6xl w-20 h-20'><data.icon/></span>
                  <h6 className='text-xl font-bold text-primary-100 mt-5'>{data.title}</h6>
                  <p className='text-[#525150] mt-5 text-sm tracking-wider leading-relaxed'>{data.details}</p>
                  <p className='text-[#525150] mt-5 text-sm tracking-wider leading-relaxed'>{data.value1}</p>
                  <p className='text-[#525150] mt-2 text-sm tracking-wider leading-relaxed'>{data.value2}</p>
                  <p className='text-[#525150] mt-2 text-sm tracking-wider leading-relaxed'>{data.value3}</p>
                    </motion.div>
                ))
            }
        </div>
        <Clipped/>
        <ClosingRemark/>
       
    </div>
  )
 }
}
export default AboutPage