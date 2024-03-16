import { BiUser } from 'react-icons/bi';
import { FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

const UserMenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='outline-none border-none cursor-pointer w-8 h-8 rounded-full bg-transparent flex md:hidden justify-center items-center !z-40'
      onClick={toggle}
    >
      {isOpen ? <FiX className='text-xl' /> : <BiUser className='text-xl' />}
    </motion.button>
  );
};

export default UserMenuToggle;
