import { AnimatePresence, motion } from 'framer-motion';
import useDimensions from '../../../../hooks/useDimensions';
import { useRef } from 'react';
import UserMenuElements from './UserMenuElements';

type Props = {
  isUserMenuOpen: boolean;
  toggleUserMenuOpen: any;
};

const UserMenu = ({ isUserMenuOpen, toggleUserMenuOpen }: Props) => {
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);

  return (
    <motion.nav
      className={`${
        !isUserMenuOpen && 'pointer-events-none'
      } block md:hidden absolute inset-y-0 left-0 w-full`}
      ref={containerRef}
    >
      <AnimatePresence>
        {isUserMenuOpen && <UserMenuElements toggleOpen={toggleUserMenuOpen} width={width} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default UserMenu;
