import { AnimatePresence, motion } from 'framer-motion';
import useDimensions from '../../../../hooks/useDimensions';
import { useRef } from 'react';
import SearchMenuElements from './SearchMenuElements';

type Props = {
  isSearchMenuOpen: boolean;
};

const SearchMenu = ({ isSearchMenuOpen }: Props) => {
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);

  return (
    <motion.nav
      className={`${
        !isSearchMenuOpen && 'pointer-events-none'
      } block md:hidden absolute inset-y-0 left-0 w-full`}
      ref={containerRef}
    >
      <AnimatePresence>{isSearchMenuOpen && <SearchMenuElements width={width} />}</AnimatePresence>
    </motion.nav>
  );
};

export default SearchMenu;
