import React from 'react'
import berlogLogo from '@/app/assets/berlogBg.png'
import Image from 'next/image'
import Link from 'next/link'
import { FooterDetailType, Socials } from '../hook/data'

interface DataType {
    data: FooterDetailType[];
    dataSocial: Socials[]

}
    

const Footer:React.FC<DataType>= ({data, dataSocial}) => {
  return (
    <div className='bg-black/20 mt-20 sm:pt-16 pt-12'>
        <div className='grid sm:grid-cols-6 grid-cols-1 px-6 gap-6 sm:gap-0'>
            <Image className='w-32 sm:w-40 object-cover col-span-2' src={berlogLogo} alt='berlog-logo'/>
            <div className='col-span-2'>
                <h6 className='text-xl sm:text-2xl font-bold text-[#525150]'>Contact</h6>
                {
                    data.map((contact, idx) => (
                        <div key={idx}>
                            <p className='flex items-center gap-3 mt-4 sm:mt-6 text-[#525150] text-sm sm:text-[16px]'>
                                <span className='text-secondary-300'><contact.icon/></span>
                                {contact.title}
                            </p>
                        </div>
                    ))
                }
                
            </div>
            <div className='col-span-1'>
                <h6  className='text-xl sm:text-2xl font-bold text-[#525150]'>Join us</h6>
                <div className='flex items-center gap-5'>
                    {
                        dataSocial.map((social, idx) => (
                            <div key={idx} className='border-2 border-secondary-300 rounded-full p-2 sm:mt-6 mt-4 '>
                                 <Link href={social.href} className='text-[#525150]'>
                                <social.icon/>
                            </Link>
                            </div>
                           
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='flex items-center relative'>
        <div className='bg-black/40 py-5 w-[70%] clip mt-16 text-white hidden md:block '>
            <p className='text-[15px] ml-4'>Copyright © 2024 All rights reserved <span className='text-secondary-300'>Berlog Multi Project Ltd</span></p>
        </div>
        <div className='bg-black/40 py-4 w-full mt-16 text-white md:hidden text-center'>
            <p className='text-[10px] sm:text-sm'>Copyright © 2024 All rights reserved <span className='text-secondary-300'>Berlog Multi Project Ltd</span></p>
            <p className='text-[10px] sm:text-sm text-primary-100 font-bold md:hidden mt-1'>Powered by Bella</p>
        </div>
        <div className='absolute bottom-2 right-20 text-primary-100 text-sm font-bold hidden md:block'>Powered by Bella</div>
        </div>
        
    </div>
  )
}

export default Footer