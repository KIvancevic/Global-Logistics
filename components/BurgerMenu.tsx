import React from "react";
import { motion, Transition } from "framer-motion";

interface Props {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  transition?: Transition;
  lineProps?: any;
  width?: any;
  height?: any;
}

const MenuButton = ({
  isOpen = false,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  transition = null,
  lineProps = null,
  ...props
}: Props) => {

  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 2
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: -2
    }
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps
  };

  const variants = {
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      scale: 0.2,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.3, delayChildren: 0.4 }
    },
    closed: {
      transition: { staggerChildren: 0.5, staggerDirection: -1 }
    }
  };

  const MenuClassName = () => {
    if (isOpen) {
      return "menu is-active";
    } else {
      return "menu is-non-active";
    }
  };

  return (
    <div className="bg-index height-100vh">

    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={menuVariants}
      className={MenuClassName()}
    >
      <div className="menu-container justify-center">
        <div>
          <ul>
            <motion.li className="menu-item" variants={variants}>
              MenuItem1
            </motion.li>
            <motion.li className="menu-item" variants={variants}>
              MenuItem2
            </motion.li>
            <motion.li className="menu-item" variants={variants}>
              MenuItem3
            </motion.li>
            <motion.li className="menu-item" variants={variants}>
              MenuItem4
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>

    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      className={isOpen ? 'openedSvg' : 'closedSvg'}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
    </div>
  );
};

export { MenuButton };