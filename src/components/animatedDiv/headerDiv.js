import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeaderDiv({
  className,
  style,
  children,
  autoSlide = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!autoSlide) return;

    const slider = ref.current;
    if (!slider) return;

    const scrollAmount = 1;
    const scrollInterval = 30;

    const autoScroll = () => {
      if (slider) {
        slider.scrollLeft += scrollAmount;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, scrollInterval);
    return () => clearInterval(interval);
  }, [autoSlide]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
