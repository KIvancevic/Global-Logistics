import { useState } from 'react';
import ContactUs from '../components/FormContactUs';

const FirstSection = () => {

  const [buttonContactUs, setButtonContactUs] = useState(false);

  return (
    <section className=" sm:bg-fixed relative h-screen w-full 
                          bg-no-repeat bg-center bg-cover bg-sectionOneVolvoTruck flex flex-col 
                          justify-center items-center space-y-10 ">
          {/* Headlines */}
            <div className="space-y-4 mx-auto text-center">
              <h1 className="text-4xl sm:text-7xl font-bold capitalize text-gray-900 dark:text-gray-200">
                <span class="text-transparent text-footerDark text-shadow-ContactUs">
                  Global logistics US
                </span>
              </h1>
              <h2 className="text-2xl sm:text-2xl text-footerDark text-shadow-ContactUs">
                <span>Transportation Company</span>
              </h2>
            </div>

          {/* CTA */}

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

            <ContactUs 
              trigger={buttonContactUs} 
              setTrigger={setButtonContactUs}
            />
      </section>
  )
}

export default FirstSection;