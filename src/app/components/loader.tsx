import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import logo from '@/app/assets/berlogBg.png'
import Image from 'next/image';
import { PuffLoader } from 'react-spinners';

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='w-full h-screen fixed bg-[#f3f0f0] text-2xl sm:text-3xl md:text-4xl left-0 bottom-0 z-[999] flex flex-col items-center justify-center gap-2'>
    
     <Image src={logo} alt='logo' className='w-20 h-20 object-contain absolute'/>
    <ClipLoader
        loading={true}
        color='#075985'
        speedMultiplier={0.6}
        size={120}
        aria-label="Loading Spinner"
        className=''
      />
     
      {/* <h1 className='text-primary-100 font-bold'>BERLOG MULTI PROJECT</h1> */}
    </div>
  )
}

export default Loading