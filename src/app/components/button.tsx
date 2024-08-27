import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode
    className?:string;
}
const button ={
    initial: {
      scale:1,
      transition: {
        duration: 0.3
      }
    },
    animate:{ 
      scale:1.1,
      transition: {
        duration: 0.4
      }
  
    },
  }
const Button = ({children, className}: Props) => {
  return (
    <motion.div 
    initial="initial"
    animate="initial"
    whileHover="animate"
    // className='border-2 w-[20%] border-secondary-300 md:flex items-center outline-none rounded-md Btn hidden'
    className='Btn outline-none border-2 py-1 rounded-md border-primary-100 relative w-[50%] xs:w-[35%] sm:w-[30%] md:w-[25%] text-sm ssm:text-lg mx-auto flex items-center justify-center'
    >
        <motion.button
            variants={button}
            className={className}>
          {children}
        </motion.button>
    </motion.div>
  )
}

export default Button