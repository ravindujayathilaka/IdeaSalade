import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../../../layouts/Container';
import { useRouter } from 'next/navigation';

interface Props {
  toggleOpen: () => void;
  width: number;
}

const UserMenuElements = ({ toggleOpen, width }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const body = document.querySelector('body');
    body!.style.overflow = 'hidden';

    return () => {
      body!.style.overflow = 'auto';
    };
  }, []);

  const handleRoute = (path: string) => {
    router.push(path);
    toggleOpen();
  };

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
            className='font-bold font-heading text-4xl text-primary-darker text-center w-full mb-6'
            variants={menuItemVariant}
          >
            Menu
          </motion.h2>

          <motion.button
            onClick={() => handleRoute('/sign-in')}
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='font-body font-semibold text-lg focus:text-primary-dark text-primary-darker py-1.5 px-3 border-2 border-primary-darker rounded-full'
          >
            Sign In
          </motion.button>

          <motion.button
            onClick={() => handleRoute('/account')}
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='font-body font-semibold text-lg focus:text-primary-dark text-primary-darker py-1.5 px-3 border-2 border-primary-darker rounded-full'
          >
            Account
          </motion.button>
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

export default UserMenuElements;
