import Layout from '../sections/Layout';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse';
import Highway from '../public/HighwayAZ.jpg'

export default function Home() {
  

  return (
    <>
     <div className="transition duration-1000 ease-in-out dark:bg-gray-900 bg-gray-200 z-10">
     <Layout>
    	
      {/* Hero section */}

      <section className="h-screen max-h-full max-w-full w-screen bg-no-repeat bg-center bg-cover bg-sectionOneVolvoTruck flex flex-col justify-center items-center space-y-10">
          {/* Headlines */}
            <div className="space-y-4 mx-auto text-center">
              <h1 className="text-4xl sm:text-7xl font-bold capitalize text-gray-900 dark:text-gray-200">
                <span>Global logistics</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-900 dark:text-gray-200">
                <span>Transportation Company</span>
              </h2>
            </div>

          {/* CTA */}

          <button 
            type="button"
            onClick={null}
            className="transition duration-1000 ease-in-out bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2
            border-blue-600 hover:border-blue-700 text-lg sm:text-xl
            focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
            >Contact us</button>
      </section>

      <section className="h-screen w-screen max-h-full max-w-full flex items-center">
        <div className="mx-auto text-center space-y-6 w-4/5">
          <Slide left>
          <h1 className="font-sans tracking-tight uppercase break-words text-5xl mdlg:text-6xl text-indigo-800 dark:text-gray-50">
            <span className="font-bold">Top </span> 
            logistics provider
          </h1>
          </Slide>
          <h1 className="font-sans font-semibold pl-3 
              tracking-special uppercase break-words 
              text-7xl mdlg:text-9xl dark:text-gray-50">
                bringing
          </h1>
          <Slide right>
          <h1 className="font-sans tracking-special2 uppercase break-words text-5xl mdlg:text-6xl dark:text-gray-50">
            <span className="font-bold">best </span> 
            transportation
          </h1>
          </Slide>
        </div>
      </section>

      <section className="h-3/5 pt-20 pb-20 w-screen max-h-full max-w-full flex flex-col flex-wrap items-center bg-gray-500 dark:bg-gray-700">
        
        <div className="my-auto w-3/5">
          <div className="my-auto flex justify-center flex-row flex-wrap gap-24">
            <div className="flex flex-col justify-between">
                <h2 className="text-blue-800 dark:text-blue-400 text-4xl uppercase subpixel-antialiased tracking-wide">Customers</h2>
                  <div className="text-gray-900 dark:text-gray-50 font-sans font-semibold  uppercase text-6xl pt-10 customers2:pt-10">
                    <p className="">We handle</p>
                    <p className="tracking-widest dark:text-gray-900 text-gray-50">logistics</p>
                    <p className="">with passion</p>
                    <p className="">and ease</p>
                  </div>
                <div className="flex flex-wrap pt-10 customers1:pt-0">
                  <button className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-gray-900
                                  hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50 
                                  text-gray-50 font-semibold text-2xl px-32 py-5 rounded-full">
                    Ship with us
                  </button>
                </div>
            </div>
            <div className="h-higway w-2 dark:bg-gray-900 bg-gray-200"/>
            <div className="pl-7 bg-no-repeat bg-center bg-cover bg-highway w-96 h-highway" />
          </div>
        <div className="flex flex-wrap justify-center gap-x-5 pt-20 text-gray-900 dark:text-gray-50 text-lg font-semibold text-center">
          <Slide left>    
            <div >
              <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
              <p className="w-48">Profound network of Tracked and Designeted carriers</p>
            </div>
            <div>
              <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
              <p className="w-48">Quick Onboarding</p>
            </div>
          </Slide>  
          <Fade bottom big>
            <div>
              <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
              <p className="w-48">Single Source Solution</p>
            </div>
          </Fade>
          <Slide right>
            <div>
              <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
              <p className="w-48">Strict On Time Delivery</p>
            </div>
            <div>
              <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
              <p className="w-48">Carefull Acceptance</p>
            </div>
            </Slide>
          </div>
        </div>
        
      </section>

      <section className="h-3/5 w-screen max-h-full max-w-full  flex flex-col pt-20 pb-20">
        <div className="w-3/5 flex flex-col justify-center mx-auto">
          <div className="flex-wrap flex justify-center sm:justify-end"> 
            <p className="pr-5 text-blue-800 dark:text-blue-400 text-4xl uppercase subpixel-antialiased tracking-wide">Services</p> 
            <div className="w-2 h-10 dark:bg-gray-200 bg-gray-900 "></div>
          </div>
          <div className="flex justify-center flex-wrap pt-10 py-10">
            <div className="">
              <h2 className="uppercase text-5xl text-center dark:text-gray-200">Daily shipments</h2>
              <h2 className="uppercase text-4xl text-center pr-44 sm:pr-0 md:pr-0 pt-1 xs:pr-2 dark:text-gray-200">Across USA</h2>
              <p className="pt-16 w-3/5 text-xl md:text-2xl mx-auto sm:mx-0 dark:text-gray-200 break-words">
                <span className="text-blue-800 dark:text-blue-400 font-medium inline-block"><Pulse>Global Logistics </Pulse></span>
                  	<span> is</span> a absolute, end-to-end transportation service provider. 
                    Vehicle or freight, LTL or FTL, we are able to support all modes 
                    of transportation across all industries.</p>
            </div>
          </div>
          <button className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-footerDark
                              hover:bg-gray-200 hover:text-blue-800 dark:text-gray-900 dark:hover:text-gray-50 
                              text-gray-50 font-semibold text-2xl px-10 py-5 rounded-full w-60 text-center mx-auto 
                              sm:mx-0 hover:border-blue-800 border-2 ">
                Services
              </button>
        </div>
      </section>

      <section className="h-3/5 w-screen max-h-full max-w-full  flex flex-col pt-20 pb-20 bg-gray-500 dark:bg-gray-700">
        <div className="w-2/4 flex flex-col justify-end mx-auto gap-24">
          <div className="flex-wrap flex justify-center sm:justify-end"> 
            <p className="pr-5 text-blue-800 dark:text-blue-400 text-4xl uppercase subpixel-antialiased tracking-wide">Carriers</p> 
            <div className="w-2 h-10 dark:bg-gray-200 bg-gray-900 "></div>
          </div>
          <div className="flex flex-wrap text-center justify-between gap-6 sm:text-left items-center sm:items-end">
          <div className="flex flex-col mx-auto 2xl:mx-0 w-96 h-auto text-gray-900 dark:text-gray-50 text-lg font-semibold text-center gap-16">
            <Slide left>
            <div className="flex flex-wrap gap-20">
              <div className="mx-auto">
                <div className="bg-truck bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                <p>One-to-One</p>
                <p>Support</p>
              </div>
              <div className="mx-auto">
                <div className="bg-truck bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                <p>Rapid Pay</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-20">
              <div className="mx-auto">
                <div className="bg-truck mx-auto bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                <p>Technology Platform</p>
              </div>
              <div className="mx-auto">
                <div className="bg-truck bg-no-repeat bg-center bg-cover w-32 h-32"></div>
                <p>Quick Load</p>
                <p>Matching</p>
              </div>
            </div>
            </Slide>
          </div>
            <div>
              <div className="mr-3 text-gray-900 dark:text-gray-50 font-semibold  uppercase text-6xl pt-10 customers2:pt-10">
                <Fade top>
                  <h1>Book loads,</h1>
                  <h1>Get paid faster</h1>
                </Fade>
              </div>
            <div className="pt-12 justify-center sm:justify-start flex flex-wrap">
              <div className="mr-0 sm:mr-5">
                <button className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-gray-900
                                hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50 
                                text-gray-50 font-semibold text-2xl px-10 py-5 w-60 mx-auto 
                                sm:mx-0 rounded-full">
                  Drive with us
                </button>
              </div>
              <div className="pt-5 carriers:pt-0">
                <button className="transition duration-700 ease-in-out bg-blue-800 dark:bg-blue-400 dark:hover:bg-gray-900
                                hover:bg-gray-50 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50 
                                text-gray-50 font-semibold text-2xl px-10 py-5 w-60 mx-auto 
                                sm:mx-0 rounded-full">
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

      <section className="h-screen w-screen max-h-full max-w-full flex items-center">
        
          <div className="mx-auto text-center  w-4/5 text-4xl ifyoulooking:text-6xl break-words font-sans tracking-tight uppercase font-bold  text-gray-900 dark:text-gray-50">
            <div className="mx-auto flex justify-center w-4/5">
              <div className=" bg-quoteUp bg-cover w-28 h-28"/>
            </div>
              <h1>
                If you love to get job done 
              </h1>
              <h1>
                safe, accurate and fast,
              </h1>
              <h1>
                then you are in the
              </h1>
              <h1>
                right place!
              </h1>
            <div className="pt-2 mx-auto flex justify-center w-4/5">
                <div className="bg-quoteDown bg-cover w-28 h-28"/>
            </div>  
          </div>
       
      </section>

      <section className="h-3/5 w-screen max-h-full max-w-full flex flex-col pt-20 pb-20 bg-gray-500 dark:bg-gray-700">
          <div className="flex-wrap flex justify-center"> 
            <p className="pr-5 text-blue-800 dark:text-blue-400 text-4xl uppercase subpixel-antialiased tracking-wide font-semibold">Why Global Logistics</p> 
            <div className="w-2 h-10 dark:bg-gray-200 bg-gray-900 "></div>
          </div>
      </section>

    </Layout>

     </div>
    </>
  );
}
