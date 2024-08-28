import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLongUpIcon} from'@heroicons/react/24/outline'
import Link from 'next/link'
import { slideInFromLeft, slideInFromBottom } from "../hook/motion";
import { catchPhraseType } from "../hook/data";


type dataType = {
  data:catchPhraseType[]
}

  const capitalizeWords = (sentence:string) => {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase()
  + word.slice(1)).join(' ');
  }

  // arrow rotate
const arrow ={
  initial: {
    rotate:0, 
    scale:1,
    transition: {
      duration: 0.3
    }
  },
  animate:{
    rotate:90, 
    scale:1.3,
    transition: {
      duration: 0.3
    }

  },
}
  
// image motion
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const DesktopHero = ({data}: dataType) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [currentState, setCurrentState] = useState(0)
  const sentence = "come home to quality!";
  const capitalizedSentence = capitalizeWords(sentence);

  //for writeup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevIndex) => (prevIndex +1) % data.length);
    },3000);
    return () => clearInterval(interval)
  }, []);

 
  return (
    <div className="h-screen w-full">
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 0.7, when: "beforeChildren" }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
            <div className="bg-bg-image w-full h-screen bg-cover bg-fixed bg-no-repeat bg-center">
            <div className="bg-white/40 inset-0 h-full w-full relative">
            <div className="absolute top-[48%] md:top-[58%] -translate-y-[48%] md:-translate-y-[70%] left-4 ssm:left-7 sm:left-10">
            <motion.div 
          initial={{opacity:0, y:0}}                   
          animate={{opacity:1, y:0}}
          transition={{duration:0.5, delay:1.5}}
          className='font-roboto text-transparent bg-clip-text bg-gradient-primary'>
          <h1 className='text-3xl ssm:text-5xl md:block sm:text-7xl font-bold'>{capitalizedSentence}</h1>
          </motion.div>
            <motion.div
            variants={slideInFromLeft(2.5)} 
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            className="fadeContainer mt-14">
             
              {
              data.map((phrase, idx) => (
                  <div key={idx} className={`fadeItem grid sm:grid-cols-2 grid-cols-1 ${idx===currentState ? "fadeItem-visible": ""}`}>
                    <p className="text-xl sm:text-[22px] tracking-wider leading-relaxed text-[#3d3d3c]">{phrase.catchPhrase}</p>
                  </div>
                ))
              }
          
          </motion.div>
              

       
              <motion.div
              variants={slideInFromBottom(2.8)} 
              initial="hidden"
              animate="visible"
              className='mt-44 ssm:mt-40 sm:mt-44'
              >
                <Link href={"/aboutus"}>
                <motion.button
                initial="initial"
                animate="initial"
                whileHover="animate"
                className='hero-btn font-medium flex items-center gap-1 hover:gap-2 bg-gradient-secondary justify-center px-10 py-3 md:px-12 md:py-4'>
            <motion.span className='text-gray-100 font-medium text-sm ssm:text-lg font-roboto'>Learn More</motion.span>
            <motion.span variants={arrow} className='text-primary-100'><ArrowLongUpIcon className='w-4 h-4 ssm:w-6 md:h-6 text-black'/></motion.span>
         </motion.button> 
                </Link>
              
              </motion.div>
            </div>
           
            </div>

           {/* close */}
         
          </div>

          
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DesktopHero;
