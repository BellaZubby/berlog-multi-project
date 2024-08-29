import React from 'react'
import SubHeading from './subheading'
import Image, { StaticImageData } from 'next/image'
import image1 from '@/app/assets/residential.jpg'
import image2 from'@/app/assets/renovation.jpg'
import image3 from'@/app/assets/consultancy.jpg'
import image4 from '@/app/assets/designing.jpg'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from './button'
import { slideInFromBottom } from '../hook/motion'
type Props = {

}

const MobileExpertise = (props: Props) => {
  return (
    <div className='py-20 bg-gradient-primary-100 font-roboto md:hidden'>
        <SubHeading className=''>
            Our Expertise
       </SubHeading>
       <div className='mt-20 grid grid-cols-1 ssm:grid-cols-2 gap-7 px-3'>
       <motion.div 
        // className='mt-16 relative'
        initial={{y:100, opacity:0}}
        whileInView={{y:0, opacity:1}}
        viewport={{once:true}}
        transition={{duration:0.5}}
       className='relative'>
                <Image src={image1} alt='residential' className='mx-auto'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
              initial={{rotateY:0}}
              whileInView={{rotateY:360}}
              transition={{duration:1, delay:0.2}}
              viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Building Construction</motion.h6>
              <motion.p
               initial={{opacity:0}}
               whileInView={{opacity:1}}
               viewport={{once:true}}
               transition={{duration:0.5, delay:1}}
                className='text-[16px] ssm:text-lg mb-5 tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
        <motion.div
        //  variants={slideInFromBottom(1.4)} 
         initial={{y:4, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5, delay:1.3}}
         className='md:pl-0 pl-7'
        >
           <Link href={"/building"} className=''>
            <Button className='font-roboto'>
              Learn more
            </Button>
            </Link>
        </motion.div>
                
          </div>
             
         </div>
            </motion.div>
            {/* second */}
            <motion.div 
            //  className='mt-16 relative'
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image2} alt='residential' className='mx-auto'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}} 
              className='text-xl xs:text-2xl mb-5 font-bold'>Renovation</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                 className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
                 <motion.div
        //  variants={slideInFromBottom(1.4)} 
         initial={{y:4, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5, delay:1.3}}
         className='md:pl-0 pl-7'
        >
           <Link href={"/renovation"} className=''>
            <Button className='font-roboto'>
              Learn more
            </Button>
            </Link>
        </motion.div>
          </div>
             
         </div>
            </motion.div>
            {/* third */}
            <motion.div 
            //  className='mt-16 relative'
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image4} alt='residential' className='mx-auto'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Designing</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                 className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
                 <motion.div
        //  variants={slideInFromBottom(1.4)} 
         initial={{y:4, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5, delay:1.3}}
         className='md:pl-0 pl-7'
        >
           <Link href={"/designing"} className=''>
            <Button className='font-roboto'>
              Learn more
            </Button>
            </Link>
        </motion.div>
          </div>
             
         </div>
            </motion.div>
            {/* fourth */}
            <motion.div 
            //  className='mt-16 relative'
             initial={{y:100, opacity:0}}
             whileInView={{y:0, opacity:1}}
             viewport={{once:true}}
             transition={{duration:0.5}}
            className='relative'>
                <Image src={image3} alt='residential' className='mx-auto'/>
              <div className=' text-[#F1F1F1] flex flex-col items-center justify-center bg-black/50 inset-0 absolute mx-auto'>
               <div className='text-center'>
              <motion.h6 
               initial={{rotateY:0}}
               whileInView={{rotateY:360}}
               transition={{duration:1, delay:0.2}}
               viewport={{once:true}}
              className='text-xl xs:text-2xl mb-5 font-bold'>Consultancy</motion.h6>
              <motion.p
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5, delay:1}}
                className='text-[16px] mb-5 ssm:text-lg tracking-wide'
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Nam aperiam aut quia quos adipisci id.</motion.p>
                 <motion.div
        //  variants={slideInFromBottom(1.4)} 
         initial={{y:4, opacity:0}}
         whileInView={{y:0, opacity:1}}
         viewport={{once:true}}
         transition={{duration:0.5, delay:1.3}}
         className='md:pl-0 pl-7'
        >
           <Link href={"/consultancy"} className=''>
            <Button className='font-roboto'>
              Learn more
            </Button>
            </Link>
        </motion.div>
          </div>
             
         </div>
            </motion.div>
       </div>
      
    </div>
  )
}

export default MobileExpertise