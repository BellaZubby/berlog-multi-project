import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
};

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedText = ({ text, el: Wrapper = "p", className }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word, idx) => (
          <span key={idx} className="inline-block">
            {word.split("").map((char, idx) => (
              <motion.span key={idx} className="inline-block" variants={defaultAnimation}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
