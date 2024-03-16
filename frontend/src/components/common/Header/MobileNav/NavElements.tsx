import { motion } from 'framer-motion';
import type { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import Navigation from './Navigation';

interface NavElementsProps {
  toggleOpen?: () => void;
}

const NavElements: NextComponentType<NextPageContext, NavElementsProps> = ({
  toggleOpen,
}: NavElementsProps) => {
  useEffect(() => {
    const body = document.querySelector('body');
    body!.style.overflow = 'hidden';

    return () => {
      body!.style.overflow = 'auto';
    };
  }, []);

  return (
    <div>
      <motion.div
        initial='closed'
        animate='open'
        exit='closed'
        className='absolute inset-y-0 left-0 w-full bg-white z-30'
        variants={sidebar}
      />
      <Navigation toggleOpen={toggleOpen} />
    </div>
  );
};

const sidebar = {
  open: {
    clipPath: `circle(2200px at 32px 36px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0px at 32px 36px)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default NavElements;
