import React from 'react'
import berlogLogo from '@/app/assets/berlogBg.png'
import Image from 'next/image'
import { Phone, Mail, MapPin,Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

type Props = {
    icon:any;
    title:string;
}
type Socials = {
    icon:any
    href: string
}

const contactData:Array<Props>=[
    {
        icon: Phone,
        title:"+2347045789212"
    },
    {
        icon: Mail,
        title: "projects@berlog.ng"
    },
    {
        icon: MapPin,
        title: "Port Harcourt, Rivers State"
    }
]

const socialsData:Array<Socials>=[
    {
        icon:Facebook,
        href: '#'
    },
    {
        icon:Instagram,
        href: '#'
    },
    {
        icon:Twitter,
        href: '#'
    },
    {
        icon:Linkedin,
        href: '#'
    },

]

const Footer= (props: Props) => {
  return (
    <div className='bg-black/20 mt-20 sm:pt-16 pt-12'>
        <div className='grid sm:grid-cols-6 grid-cols-1 px-6 gap-6 sm:gap-0'>
            <Image className='w-32 sm:w-40 object-cover col-span-2' src={berlogLogo} alt='berlog-logo'/>
            <div className='col-span-2'>
                <h6 className='text-xl sm:text-2xl font-bold text-[#525150]'>Contact</h6>
                {
                    contactData.map((contact, idx) => (
                        <div key={idx}>
                            <p className='flex items-center gap-3 mt-4 sm:mt-6 text-[#525150] text-sm sm:text-[16px]'>
                                <span className='text-primary-300'><contact.icon/></span>
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
                        socialsData.map((social, idx) => (
                            <div key={idx} className='border-2 border-primary-300 rounded-full p-2 sm:mt-6 mt-4 '>
                                 <Link href={social.href} className='text-[#525150]'>
                                <social.icon/>
                            </Link>
                            </div>
                           
                        ))
                    }
                </div>
            </div>
        </div>
        <div className='bg-black/40 py-5 w-[70%] clip mt-16 text-white hidden md:block '>
            <p className='text-[15px] ml-4'>copyright © 2024 All rights reserved by <span className='text-primary-300'>Berlog Multi Project Ltd</span>💙</p>
        </div>
        <div className='bg-black/40 py-5 w-full mt-16 text-white md:hidden flex items-center justify-center'>
            <p className='text-[10px] sm:text-sm'>copyright © 2024 All rights reserved by <span className='text-primary-300'>Berlog Multi Project Ltd</span>💙</p>
        </div>
    </div>
  )
}

export default Footer