import React, { useEffect, useState } from 'react'
import { images} from './projectData'
import { slideInFromBottom } from '@/app/hook/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Paginated from './paginated'
import PaginationButton from './Btn'

type Props = {}

const Projects = (props: Props) => {
    const [imageData, setImageData] = useState(images)

    useEffect(() => {
        setImageData(imageData)
    }, [])

    const {nextPage, prevPage, paginatedData, currentPage} = Paginated(imageData, 6)
  return (
    <>
     <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}} 
    transition={{duration:0.5, delay:1.8}}
    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center mt-5 mb-10'
    >
        {
            paginatedData.map((image, idx) => (
                <motion.div 
                    variants={slideInFromBottom(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true}}
                    key={idx} 
                    className='text-primary-100 font-roboto relative my-12'>
                        <Image className=' w-[500px] h-[270px] object-cover' src={image.image} alt='images'/>
                       <div className='bg-white rounded-md w-[90%] mx-auto flex flex-col gap-4 px-3 py-6 h-auto absolute top-[80%] left-1/2 -translate-x-1/2 shadow-md'>
                            <p>{image.description}</p>
                            <p className='flex items-center gap-2'><span><image.icon/></span>{image.location}</p>
                       </div>
                    </motion.div>
            ))
        }
        </motion.div>
        <div className='flex items-center justify-center mb-14 gap-5'>
            <PaginationButton CTA='Previous' onClick={prevPage} disabled={currentPage === 1 && true}/>
            <PaginationButton CTA='Next' onClick={nextPage} disabled={currentPage === 2 && true}/>
        </div>
    </>
   
  )
}

export default Projects