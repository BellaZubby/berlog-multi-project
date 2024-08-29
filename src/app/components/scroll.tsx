"use client"
import { ArrowUpIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react'
ArrowUpIcon

type Props = {
    
}

const Scroll = ({}: Props) => {
    const [visible, setVisible] = useState(false);
    // to set visibility of the scroll element.
    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if(scrolled > 300) {
    //         setVisible(true)
    //     }
    //     else if (scrolled <= 300) {
    //         setVisible(false)
    //     }
    // };
    useEffect(
        () => {
          const handleScroll = () => {
            if (window.scrollY > 300) {
              setVisible(true);
            }
            if (window.scrollY <=300) setVisible(false);
          }
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []
      );

    // how it scrolls
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
  
    return (
    <div
        onClick={scrollToTop}
        className={visible ?'fixed z-[999] bottom-9 right-7 ssm:right-12 bg-secondary-300 p-3 rounded-lg cursor-pointer block':'hidden'}
    >
            <ArrowUpIcon 
            className='w-5 h-5 text-black inline'
            />
    </div>
  )
}

export default Scroll