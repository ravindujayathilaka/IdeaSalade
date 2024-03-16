import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../../../layouts/Container';
import BrandLogo from '../../../../../public/images/ideasalad.jpg';
import { motion } from 'framer-motion';
import { menuItems } from '../../../../lib/data';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

interface MenuItem {
  text: string;
}

type Props = { isOpen?: boolean; toggleOpen: any };

const Navigation = ({ toggleOpen }: Props) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClickMenuItem = (item: MenuItem) => {
    setSelectedItem(item);
    toggleOpen();
  };

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Container className={`absolute top-[12vh] z-40 overflow-y-scroll max-h-[88vh]`}>
      <motion.ul
        className={`flex flex-wrap`}
        initial='closed'
        animate='open'
        exit='closed'
        variants={navigationVariant}
      >
        <motion.li
          variants={menuItemVariant}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='relative w-10 z-0 mr-0.5'>
                <Link href='/'>
                  <Image
                    className='z-0'
                    src={BrandLogo}
                    alt='brand logo'
                    layout='intrinsic'
                    priority
                    quality={60}
                  />
                </Link>
              </div>
              <div className='flex flex-col ml-1 font-arboria_medium'>
                <div className='text-xs mt-1'>SRI LANKA&rsquo;S #1 NEWS SOURCE</div>
                <div className='text-xl tracking-wider'>adaderana.lk</div>
              </div>
            </div>
            <div
              className='border p-1 rounded-lg cursor-pointer shadow-sm absolute top-2 right-4'
              onClick={toggleTheme}
            >
              {isDarkMode ? <FaRegMoon className='h-4 w-4' /> : <FiSun className='h-4 w-4' />}
            </div>
          </div>
        </motion.li>
      </motion.ul>
      <motion.ul
        className='flex flex-col'
        initial='closed'
        animate='open'
        exit='closed'
        variants={navigationVariant}
      >
        <motion.h2
          className='font-heading text-xs text-grey-base hover:text-primary-darker w-full mb-2 mt-6'
          variants={menuItemVariant}
        >
          Menu
        </motion.h2>
        {menuItems.map((item, i) => (
          <motion.li
            className={`py-1.5 px-10 text-black capitalize mb-3 text-sm ${
              selectedItem === item ? 'bg-grey-lightest' : ''
            }`}
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={i}
            onClick={() => handleClickMenuItem(item)}
          >
            {item.text}
          </motion.li>
        ))}

        <div className='flex mx-auto font-medium text-sm'>
          <motion.li
            className='py-1.5 flex text-black'
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              toggleOpen();
            }}
          >
            සිංහල
          </motion.li>
          <motion.div
            className='flex items-center mx-2'
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='h-8 w-0.5 bg-gray-300'></span>
          </motion.div>
          <motion.li
            className='py-1.5 flex text-black capitalize'
            variants={menuItemVariant}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              toggleOpen();
            }}
          >
            தமிழ்
          </motion.li>
        </div>
      </motion.ul>
    </Container>
  );
};

const navigationVariant = {
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

export default Navigation;
