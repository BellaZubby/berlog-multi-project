"use client"
import React, { useEffect, useRef, useState } from 'react'
import ServiceHome from '@/app/components/serviceHome'
import useMediaQuery from '@/app/hook/useMediaQuery'
import MobileExpertise from '@/app/components/mobileExpertise'
import Facts from '@/app/components/facts'
import Loading from '../../components/loader'
import DesktopHero from '@/app/components/desktopHero'
import ParallaxFact from '@/app/components/parallaxFact'
import DoneProjects from '@/app/components/projects/doneProjects'
import Testimonals from '@/app/components/testimonials/testimonals'
import {catchPhraseList, doneProject, testimonialData, visionMission} from '@/app/hook/data'
import AboutHome from '@/app/components/aboutHome'





const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");
 
  // for loading
  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 900)
  }, [])

  if(loading) {
    return <Loading/>
  }

  if (!loading) {
  
  return (
    <div className='font-roboto'>
        <DesktopHero data={catchPhraseList}/>

        <AboutHome data={visionMission}/>
        {/* service section */}
        
        {
          aboveMediumScreen && <ServiceHome/>
        }
         {
          !aboveMediumScreen && <MobileExpertise/>
        } 
        <DoneProjects data={doneProject}/>
        <Facts/>
        <ParallaxFact/>
        <Testimonals data={testimonialData}/>
        
        
       
    </div>
  )
}
}

export default HomePage;