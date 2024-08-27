import React from 'react'
import SubHeading from './subheading'
import Image from 'next/image'
import image1 from '@/app/assets/residential.jpg'
import image2 from'@/app/assets/renovation.jpg'
import image3 from'@/app/assets/consultancy.jpg'
import image4 from '@/app/assets/designing.jpg'
import {motion} from 'framer-motion'
import Link from 'next/link'

type Props = {}

const ServiceHome = (props: Props) => {
  return (
    <div className='py-24 bg-gradient-primary-100'>
      <div>
      <SubHeading className=''>
            Our Expertise
       </SubHeading>
       <div className='w-[85%] mx-auto hidden md:block mt-20'>
         <motion.div 
         className='relative'
         initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
         >
            <Image src={image1} alt='residential' className='w-[420px] h-[300px] object-cover ml-[9rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[9rem] flex items-center justify-center'>
           
            <h6 className='text-3xl font-bold text-white'>Building Construction</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-2 justify-center items-center w-[420px] h-[200px] px-12 absolute left-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               <Link href={'/services/building'}>
               <button
                className='hero-btn text-white font-medium bg-primary-100 justify-center px-5 py-2'>Read More</button> 
               </Link>
            </div>
            </div>
           
         </motion.div>
         {/* second service */}
         <motion.div 
         className='mt-16 relative'
         initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
            transition={{duration:0.5}}
         >
            <Image src={image2} alt='renovation' className='w-[420px] h-[300px] object-cover ml-[31rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[31rem] flex items-center justify-center'>
           
            <h6 className='text-3xl font-bold text-white'>Renovation</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-2 justify-center items-center w-[420px] h-[200px] px-12 absolute right-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               <Link href={'/services/renovation'}>
               <button
                className='hero-btn text-white font-medium bg-primary-100 justify-center px-5 py-2'>Read More</button> 
               </Link>
            </div>
            </div>
        </motion.div>
        {/* third service */}
        <motion.div 
        className='mt-16 relative'
        initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
        >
            <Image src={image4} alt='designing' className='w-[420px] h-[300px] object-cover ml-[9rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[9rem] flex items-center justify-center'>
           
            <h6 className='text-3xl font-bold text-white'>Designing</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-2 justify-center items-center w-[420px] h-[200px] px-12 absolute left-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               <Link href={'/services/designing'}>
               <button
                className='hero-btn text-white font-medium bg-primary-100 justify-center px-5 py-2'>Read More</button> 
               </Link>
            </div>
            </div>
            </motion.div>
           {/* fourth service */}
           <motion.div 
           className='mt-16 relative'
           initial={{y:100, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5}}
           >
            <Image src={image3} alt='Consultancy' className='w-[420px] h-[300px] object-cover ml-[31rem]'/>
            <div className='absolute inset-0 bg-black/30 w-[420px] h-[300px] ml-[31rem] flex items-center justify-center'>
           
            <h6 className='text-3xl font-bold text-white'>Consultancy</h6>
            <div className='bg-transparent border-[12px] border-primary-100 text-center flex flex-col gap-3 items-center justify-center w-[420px] h-[200px] px-12 absolute right-[360px] top-1/2 -translate-y-1/2'>
               
               <p className='text-[#525150]'>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet voluptatum unde nisi dolores? Voluptas, nostrum.
               </p>
               <Link href={'/services/consultancy'}>
               <button
                className='hero-btn text-white font-medium bg-primary-100 justify-center px-5 py-2'>Read More</button> 
               </Link>
               
            </div>
            </div>
        </motion.div>
         </div>
      </div>
      
       </div>
    
           
  )
}

export default ServiceHome