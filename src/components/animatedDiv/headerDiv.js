import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HeaderDiv({ className, style, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
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
