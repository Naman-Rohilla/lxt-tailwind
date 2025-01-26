import { AnimatePresence, motion } from "framer-motion";

export default function Tracker({ theme = "red", index, isActive }) {
  return (
    <AnimatePresence>
      {isActive ? (
        <motion.span
          key={index}
          initial={{
            x: 0,
          }}
          animate={{
            x: 2,
          }}
          exit={{
            x: 0,
          }}
          className={`h-2 w-8 rounded-full bg-${theme}-500 ease-in`}
        ></motion.span>
      ) : (
        <motion.span
          key={index}
          className="h-2 w-2 rounded-full bg-transparent border border-gray-100 opacity-50"
        ></motion.span>
      )}
    </AnimatePresence>
  );
}
