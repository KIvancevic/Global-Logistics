import { motion } from 'framer-motion';

const Firsth1Variants ={
  hidden: {
    opacity: 0,
    x: '-100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1
    }
  },
}

const Secondh1Variants ={
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1
    }
  },
}


const SecondSection = () => {
  return (
    <section className="h-screen w-auto flex items-center overflow-x-hidden">
      <div className="mx-auto text-center space-y-6 w-4/5">
        {/* <Slide left> */}
          <motion.h1 
            className="font-sans tracking-tight uppercase break-words text-3xl 
                      mdlg:text-6xl  dark:text-gray-50"
            variants={Firsth1Variants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <span className="font-bold">Top </span> 
            <span className="text-3xl mdlg:text-6xl">logistics provider</span>
          </motion.h1>
        {/* </Slide> */}
        <h1 className="font-sans font-semibold pl-3 
            tracking-special uppercase break-words 
            text-5xl mdlg:text-9xl dark:text-gray-50">
              bringing
        </h1>
        {/* <Slide right> */}
        <motion.h1 
          className="font-sans tracking-special2 uppercase break-words text-5xl mdlg:text-6xl 
                    dark:text-gray-50"
          variants={Secondh1Variants}
          initial="hidden"
          animate="visible"
        >
          <span className="font-bold">best </span> 
          <span className="text-3xl mdlg:text-6xl">transportation</span>
        </motion.h1>
        {/* </Slide> */}
      </div>
    </section>
  )
}

export default SecondSection;
