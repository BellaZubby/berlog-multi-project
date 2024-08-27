"use client"
import { animate, KeyframeOptions, useInView, useIsomorphicLayoutEffect } from 'framer-motion'
import React, { useRef } from 'react'

type Props = {
    from:number,
    to:number,
    animationOptions?: KeyframeOptions
}

const SliderCounter = ({from, to, animationOptions}: Props) => {
    const ref = useRef<HTMLSpanElement>(null);
    // to animate when in view
    const inView = useInView(ref,{once:true});
    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if (!element) return;

        if (!inView) return;

        // defining visual effects choice of users
        // if (window.matchMedia("(prefers.reduced.motion)").matches) {
        //     element.textContent = String(to);
        //     return;
        // }

        element.textContent = String(from);

        const controls = animate(from, to, {
            duration: 1.5,
            delay:0.5,
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
                // console.log("value: ", value);
                element.textContent = value.toFixed();
            }
        });

        return () => {
            controls.stop();
        }
    }, [ref, inView, from, to])
  return (
    <>
        <span 
        ref={ref}
        />
    </>
   
  )
}

export default SliderCounter