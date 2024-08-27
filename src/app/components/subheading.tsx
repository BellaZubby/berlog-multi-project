import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

type Props = {
    children: ReactNode
    className: string
}

const SubHeading = ({children, className}: Props) => {
  return (
    <motion.div 
        className='flex flex-col items-center justify-center gap-2'
        initial={{opacity: 0}}
        whileInView={{opacity:1}}
        viewport={{once:true, amount:0.5}}
        transition={{duration:0.5, delay:0.2}}
    >
    <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-medium text-[#525150] '>{children}</h1> 
    <div className='h-1 w-16 bg-gradient-secondary'/>
    </motion.div>
  )
}

export default SubHeading