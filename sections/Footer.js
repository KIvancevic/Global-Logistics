
import { GlobeAltIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="py-6 h-4/5 xl:h-60 bg-footerLight dark:bg-footerDark w-full">
      <div className="mx-auto flex flex-col xl:flex-row flex-wrap justify-center xl:justify-between w-4/5 h-3/5 xl:h-52 items-center gap-y-12">
        <div className="flex gap-x-5 mx-auto md:mx-0 order-2 xl:order-none">
          <button className="bg-facebook bg-no-repeat bg-center bg-cover w-7 h-7"/>
          <button className="bg-linkedin bg-no-repeat bg-center bg-cover w-7 h-7"/>
          <button className="bg-instagram bg-no-repeat bg-center bg-cover w-7 h-7"/>
        </div>
        <div className="text-center text-xs md:text-base text-gray-900 dark:text-gray-500 mx-auto sm:mx-0 order-last xl:order-none">
          <p>Copyrigth © {new Date().getFullYear()} Global Logistics LLC. All rights reserved. </p>
          <p>Powered by WeblaB</p>
        </div>
        <div className="flex flex-col items-center sm:items-end text-center text-xs sm:text-base text-gray-900 dark:text-gray-500 order-first xl:order-none">
            <GlobeAltIcon className="w-8 h-8 flex-shrink-0" />
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">
                Global Logistics LLC
            </span>
            <div className="flex items-center uppercase">
              <h3 className="pr-2">Contact us</h3>
              <div className="w-1 h-6 dark:bg-gray-200 bg-gray-900"></div>
            </div>
              <p>7600 S JONES BLVD,</p>
              <p> LAS VEGAS, NV, 89139</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
