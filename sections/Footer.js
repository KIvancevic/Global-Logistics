
import { GlobeAltIcon } from '@heroicons/react/outline';

const Footer = () => {
  return (
    <footer className="py-6 h-48 bg-footerLight dark:bg-footerDark w-full">
      <div className="mx-auto my-auto flex flex-wrap justify-between w-3/5 h-36 items-center">
        <div className="flex gap-x-5">
          <button className="bg-facebook bg-no-repeat bg-center bg-cover w-7 h-7"/>
          <button className="bg-linkedin bg-no-repeat bg-center bg-cover w-7 h-7"/>
          <button className="bg-instagram bg-no-repeat bg-center bg-cover w-7 h-7"/>
        </div>
        <div className="">
          <p className="text-center text-gray-900 dark:text-gray-500">Copyrigth © {new Date().getFullYear()} Global Logistics LLC. All rights reserved. </p>
          <p className="text-center text-gray-900 dark:text-gray-500">Powered by WeblaB</p>
        </div>
        <div>
          <div className="flex flex-col items-end">
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
