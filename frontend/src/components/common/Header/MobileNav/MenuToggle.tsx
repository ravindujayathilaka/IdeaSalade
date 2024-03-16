import { motion } from 'framer-motion';
import { MouseEventHandler } from 'react';

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='#000000'
    strokeLinecap='round'
    {...props}
  />
);

type Props = {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLButtonElement>;
};

const MenuToggle = ({ isOpen, toggle }: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='outline-none border-none cursor-pointer absolute top-[21px] left-6 w-10 h-10 rounded-full bg-transparent flex md:hidden justify-center items-center !z-40'
      onClick={toggle}
    >
      <svg width='16' height='16' viewBox='0 0 23 23'>
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </motion.button>
  );
};

export default MenuToggle;
