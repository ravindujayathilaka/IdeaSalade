'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, useCycle, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaSearch, FaUser, FaRegUser } from 'react-icons/fa';
import BrandLogo from '../../../../public/images/ideasalad.jpg';
import { menuItems } from '../../../lib/data';
import useUserStore from '../../../store/auth-store';
import Container from '../../layouts/Container';
import { Button } from '../../ui/button'; 


const MenuToggle = dynamic(() => import('./MobileNav/MenuToggle'), {
  ssr: false,
});

const UserMenu = dynamic(() => import('./UserMenu'), {
  ssr: false,
});

const SearchMenu = dynamic(() => import('./SearchMenu'), {
  ssr: false,
});

const MobileNav = dynamic(() => import('./MobileNav'), {
  ssr: false,
});

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isUserMenuOpen, toggleUserMenuOpen] = useCycle(false, true);
  const { user, checkAuth } = useUserStore();


  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <motion.header
        initial={false}
        animate={isOpen || isUserMenuOpen ? 'open' : 'closed'}
        variants={headerVariant}
        className={`w-full mb-0`}
      >
        <Container>
          <div className='relative flex justify-between items-start md:mb-6 z-50 md:pt-5 xl:-mt-5 lg:-mt-5 md:-mt-5'>
            <div className='z-50 hidden md:flex flex-col space-y-2 text-black pt-2'>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <div className='relative w-16 z-0 mr-0.5'>
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
                  <div className='flex flex-col ml-2 font-arboria_medium'>
                    <div className='text-sm'>Data Unveils Truths, We Illuminate Stories</div>
                    <div className='text-4xl tracking-wider'>ideasalad.lk</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:flex flex-col space-y-2 z-10 pt-2'>
              <div className='flex justify-end space-x-3'>
                {user ? (
                  <div className='flex justify-end space-x-3'>
                    <button className='flex group items-center justify-start space-x-2 font-button'>
                      <div className='flex flex-col items-center bg-grey-lighter group-hover:bg-primary px-4 rounded-md py-2'>
                        <p className='flex font-semibold group-hover:text-white text-black items-center lg:text-lg text-md font-button'>
                          <FaUser className='group-hover:text-white text-grey-base text-sm mr-2 p-[0.5 px]' />
                          {user.firstName} {user.lastName}
                        </p>
                      </div>
                    </button>
                  </div>
                ) : (
                  <Link href='/sign-in'>
                    <div className='ml-8 mt-2 flex items-center font-header font-medium cursor-pointer lg:text-lg text-md'>
                      <FaRegUser className='mr-1' /> Sign in
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className='flex justify-between font-header font-medium items-center'>
            <div className='hidden md:flex'>
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className='text-black hover:text-primary px-3 lg:text-lg text-md'
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </motion.header>

      <AnimatePresence>
        {!isUserMenuOpen && <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />}
      </AnimatePresence>

      <MobileNav isOpen={isOpen} toggleOpen={toggleOpen} />

      <UserMenu isUserMenuOpen={isUserMenuOpen} toggleUserMenuOpen={() => toggleUserMenuOpen()} />
    </>
  );
};

const headerVariant = {
  open: {
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    opacity: 1,
    transition: {
      delay: 0.8,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default Header;
