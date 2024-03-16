'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import brandLogo from '../../../public/images/ideasalad.jpg';
import { Toaster } from '../../components/ui/toaster';
import useUserStore from '../../store/auth-store';
import { inter } from '../../utils/font-utils';
import '../../styles/globals.css';
import Favicon from '../../../public/images/favicon.ico';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const router = useRouter();
    const { checkAuth } = useUserStore();

    useEffect(() => {
        const checkAuthentication = async () => {
            if (await checkAuth()) {
                // Sends JWT token to validate it
                router.push('/');
            }
        };

        checkAuthentication();
    }, [router, checkAuth]);

    return (
        <>
            <link rel='icon' href={Favicon.src} />
            <html lang='en'>
                <body className={inter.className} suppressHydrationWarning={true}>
                    <main>
                        <Toaster />
                        <div className='grid lg:grid-cols-2 h-screen'>
                            <div className='bg-primary-darker hidden lg:flex justify-center items-center min-h-screen'>
                                <Image
                                    onClick={() => router.push('/')}
                                    src={brandLogo}
                                    alt='logo'
                                    className='w-60 h-60 cursor-pointer'
                                />
                            </div>

                            <div className='flex justify-center flex-wrap lg:items-center lg:flex-nowrap lg:min-h-screen font-main'>
                                <div className='w-full mt-5 flex lg:hidden justify-center items-center'>
                                    <Image
                                        onClick={() => router.push('/')}
                                        src={brandLogo}
                                        alt='logo'
                                        className='w-20 h-20 sm:w-40 sm:h-40 cursor-pointer'
                                    />
                                </div>

                                {children}
                            </div>
                        </div>
                    </main>
                </body>
            </html>
        </>
    );
};

export default Layout;
