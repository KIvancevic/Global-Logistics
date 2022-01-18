import ContactUs from '../components/FormContactUs';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { useState } from 'react';

const FifthSection = () => {

  const [buttonDriveWithUs, setButtonDriveWithUs] = useState(false);

  return (
    <section className="overflow-y-hidden relative h-3/5 w-full flex flex-col pt-20 pb-20 bg-gray-500 dark:bg-gray-700 overflow-x-hidden">
        <div className="w-3/5 flex flex-col justify-center sm:justify-end mx-auto gap-24">
          <div className="flex-wrap flex justify-center sm:justify-end"> 
            <p className="ml-2 text-blue-800 dark:text-blue-400 text-3xl sm:text-4xl uppercase subpixel-antialiased tracking-wide">
              Carriers
            </p> 
            <div className="ml-2 w-2 h-10 dark:bg-gray-200 bg-gray-900"/>
          </div>
          <div className="flex flex-wrap text-center justify-between gap-6 sm:text-left items-center sm:items-end">
          <div className="flex flex-col mx-auto 2xl:mx-0 w-96 h-auto text-gray-900 dark:text-gray-50 text-lg font-semibold text-center gap-16">
            <Slide left>
            <div className="flex flex-wrap gap-20">
              <div className="mx-auto">
                <div className="bg-truck bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                {/* <p>One-to-One</p>
                <p>Support</p> */}
                <p>text</p>
              </div>
              <div className="mx-auto">
                <div className="bg-truck bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                {/* <p>Rapid Pay</p> */}
                <p>text</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-20">
              <div className="mx-auto">
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                {/* <p>Technology Platform</p> */}
                <p>text</p>
              </div>
              <div className="mx-auto">
                <div className="bg-truck bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                {/* <p>Quick Load</p>
                <p>Matching</p> */}
                <p>text</p>
              </div>
            </div>
            </Slide>
          </div>
            {/* <ContactUs 
                trigger={buttonDriveWithUs} 
                setTrigger={setButtonDriveWithUs}
              /> */}
            <div className="ml-0">
              <div className="text-center text-gray-900 dark:text-gray-50 font-semibold
                              uppercase text-5xl sm:text-6xl pt-10 customers2:pt-10">
                <Fade top>
                  {/* <h1>Book loads,</h1>
                  <h1>Get paid faster</h1> */}
                  <h1>text</h1>
                </Fade>
              </div>
            <div className="pt-12 mx-auto flex flex-wrap">
              <div className="mr-0 sm:mr-5">
                <button 
                  
                  className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-gray-900
                            hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50 
                            text-gray-50 font-semibold text-2xl py-2 w-60 sm:py-5 w-56 sm:w-60 rounded-full">
                  <a href="mailto:globallogisticsus@global.com">Drive 4 us</a>
                  
                </button>
                
              </div>
              <div className="pt-5 carriers:pt-0">
                <button 
                  onClick={() => setButtonDriveWithUs(true)}
                  className="transition duration-700 ease-in-out bg-blue-800 dark:bg-blue-400 dark:hover:bg-gray-900
                                hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50 
                                text-gray-50 font-semibold text-2xl py-2 w-60 sm:py-5  w-56 sm:w-60  rounded-full">
                  Learn more
                </button>
              
              </div>
            </div>
            </div>
         
          </div>
        
        
          {/* <button className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-gray-900
                              hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50 
                              text-gray-50 font-semibold text-2xl px-10 py-5 w-60 text-center mx-auto 
                              sm:mx-0 rounded-full">
                Ship with us
              </button> */}
        </div>
      </section>
  )
}

export default FifthSection;