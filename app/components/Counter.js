import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const AnimatedCounter = ({ target, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const spring = useSpring(count, {
  stiffness: 100,
  damping: 20, // controls bounce
});

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(target);
    }
  }, [isInView, target, count]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [spring]);

  return (
    <motion.h3
      ref={ref}
      className="gradient-text lg:text-[60px] text-[35px] font-medium"
      style={{ fontFamily: "BodoniBook" }}
    >
      {display}{suffix}+ 
    </motion.h3>
  );
};
