import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import { AnimatePresence } from 'framer-motion'
import Layout from '../sections/Layout';
import { motion } from 'framer-motion';
import router from 'next/router';

function MyApp({ Component, pageProps, router }) {
  return (
          <AnimatePresence
            exitBeforeEnter       
          >
            <Layout >
              <Component {...pageProps} key={router.route} />
            </Layout>
          </AnimatePresence>
  )
}

export default MyApp
