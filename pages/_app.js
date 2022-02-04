import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import { AnimatePresence } from 'framer-motion'
import Layout from '../sections/Layout';

function MyApp({ Component, pageProps }) {
  return (
          <AnimatePresence
            exitBeforeEnter
            
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AnimatePresence>
  )
}

export default MyApp
