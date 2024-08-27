"use client"
import React, { useEffect, useState } from 'react'
import Banner from '../banner'
import Loading from '@/app/components/loader'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { slideInFromBottom, slideInFromRight } from '@/app/hook/motion'
import { images } from './projectData'
import Clipped from '@/app/components/clipped-asset'
import Projects from './projects'
import ClosingRemark from '@/app/components/closingRemark'


const Project = () => {
  const[loading, setLoading] = useState(true)
  // for loading
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 200)
  }, [images])

  if(loading) {
    return <Loading/>
  }
 if (!loading) {
  return (
    <div>
      <Banner>
        Projects
      </Banner>
      <motion.h5 
      variants={slideInFromRight(1.3)}
      initial='hidden'
      animate='visible'
      className='text-center text-xl md:2xl font-poppins text-transparent bg-clip-text bg-gradient-secondary-100 mt-14'>
        Gallery of our previous works
      </motion.h5>
      <Projects/>
      <Clipped/>
      <ClosingRemark/>
    </div>
  )
}
}

export default Project