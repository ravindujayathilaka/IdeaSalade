'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import * as z from 'zod';
import axiosInstance from '../../../axios/axiosInstance';
import { Button } from '../../../components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import { useToast } from '../../../hooks/use-toast';
import useUserStore from '../../../store/auth-store';

const formSchema = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

const SignIn = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });
    const [error, setError] = useState('');
    const { toast } = useToast();
    const router = useRouter();
    const searchParams = useSearchParams();

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

    useEffect(() => {
        const checkError = () => {
            const errorParam = searchParams.get('error');
            if (errorParam == 'accountWithEmailExists') {
                setError('Account with Email already Exists');
            }

            if (errorParam == '') {
                setError('');
            }
        };

        checkError();
    }, [searchParams]);

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axiosInstance.post('/auth/login', values); // Sets JWT token as a httpOnly cookie

            if (response.status == 201) {
                return router.push('/');
            }

            toast({
                title: 'Invalid Credentials',
                description: `Incorrect Email or Password`,
            });
            router.push('/sign-in');
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message;
            toast({
                title: 'Error!',
                description: `${errorMessage}, Please Try again.`,
            });
        }
    };

    return (
        <>
            <title>IdeaSalad | Sign In</title>
            <div className='relative rounded-lg w-full max-w-lg px-4 py-6'>
                <div className='relative z-0 text-center font-main'>
                    {error && <div className='font-bold text-error mb-10 text-center'>{error}</div>}
                    <div className='text-2xl sm:text-4xl font-bold mb-2'>Login to your account </div>
                    <div className='text-xs sm:text-sm mb-10 text-grey-base'>
                        Enter your email below to create your account
                    </div>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className='max-w-md w-full flex flex-col gap-4 mx-auto mb-4'
                    >
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>E-mail</FormLabel>
                                        <FormControl>
                                            <Input placeholder='testuser@gmail.com' type='email' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type='password' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                );
                            }}
                        />

                        <div className='flex flex-col justify-end flex-grow space-y-2 mt-4'>
                            <Button type='submit'>Sign In</Button>
                        </div>
                    </form>
                </Form>
                <div className='relative my-6'>
                    <hr />
                    <span className='absolute right-1/2 -top-3 translate-x-1/2 bg-white px-2 text-center text-grey-base text-sm'>
                        or
                    </span>
                </div>
                <div className='md:flex justify-center md:space-x-4'>
                    <a
                        className='flex justify-center space-x-2 mb-5 md:mb-0 items-center border rounded-lg p-2 w-full'
                        href={`${process.env.NEXT_PUBLIC_API_URL}auth/google`}
                    >
                        <FaGoogle />
                        <span className='text-black space-x-2'>Google</span>
                    </a>

                    <a
                        className='flex justify-center space-x-2 mb-5 md:mb-0 items-center border rounded-lg p-2 w-full'
                        href={`${process.env.NEXT_PUBLIC_API_URL}auth/facebook`}
                    >
                        <FaFacebook />
                        <span className='text-black space-x-2'>Facebook</span>
                    </a>
                </div>

                <div className='flex space-x-2 mt-7 justify-center'>
                    <p>Don&rsquo;t have an account?</p>
                    <Link href={`/sign-up`} className='font-semibold text-primary transition ease-in'>
                        Sign up
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SignIn;
