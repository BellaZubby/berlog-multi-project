import React from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import Slider from 'react-slick'
import "./testimonialSlick.css";
import "./testimonialTheme.css";
import { testimonialType } from '@/app/hook/data';

type dataType = {
    data: testimonialType[]
}

const Testimonals = ({data}:dataType) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false

    };
  return (
    <div>
        <div className='h-auto grid sm:grid-cols-2 grid-cols-1'>
        <div className='bg-primary-100 text-white sm:py-24 py-20 md:px-14 px-10'>
            <h4 className='font-bold text-sm tracking-widest'>READ TESTIMONIALS</h4>
            <p className=' text-[30px] sm:text-[35px] md:text-[45px]'>We appreciate our clients&apos; feedbacks as it allows for growth, improvement and better service delivery.</p>
        </div>
        <div className='bg-transparent flex flex-col justify-center px-14 gap-5 py-10 sm:py-0'>
            <Slider {...settings}>
                {
                    data.map((testimonial, idx) => (
                        <div key={idx} className=''>
                             <p className='md:w-[75%] text-left mx-auto tracking-wide text-[16px] leading-relaxed'>{testimonial.review}</p>
            <div className='flex items-center gap-8 mt-10'>
                <div className='relative'>
                    <Image src={testimonial.image} alt='testimonial' className='w-20 h-20 rounded-full object-cover'/>
                    <div className='bg-primary-100 w-8 h-8 rounded-full flex items-center justify-center absolute bottom-[-5px] left-14'><Quote className='text-white w-4 h-4'/></div>
                </div>
                <div>
                    <h6 className='font-bold'>{testimonial.name}</h6>
                    <h6 className='text-primary-100'>{testimonial.occupation}</h6>
                </div>
            </div>
                        </div>
                    ))
                }

            </Slider>
           
        </div>
        </div>
        
    </div>
  )
}

export default Testimonals