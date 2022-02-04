import { useState } from 'react';
import ContactUs from '../components/FormContactUs';
import { motion, AnimatePresence } from 'framer-motion';


const containerVariants ={
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.8
    }
  }
}

const FirstSection = () => {

  const [buttonContactUs, setButtonContactUs] = useState(false);
  const [showModal, setShowModal] = useState(false)

  return ( 
    <motion.section className=" sm:bg-fixed relative h-screen w-full 
                          bg-no-repeat bg-center bg-cover bg-sectionOneVolvoTruck flex flex-col 
                          justify-center items-center space-y-10 "
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                   
    >
          {/* Headlines */}
            <div className="space-y-4 mx-auto text-center">
              <h1 className="text-4xl sm:text-7xl font-bold capitalize text-gray-900 dark:text-gray-200">
                <span className="text-transparent text-footerDark ">
                  Global logistics US
                </span>
              </h1>
              <h2 className="text-2xl sm:text-2xl text-footerDark">
                <span>Transportation Company</span>
              </h2>
            </div>

          {/* CTA */}
          

          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="save-button"
          >
            <button
              type="button"
              onClick={() => setButtonContactUs(true)}
              className="transition duration-1000 ease-in-out bg-footerDark hover:bg-footerDarkOp1 
                        hover:text-blue-300 text-white px-6 py-3 rounded-md 
                        text-lg sm:text-xl font-semibold focus:outline-none focus:ring-4 
                        focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
              >
                Contact us
            </button>
          </motion.div> */}

            {/* <ContactUs 
              trigger={buttonContactUs} 
              setTrigger={setButtonContactUs}
            /> */}
      </motion.section>
  )
}

export default FirstSection;