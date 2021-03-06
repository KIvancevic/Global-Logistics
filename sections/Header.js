import { useState, useEffect } from 'react';
import Logo from '../components/Logo'
import UserDarkMode from '../components/UseDarkMode';
import { MenuButton } from '../components/BurgerMenu';
import { motion } from 'framer-motion';
import useScrollListener from '../components/ScrollListener';

const Header = () => {
  const [colorTheme, setTheme] = UserDarkMode();
  const [isOpen, setOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true)
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      setIsVisible(false);

      else { setIsVisible(true)};

  }, [scroll.y, scroll.lastY]);


  return (
    <motion.header 
      className={"fixed w-screen border-opacity-25 dark:border-opacity-25 border-b border-blue-300 dark:border-blue-300 backdrop-filter backdrop-blur-sm backdrop-contrast-200  bg-footerDark dark:bg-footerDark z-50 " 
      + (!isVisible ? "headerClosed" : "headerTransition")}
      >
      <div className="relative conatiner mx-auto px-4 sm:px-6 py-2 flex justify-between items-center h-full">
        {/* Logo */}
        <Logo />

        {colorTheme === "light" ? (
          <svg
            cursor='pointer'
            color="white"
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-7 sm:mr-[7.5em]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
            
          ) :
          (
          <svg
            cursor='pointer'
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-7 sm:mr-[7.5em]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          )}
          <div>
           <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              setOpenTracker={setOpen}
              strokeWidth="4"
              color="#93c5fd80"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              width="24"
              height="24"
            />
          </div>
      </div>
    </motion.header>
  );
};

export default Header;
