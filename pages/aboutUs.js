import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return <motion.div
            exit={{ opaciy: 0}}
          >
            <p>About Us Page</p>
          </motion.div>;
};

export default AboutUs;
