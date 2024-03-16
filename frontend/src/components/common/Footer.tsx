import Container from '../layouts/Container';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import IdeaSalad from '../../../public/images/ideasalad.jpg';

const Footer = () => {
    return (
        <Container as='footer'>
            {/* Desktop Mode */}
            <div className='hidden md:block'>
                <div className='grid grid-cols-2 md:grid-cols-6 gap-4 lg:gap-6 py-4 px-1 border-y border-grey-light'>
                    <div className='col-span-2 flex flex-col justify-between'>
                        <div className='flex flex-col'>
                            <div className='flex items-center w-3/4'>
                                <div className='relative w-16 sm:w-48 md:w-48 lg:w-16 z-0 mr-0.5'>
                                    <Link href='/'>
                                        <Image
                                            className='z-0'
                                            src={IdeaSalad}
                                            alt='brand logo'
                                            layout='intrinsic'
                                            priority
                                            quality={60}
                                        />
                                    </Link>
                                </div>
                                <div className='flex flex-col ml-2 font-arboria_medium'>
                                    <div className='font-bold lg:text-sm text-[8px]'>
                                        Data Unveils Truths, <br />We Illuminate Stories
                                    </div>
                                    <div className='font-bold lg:text-3xl text-xl tracking-wider'>ideasalad.lk</div>
                                </div>
                            </div>

                            <p className='lg:max-w-xs text-sm text-grey-dark font-button mt-4 font-arboria_book text-justify'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet
                                accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper
                                amet adipiscing fermentum.
                            </p>
                        </div>
                        <div className='flex justify-start text-grey-dark mt-4'>
                            <FaXTwitter className='mr-5 text-md hover:text-primary-dark transition ease-in cursor-pointer' />
                            <FaFacebookF className='mr-5 text-md hover:text-primary-dark transition ease-in cursor-pointer' />
                            <FaInstagram className='text-md hover:text-primary-dark transition ease-in cursor-pointer' />
                        </div>
                    </div>
                    <div className='font-poppins col-span-2 md:col-span-1'>
                        <h2 className='mb-4 text-sm font-bold text-black tracking-wider uppercase'>
                            Categories
                        </h2>
                        <ul className='grid grid-cols-2 md:grid-cols-1 gap-6 text-grey-dark lg:text-sm text-xs font-body mt-6'>
                            <li>
                                <Link href='/breaking-news'>
                                    <div className='hover:text-primary-dark transition ease-in'>IWC</div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/hot-news'>
                                    <div className='hover:text-primary-dark transition ease-in'>Time Analysis </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/archive'>
                                    <div className='hover:text-primary-dark transition ease-in'>What If</div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/video-story'>
                                    <div className='hover:text-primary-dark transition ease-in'>News</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='font-poppins col-span-3 md:col-span-1 mt-12'>
                        {/* <ul className='grid grid-cols-2 md:grid-cols-1 gap-6 text-grey-dark lg:text-sm text-xs font-body'>
                            <li>
                                <Link href='/entertainments'>
                                    <div className='hover:text-primary-dark transition ease-in'>Entertainments </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/spotlight'>
                                    <div className='hover:text-primary-dark transition ease-in'>Spotlight </div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/home'>
                                    <div className='hover:text-primary-dark transition ease-in'>Home</div>
                                </Link>
                            </li>
                            <li>
                                <Link href='/youtube'>
                                    <div className='hover:text-primary-dark transition ease-in'>You Tube</div>
                                </Link>
                            </li>
                        </ul> */}
                    </div>

                    <div className='col-span-1 font-poppins ml-60'>
                        <ul className='grid grid-flow-row gap-4 font-body lg:text-sm text-xs mb-5 mt-2'>
                            <li className='flex flex-col'>
                                <div className='flex w-3/4 justify-center md:justify-start hover:text-primary-dark transition ease-in cursor-pointer'>
                                    <FiPhone className='mr-2.5 lg:text-2xl text-lg text-grey-base hover:text-primary-dark transition ease-in w-5' />
                                    <div className='flex flex-col lg:ml-1'>
                                        <div className='text-grey-base'>Tel</div>
                                        <div>555-555-5555</div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex flex-col'>
                                <div className='flex w-3/4 justify-center md:justify-start hover:text-primary-dark transition ease-in cursor-pointer'>
                                    <MdOutlineEmail className='mr-2.5 text-2xl text-grey-base hover:text-primary-dark transition ease-in w-5' />
                                    <div className='flex flex-col lg:ml-1'>
                                        <div className='text-grey-base'>Mail</div>
                                        <div>ideasalad@lk</div>
                                    </div>
                                </div>
                            </li>
                            <li className='flex flex-col'>
                                <div className='flex justify-center md:justify-start hover:text-primary-dark transition ease-in cursor-pointer'>
                                    <SlLocationPin className='mr-2.5 text-2xl text-grey-base hover:text-primary-dark transition ease-in w-5' />
                                    <div className='lg:ml-1'>
                                        <div className='text-grey-base'>Address</div>
                                        <div className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                            SLIIT Malabe Campus, 
                                            <br />
                                            New Kandy Rd
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='py-4 flex justify-between font-arboria_book text-grey-dark'>
                    <div className='col-span-2'>
                        <p className='font-medium text-sm text-left hover:text-primary-dark transition ease-in cursor-pointer'>
                            © 2024, IdeaSalad. All Rights Reserved
                        </p>
                    </div>
                    <div>
                        <p className='text-sm'>
                            <a
                                href='/about-us'
                                className='mr-4 hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                About us
                            </a>
                            <a
                                href='/contact-us'
                                className='mr-4 hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                Contact
                            </a>
                            <a
                                href='/privacy-policy'
                                className='mr-4 hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                Privacy Policy
                            </a>
                            <a
                                href='/terms-of-use'
                                className='hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                Terms of Use
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Mobile mode */}
            <div className='block md:hidden'>
                <hr className='w-full border-grey-light my-6' />
                <div className='flex flex-col items-center justify-center mb-4'>
                    <Link href='/'>
                        <Image
                            className='z-0'
                            src={IdeaSalad}
                            alt='brand logo'
                            layout='intrinsic'
                            priority
                            width={50}
                            height={50}
                            quality={60}
                        />
                    </Link>

                    <div className='text-xs mt-2 font-arboria_medium'>Data Unveils Truths, <br />We Illuminate Stories</div>
                    <div className='text-2xl tracking-wider font-arboria_medium mb-3'>adaderana.lk</div>
                    <p className='text-center text-xs font-arboria_book'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan
                        porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing
                        fermentum.
                    </p>
                    <div className='flex justify-start text-grey-dark mt-4 mb-8'>
                        <FaXTwitter className='mr-5 text-md hover:text-primary-dark transition ease-in cursor-pointer' />
                        <FaFacebookF className='mr-5 text-md hover:text-primary-dark transition ease-in cursor-pointer' />
                        <FaInstagram className='text-md hover:text-primary-dark transition ease-in cursor-pointer' />
                    </div>

                    <h2 className='mb-4 text-sm font-semibold text-black tracking-wider uppercase'>
                        Categories
                    </h2>
                    <div className='flex text-xs space-x-12 mb-8 font-poppins'>
                        <ul className='flex flex-wrap w-1/3 gap-2'>
                            <li className='w-full'>
                                <Link href='/breaking-news'>
                                    <div className='hover:text-primary-dark transition ease-in whitespace-nowrap'>
                                        Breaking News
                                    </div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/hot-news'>
                                    <div className='hover:text-primary-dark transition ease-in'>Hot News</div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/archive'>
                                    <div className='hover:text-primary-dark transition ease-in'>Archive</div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/video-story'>
                                    <div className='hover:text-primary-dark transition ease-in'>Video Story </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className='flex flex-wrap w-1/3 gap-2'>
                            <li className='w-full'>
                                <Link href='/picture-story'>
                                    <div className='hover:text-primary-dark transition ease-in'>Picture Story </div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/business'>
                                    <div className='hover:text-primary-dark transition ease-in'>Business </div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/technology'>
                                    <div className='hover:text-primary-dark transition ease-in'>Technology</div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/sport'>
                                    <div className='hover:text-primary-dark transition ease-in'>Sport </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className='flex flex-wrap w-1/3 gap-2'>
                            <li className='w-full'>
                                <Link href='/entertainments'>
                                    <div className='hover:text-primary-dark transition ease-in'>Entertainments </div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/spotlight'>
                                    <div className='hover:text-primary-dark transition ease-in'>Spotlight </div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/home'>
                                    <div className='hover:text-primary-dark transition ease-in'>Home</div>
                                </Link>
                            </li>
                            <li className='w-full'>
                                <Link href='/youtube'>
                                    <div className='hover:text-primary-dark transition ease-in'>You Tube</div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='font-poppins grid grid-cols-2 gap-8 font-body text-xs mb-5 mt-2'>
                        <div className='flex items-center hover:text-primary-dark transition ease-in cursor-pointer'>
                            <a href='tel:+94115200900' className='flex items-left'>
                                <FiPhone className='mr-2.5 text-xl text-grey-base hover:text-primary-dark transition ease-in' />
                                <div className='flex flex-col'>
                                    <div className='text-grey-base'>Tel</div>
                                    <div>555-555-5555</div>
                                </div>
                            </a>
                        </div>
                        <div className='flex items-left hover:text-primary-dark transition ease-in cursor-pointer'>
                            <MdOutlineEmail className='mr-2.5 text-xl text-grey-base hover:text-primary-dark transition ease-in' />
                            <div className='flex flex-col'>
                                <div className='text-grey-base'>Mail</div>
                                <div>derana@lk</div>
                            </div>
                        </div>

                        <div className='flex items-left hover:text-primary-dark transition ease-in cursor-pointer'>
                            <SlLocationPin className='mr-2.5 text-xl text-grey-base hover:text-primary-dark transition ease-in' />
                            <div>
                                <div className='text-grey-base'>Address</div>
                                <div className='overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                    320, T.B. Jaya Mw, <br /> Colombo 11
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='py-2 flex justify-between font-arboria_book text-grey-dark'>
                        <p className='text-xs'>
                            <a
                                href='/about-us'
                                className='mr-4 hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                About us
                            </a>
                            <a
                                href='/contact-us'
                                className='mr-4 hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                Contact
                            </a>
                            <a
                                href='/privacy-policy'
                                className='mr-4 hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                Privacy Policy
                            </a>
                            <a
                                href='/terms-of-use'
                                className='hover:text-primary-dark transition ease-in cursor-pointer'
                            >
                                Terms of Use
                            </a>
                        </p>
                    </div>
                    <hr className='w-full border-grey-light' />
                    <p className='font-medium text-xs text-left font-arboria_book text-grey-dark hover:text-primary-dark transition ease-in cursor-pointer mt-2'>
                        © 2024, Macro Labs. All Rights Reserved
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;
