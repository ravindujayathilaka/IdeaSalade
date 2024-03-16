import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BiSearch } from 'react-icons/bi';
import { Input } from '../../../ui/input';
import Container from '../../../layouts/Container';

interface Props {
  width: number;
}

const SearchMenuElements = ({ width }: Props) => {
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
        className='absolute inset-y-0 right-0 w-full bg-white z-30'
        variants={userMenuSidebar(width)}
      />
      <Container className={`absolute top-24 z-40`}>
        <motion.ul
          className={`flex flex-col items-center space-y-3`}
          initial='closed'
          animate='open'
          exit='closed'
          variants={listVariant}
        >
          <motion.h2
            className='font-bold font-heading text-xl text-left w-full mb-6'
            variants={menuItemVariant}
          >
            Search
          </motion.h2>

          <motion.div
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='relative flex items-center bg-white'
          >
            <Input placeholder='Colombo news' className='w-full outline-none pl-8 pr-32' />
            <BiSearch className='absolute left-3 text-grey-base top-1/2 transform -translate-y-1/2' />
          </motion.div>
        </motion.ul>
      </Container>
    </div>
  );
};

const listVariant = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const menuItemVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const userMenuSidebar = (width: number) => ({
  open: {
    clipPath: `circle(2200px at ${width - 32}px 36px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: `circle(20px at ${width - 32}px 36px)`,
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
});

export default SearchMenuElements;
