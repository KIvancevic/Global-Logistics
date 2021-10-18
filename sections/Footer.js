
import { GlobeAltIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="py-6 h-60 bg-footerLight dark:bg-footerDark w-full">
      <div className="mx-auto my-auto flex flex-wrap justify-between w-3/5 h-36 items-end">
        <div className="flex gap-x-5 mx-auto md:mx-0">
          <button className="bg-facebook bg-no-repeat bg-center bg-cover w-7 h-7"/>
          <button className="bg-linkedin bg-no-repeat bg-center bg-cover w-7 h-7"/>
          <button className="bg-instagram bg-no-repeat bg-center bg-cover w-7 h-7"/>
        </div>
        <div className="text-center text-xs md:text-base text-gray-900 dark:text-gray-500 mx-auto sm:mx-0">
          <p>Copyrigth © {new Date().getFullYear()} Global Logistics LLC. All rights reserved. </p>
          <p>Powered by WeblaB</p>
        </div>
        <div className="mx-auto md:mx-0">
          <div className="flex flex-col items-center sm:items-end text-center text-xs sm:text-base text-gray-900 dark:text-gray-500">
            <GlobeAltIcon className="w-8 h-8 flex-shrink-0" />
            <span className="font-bold text-lg tracking-tight whitespace-nowrap">
                Global Logistics LLC
            </span>
            <p>7600 S JONES BLVD,</p>
              <p> LAS VEGAS, NV, 89139</p>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;
