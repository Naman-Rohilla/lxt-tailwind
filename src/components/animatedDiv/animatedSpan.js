import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedSpan({
  style,
  className,
  duration = 0.8,
  children,
  isMobile,
  isNext = false,
}) {
  return (
    <>
      {isMobile ? (
        <motion.span
          initial={{
            opacity: 0,
            x: isNext ? -10 : 10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: duration,
          }}
          style={style}
          className={className}
        >
          {children}
        </motion.span>
      ) : (
        <motion.span
          initial={{
            opacity: 0,
            x: isNext ? -200 : 200,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: duration,
          }}
          style={style}
          className={className}
        >
          {children}
        </motion.span>
      )}
    </>
  );
}
