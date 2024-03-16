import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavElements from './NavElements';

type Props = {
  isOpen?: boolean;
  toggleOpen: () => void;
};

const MobileNav = ({ isOpen, toggleOpen }: Props) => {
  return (
    <motion.nav
      className={`${
        !isOpen && 'pointer-events-none'
      } block md:hidden absolute inset-y-0 left-0 w-full`}
    >
      <AnimatePresence>
        {isOpen && React.cloneElement(<NavElements />, { toggleOpen: toggleOpen })}
      </AnimatePresence>
    </motion.nav>
  );
};

export default MobileNav;
