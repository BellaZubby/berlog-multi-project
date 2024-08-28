import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { Projects } from '@/app/hook/data'
import { motion } from 'framer-motion'
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from '../../hook/motion'
import Link from 'next/link'
import "./projectTheme.css";
import "./projectSlick.css"



interface DataType {
    data:Projects[]
}
export interface onClickType {
    onClick?(): (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

// for arrows
// leftarrow
const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
    return (
        <div
            className="slick-arrow slick-Prev"
            onClick={onClick}>
        </div>);
};

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
    return (<div
        className="slick-arrow slick-Next"
        onClick={onClick}></div>);
};

const DoneProjects = ({data}:DataType) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows:true,
        autoplay:true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
      };
  return (
    <div className='h-auto grid sm:grid-cols-5 grid-cols-1 sm:pt-20 sm:px-10 py-16 gap-12 sm:gap-0 bg-[#ebe5e5]/50'>
        
        <motion.div 
        variants={slideInFromLeft(0)}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true}}
        className='text-primary-100 col-span-2 sm:mt-14 md:mt-24 pl-7 sm:pl-0 '>
            <h4 className='font-bold text-sm tracking-widest text-primary-300'>OUR WORKS</h4>
            <p className='text-[30px] ssm:text-[35px] md:text-[45px]'>
                Explore some of our executed projects
            </p>
            <motion.button
       variants={slideInFromBottom(0.2)} 
       initial='hidden'
       whileInView='visible'
       viewport={{once:true}}
       transition={{duration:0.1}}
       className='hero-btn text-primary-50 bg-transparent  border-[2px] border-primary-300 px-8 py-2 mt-7 sm:block hidden'>
       <Link href={'/projects'}>View All</Link>
        </motion.button> 
        </motion.div>
        <motion.div 
         variants={slideInFromRight(0)}
         initial='hidden'
         whileInView='visible'
         viewport={{once:true}}
        className='col-span-3'>
           <Slider {...settings}>
                {
                    data.map((image, idx) => (
                        <div key={idx} className='w-full h-full  p-4 bg-[#ebe5e5]/50'>
                            <Image src={image.image} alt='image'/>
                        </div>
                    ))
                }
           </Slider>
           
        </motion.div>
        <motion.button
       variants={slideInFromBottom(0.2)} 
       initial='hidden'
       whileInView='visible'
       viewport={{once:true}}
       transition={{duration:0.2}}
       className='hero-btn text-primary-50 bg-transparent border-[2px] border-primary-300 px-8 py-2 sm:hidden ml-7 w-[65%] ssm:w-1/2'>
       <Link href={'/projects'}>View All</Link>
        </motion.button> 
        </div>

  )
}

export default DoneProjects
