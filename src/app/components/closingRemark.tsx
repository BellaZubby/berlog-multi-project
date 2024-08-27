import { motion } from 'framer-motion'
import React from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import AnimatedText from './AnimatedText'

type Props = {}

const ClosingRemark = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center mt-10 sm:my-24 gap-5'>
    <AnimatedText text="BERLOG MULTI PROJECT" className='md:text-7xl sm:text-6xl text-2xl text-[#e8e7e6] text-center' />
    <motion.span
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{
        delay:2,
        duration:0.5
      }}
    ><BsFillHandThumbsUpFill className='sm:w-12 sm:h-12 w-9 h-9 text-[#e8e7e6]'/></motion.span>
    </div>
  )
}

export default ClosingRemark