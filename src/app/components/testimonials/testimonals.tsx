import React from 'react'
import image1 from '@/app/assets/testimonalImg.jpg'
import image2 from '@/app/assets/testimonialImg2.jpg'
import image3 from '@/app/assets/testimonialImg3.jpg'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import "./testimonialSlick.css";
import "./testimonialTheme.css";

type Props = {
    review:string;
    image:any;
    name:string;
    occupation:string
}

const testimonalData:Array<Props> = [
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:image1,
        name: "John Doe",
        occupation: "Entrepreneur"
    },
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:image2,
        name: "Chukwudi Nathan",
        occupation: "Banker"
    },
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:image3,
        name: "Patricia Hassan",
        occupation: "Accountant"
    },
    {
        review: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Recusandae reiciendis porro voluptatem impedit, numquam voluptatibus repudiandae voluptate tempore fugit quos fuga exercitationem.",
        image:image1,
        name: "John Doe",
        occupation: "Entrepreneur"
    },

]

const Testimonals = ({}: Props) => {
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
            <p className=' text-[30px] sm:text-[35px] md:text-[45px]'>We appreciate our clients' feedbacks as it allows for growth, improvement and better service delivery.</p>
        </div>
        <div className='bg-transparent flex flex-col justify-center px-14 gap-5 py-10 sm:py-0'>
            <Slider {...settings}>
                {
                    testimonalData.map((testimonial, idx) => (
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