import React from 'react'
import { onClickType } from '@/app/hook/type';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image, { StaticImageData } from 'next/image';
import project1 from '@/app/assets/project4.jpg'
import project2 from '@/app/assets/project2.jpg'
import project3 from '@/app/assets/project5.jpeg'
import project4 from '@/app/assets/project7.jpg'
import project5 from '@/app/assets/project8.jpeg'

type Props = {
  image: any;
}

const images:Array<Props> = [
  {
    image: project1
  },
  {
    image: project2
  },
  {
    image: project3
  },
  {
    image: project4
  },
  {
    image: project5
  },
]

type className = {
  className:string;
}

// leftarrow
const PrevArrow: React.FC<onClickType> = ({ onClick }) => {
  return (
      <div
          className="slick-arrow slick-Prev prevarrow"
          onClick={onClick}>
      </div>);
};

//  for nextArrow
const NextArrow: React.FC<onClickType> = ({ onClick }) => {
  return (<div
      className="slick-arrow slick-Next nextarrow"
      onClick={onClick}></div>);
};


const ProjectCarousel = ({className}: className) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
};

  return (
    <div className='bg-transparent h-auto w-[100%] mt-12 shadow-lg'>
      <Slider className='w-[100%] h-[100%]' {...settings}>
        
          {
            images.map((image, i)=>(
                <div key={i} className=''>
                  <Image className='object-cover' src={image.image} alt='project'/>
                </div>
            ))
          }
      
        
      </Slider>
    </div>
  )
}

export default ProjectCarousel