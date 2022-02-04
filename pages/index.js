import React from 'react';
import FirstSection from '../sections/SOneContactUs';
import SecondSection from '../sections/STwoTopBringingBest';
import ThirdSection from '../sections/SThreeCustomers';
import ForthSection from '../sections/SForthServices';
import FifthSection from '../sections/SFifthCarriers';
import SixthSection from '../sections/SSixLoveUs';
import SeventhSection from '../sections/SSevenWhyGlobalLogisticsUS';


export default function Home() {


  return (
    <>
     <div className="transition duration-1000 ease-in-out dark:bg-gray-900 bg-gray-200">
      {/* Hero section */}

      <FirstSection />

      <SecondSection />

      <ThirdSection />
     
      <ForthSection />

      <FifthSection />

      <SixthSection />

      <SeventhSection />

     </div>
    </>
  );
}
