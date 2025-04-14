import { motion, AnimatePresence } from "framer-motion";

export default function Popup({ setIsPopupOpen }) {
  const handleEmailClick = () => {
    window.location.href = 'mailto:riturane@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918956245005';
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center" 
        style={{
          zIndex: 1000
        }}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="bg-card-color-light rounded-2xl w-96 px-8 py-6 flex flex-col relative shadow-2xl border border-blue-light border-opacity-20"
        >
          <button onClick={() => setIsPopupOpen(false)} className="absolute top-4 right-4 text-white hover:text-red-theme transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-red-theme text-2xl font-bold mb-2">Book A Rink</div>
          <div className="text-blue-light text-lg mb-6">Reach out to us!</div>
          
          <div className="flex flex-col space-y-4">
            <button 
              onClick={handlePhoneClick}
              className="flex items-center space-x-3 bg-card-color p-3 rounded-lg hover:bg-blue-medium transition-colors duration-200 cursor-pointer"
            >
              <span className="text-blue-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                </svg>
              </span>
              <span className="text-white">+91 89562 45005</span>
            </button>
            
            <button 
              onClick={handleEmailClick}
              className="flex items-center space-x-3 bg-card-color p-3 rounded-lg hover:bg-blue-medium transition-colors duration-200 cursor-pointer"
            >
              <span className="text-blue-light">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                </svg>
              </span>
              <span className="text-white">riturane@gmail.com</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
