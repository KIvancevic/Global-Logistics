import Pulse from 'react-reveal/Pulse';

const ForthSection = () => {

  return (
    <section className="h-3/5 w-full flex flex-col pt-20 pb-20">
        <div className="w-3/5 flex flex-col justify-center mx-auto">
          <div className="flex-wrap flex justify-center sm:justify-end"> 
            <p className="ml-2 text-blue-800 dark:text-blue-400 text-3xl sm:text-4xl uppercase 
                          subpixel-antialiased tracking-wide">
              Services
            </p> 
            <div className="ml-2 w-2 h-10 dark:bg-gray-200 bg-gray-900 "/>
          </div>
          <div className="flex justify-center flex-wrap pt-10 py-10">
            <div className="">
              <h2 className="uppercase text-4xl sm:text-5xl text-center dark:text-gray-200">
                Daily shipments
              </h2>
              <h2 className="uppercase text-3xl sm:text-4xl text-center pr-44 sm:pr-0 
                             md:pr-0 pt-1 xs:pr-2 dark:text-gray-200">
                Across USA
              </h2>
              <p className="pt-16 w-4/5 sm:3/5 text-center sm:text-left text-xl md:text-2xl 
                            mx-auto sm:mx-0 dark:text-gray-200 break-words">
                <span className="text-blue-800 dark:text-blue-400 font-medium inline-block">
                  <Pulse>Global Logistics US </Pulse>
                </span>
                       <span> </span> text</p>
                  	{/* <span> is</span> a absolute, end-to-end transportation service provider. 
                    Vehicle or freight, LTL or FTL, we are able to support all modes 
                    of transportation across all industries.</p> */}
            </div>
          </div>
          <button className="transition duration-700 ease-in-out bg-gray-900 dark:bg-gray-50 dark:hover:bg-footerDark
                              hover:bg-gray-200 hover:text-blue-800 dark:text-gray-900 dark:hover:text-gray-50 
                              text-gray-50 font-semibold text-2xl py-2 sm:px-10 sm:py-5 rounded-full w-60 text-center mx-auto 
                              sm:mx-0 hover:border-blue-800 border-2 ">
            Services
          </button>
        </div>
      </section>
  )
}

export default ForthSection;