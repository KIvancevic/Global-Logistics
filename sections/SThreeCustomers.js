import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'

const ThirdSection = () => {

  return (
    <section 
        className="h-3/5 pt-20 pb-20 w-full flex flex-col flex-wrap items-center bg-gray-500 
                  dark:bg-gray-700 overflow-x-hidden overflow-y-hidden"
    >

        <div className="my-auto w-3/5">
          <div className="my-auto flex justify-center flex-row flex-wrap gap-6 sm:gap-24">
            <div className="flex flex-col justify-between text-center sm:text-left">

              <div className="flex-wrap flex justify-center sm:justify-start">
                <h2 className="text-blue-800 dark:text-blue-400 text-3xl 
                                sm:text-4xl  uppercase subpixel-antialiased tracking-wide"
                >
                  Customers
                </h2>
                <div className="ml-2 w-2 h-10 sm:ml-0 sm:w-0 sm:h-10 dark:bg-gray-200 bg-gray-900"/>
              </div> 

              <div className="text-gray-900 dark:text-gray-50 font-sans font-semibold  
                              uppercase text-4xl sm:text-6xl pt-10 customers2:pt-10">
                <p className=""/>We handle
                <p className="tracking-widest dark:text-gray-900 text-gray-50"/>logistics
                <p className=""/>with passion
                <p className=""/>and ease
              </div>

              <div className="flex flex-wrap pt-10 customers1:pt-0">
                <button className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-gray-900
                        hover:bg-gray-200 hover:text-blue-800 dark:text-gray-900 dark:hover:text-gray-50 
                        text-gray-50 font-semibold text-2xl py-2 w-60 sm:py-5 rounded-full w-60 sm:w-full text-center mx-auto 
                        sm:mx-0 hover:border-blue-800 border-2 border-gray-900">
                  Ship with us
                </button>
              </div>

            </div>
              <div className="h-higway w-2 dark:bg-gray-900 bg-gray-200"/>
              <div className="rounded drop-shadow-5xl shadow-2xl saturate-100 filter brightness-150 
                              contrast-125  pl-7 bg-no-repeat bg-center bg-cover bg-highway w-96 h-highway"
              />
          </div>

          <div className="flex flex-wrap gap-y-20 justify-center gap-x-5 pt-20 text-gray-900 dark:text-gray-50 
                          text-lg font-semibold text-center">
            <Slide left>    
              <div>
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"/>
                  {/* <p className="w-48">Profound network of Tracked and Designeted carriers</p> */}
                  <p className="w-48">Text</p>
              </div>
              <div className="">
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"/>
                  {/* <p className="w-48">Quick Onboarding</p> */}
                  <p className="w-48">Text</p>
              </div>
            </Slide>  
            <Fade bottom big>
              <div className="">
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"/>
                {/* <p className="w-48">Single Source Solution</p> */}
                <p className="w-48">Text</p>
              </div>
            </Fade>
            <Slide right>
              <div className="">
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"/>
                  <p className="w-48"/>Strict On Time Delivery
                  <p className="w-48"/>Text
                </div>
              <div className="">
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"/>
                  {/* <p className="w-48">Carefull Acceptance</p> */}
                  <p className="w-48"/>Text
              </div>
            </Slide>
          </div>
        </div>
    </section>
  )
}

export default ThirdSection;