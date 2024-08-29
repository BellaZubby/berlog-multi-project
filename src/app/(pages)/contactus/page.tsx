"use client"
import React, { useEffect, useState } from 'react'
import Banner from '../banner'
import { Phone, Mail, MapPin, Globe, Send} from 'lucide-react'
import Link from 'next/link'
import {useForm} from 'react-hook-form';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/app/hook/motion'
import Loading from '@/app/components/loader'
motion

type contactTypes = {
  icon:any;
  title?:string;
  description:string;
  link?: string;
}

const contactData:Array<contactTypes>=[
  {
      icon: Phone,
      title:"+2347045789212",
      description: "Telephone"
  },
  {
      icon: Mail,
      title: "projects@berlog.ng",
      description: "Email"
  },
  {
      icon: MapPin,
      title: "Port Harcourt, Rivers State",
      description: "Location"
  },
  {
    icon: Globe,
    link: "https://www.berlogmultiproject.com",
    description: "Website"
},

]

const Contactpage = () => {
  const[loading, setLoading] = useState(true)
  const inputStyles = `mb-4 w-full bg-transparent px-5 py-3 placeholder-[#C2C2C2] placeholder:text-xs border border-[#C2C2C2]`
  const {
    register,
    trigger,
    formState: {errors}} = useForm();
  // creating the onSubmit function
  const onSubmit = async(e:any) => {
    const isValid = await trigger();
    if(!isValid) {
      e.preventDefault();
    }
  }
 
  // for loading
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 200)
  }, [])

  if(loading) {
    return <Loading/>
  }
 if (!loading) {
  return (
    <div className='bg-gradient overflow-x-hidden'>
      <Banner>
        Contact Us
      </Banner>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 md:gap-5 md:items-center md:justify-center pt-16 sm:pt-24 sm:px-10 px-7 overflow-x-hidden'>
        {/* contact info */}
        <motion.div
          variants={slideInFromLeft(0.7)}
          initial='hidden'
          whileInView='visible'
          viewport={{once:true}}
        >
            <h3 className='sm:text-3xl text-xl font-semibold text-primary-100'>Get in touch with us</h3>
            {
                    contactData.map((contact, idx) => (
                        <div key={idx}>
                            <div className='flex items-center sm:gap-10 gap-7 mt-4 sm:mt-6 text-[#525150] text-sm sm:text-[16px]'>
                                <span className='text-primary-300 bg-primary-100 w-11 h-11 sm:w-14 sm:h-14 flex items-center justify-center rounded-full'><contact.icon/></span>
                               <div className='flex flex-col gap-2'>
                                <p className='font-bold sm:text-xl text-lg'>{contact.description}</p>
                                <p>{contact.title}</p>
                                <Link href={'https://www.berlogmultiproject.com'}>{contact.link}</Link>
                               </div>
                                
                            </div>
                        </div>
                    ))
                }
                

        </motion.div>
        {/* contact form */}
        <motion.div 
        variants={slideInFromRight(0.7)}
        initial='hidden'
        whileInView='visible'
        viewport={{once:true, amount:0.2}}
        className='shadow-lg rounded-lg bg-[#F3F4F6] sm:px-12 sm:py-14 px-7 py-10'>
          <h2 className='sm:text-xl text-[15px] bg-gradient-secondary text-transparent bg-clip-text font-semibold'>HAVE QUESTIONS?</h2>
          <p className='sm:text-3xl text-xl text-[#525150] mt-5'>Send us a Message</p>
        <form
                            target="_blank"
                            action="https://formsubmit.co/def8d2055cfa3e74e8af3af38ff4f818"
                            onSubmit={onSubmit}
                            method="POST"
                            className='mt-10'
                        >

                            {/* name */}
                            <input
                                className={inputStyles}
                                type='text'
                                placeholder="Name"
                                {...register('name', {
                                    required: true,
                                    maxLength:100
                                })}
                            />
                            {errors.name && (
                                <p className="mt-[1px] text-sm text-red-500 mb-2">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is a 100 characters."}
                                </p>
                            )}
                            {/* email */}
                            <input          
                                className={inputStyles}
                                type='text'
                                placeholder="Email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-[1px] text-sm text-red-500 mb-2">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                rows={4}
                                cols={50}
                                placeholder="Message"
                                {...register('message', {
                                    required: true,
                                    maxLength:2000
                                })}
                            />
                            {errors.message && (
                                <p className="mt-[1px] text-sm text-red-500 mb-2">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is a 2000 characters."}
                                </p>
                            )}
                            <button
                                type="submit"
                                className='bg-primary-100 flex items-center justify-center w-[150px] h-[40px] sm:w-[200px] sm:h-[50px] rounded-md font-medium text-xs sm:text-lg 
                                outline-none hero-btn text-white border-gray-400 tracking-wider'
                            > 
                            <span className='flex items-center justify-center gap-3'>
                              <Send className='w-4 h-4 sm:w-6 sm:h-6'/>
                              SEND
                            </span>
                            </button>
                        </form>
        </motion.div>
      </div>
    </div>
  )
}
}

export default Contactpage