import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '../../../components/ui/card';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationPin,
  FaPhone,
  FaXTwitter,
} from 'react-icons/fa6';
import Container from '../../../components/layouts/Container';

const ContactUsPage = () => {
  return (
    <Container>
      <div className='mt-10'>
        <div className='flex items-center space-x-3 text-md overflow-hidden bg-primary w-full max-h-24 headingStyle'>
          <h1 className='mt-3 ml-20 mb-3 font-[DM Sans] text-[22px] font-bold text-white'>
            Contact Us
          </h1>
        </div>
        <div className='container max-w-7xl mx-auto flex mt-10 mb-10'>
          <div className='w-[700px] h-[795px] ml-[10] backgroundColor rounded-xl text-white'>
            <div className='mt-10 ml-10 mr-10 h-5/6'>
              <div>
                <p className='text-[26px] font-bold'>Contact Information</p>
                <p className='text-[18px]'>Say something to start a live chat!</p>
              </div>
              <div className='mt-32'>
                <div className='flex mt-10 mb-10'>
                  <FaPhone className='mr-2.5 text-xl text-white-base hover:text-primary-dark transition ease-in' />
                  <div className='ml-5 mt-[-5px]'>
                    <p>+94 115300700 (Tel)</p>
                    <p>+94 112680417 (Fax)</p>
                  </div>
                </div>
                <div className='flex mt-10 mb-10'>
                  <FaEnvelope className='mr-2.5 text-xl text-white-base hover:text-primary-dark transition ease-in' />
                  <div className='ml-5 mt-[-5px]'>
                    <p>
                      <span className='underline'>yusuf@derana.lk</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className='text-xs'>Web Editor (English)</span>
                    </p>
                    <p>
                      <span className='underline'>poornima@derana.lk</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className='text-xs'>Web Editor (Sinhala)</span>
                    </p>
                    <p>
                      <span className='underline'>bavan@derana.lk</span>{' '}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className='text-xs'>Web Editor (Tamil)</span>
                    </p>
                  </div>
                </div>
                <div className='flex mt-10 mb-10'>
                  <FaLocationPin className='mr-2.5 text-xl text-white-base hover:text-primary-dark transition ease-in' />
                  <div className='ml-5 mt-[-5px]'>
                    <p>
                      Derana Macro Entertainment (Pvt) Ltd
                      <br />
                      No. 320, T.B. Jayah Mawatha,
                      <br />
                      Colombo 10.
                      <br />
                      Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex'>
              <div className='h-10 w-10 rounded-3xl buttonBackground ml-10'>
                <div className='pt-2.5 pb-5'>
                  <FaXTwitter className='ml-2.5 text-xl text-white-base hover:text-primary-dark transition ease-in' />
                </div>
              </div>
              <div className='h-10 w-10 rounded-3xl bg-white ml-10'>
                <div className='pt-2.5 pb-5'>
                  <FaFacebookF className='ml-2.5 text-xl text-black hover:text-primary-dark transition ease-in cursor-pointer' />
                </div>
              </div>
              <div className='h-10 w-10 rounded-3xl buttonBackground ml-10'>
                <div className='pt-2.5 pb-5'>
                  <FaInstagram className='ml-2.5 text-xl text-white-base hover:text-primary-dark transition ease-in' />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card className='w-[750px] h-[795px]'>
              <CardContent className='mt-[25%]'>
                <form>
                  <div className='flex'>
                    <div className='grid w-full items-center gap-4 m-5 mb-5'>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='name'>First Name</Label>
                        <Input id='name' placeholder='' />
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='name'>Email</Label>
                        <Input id='name' placeholder='' />
                      </div>
                    </div>
                    <div className='grid w-full items-center gap-4 m-5 mb-5'>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='name'>Last Name</Label>
                        <Input id='name' placeholder='nimila' />
                      </div>
                      <div className='flex flex-col space-y-1.5'>
                        <Label htmlFor='name'>Phone Number</Label>
                        <Input id='name' placeholder='+1 012 3456 789' />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col space-y-1.5 m-5'>
                    <Label htmlFor='name'>Message</Label>
                    <Input id='name' placeholder='Write your message..' />
                  </div>
                </form>
              </CardContent>
              <CardFooter className='flex'>
                <Button className='ml-auto rounded-md mr-5'>Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className='m-auto mt-8 mb-8 h-[463px] w-full'>
          <Image
            src='/images/sliitLocation.jpg'
            alt='About Us'
            width={1920}
            height={465}
            className='object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_40.44%)]'
          />
        </div>
      </div>
    </Container>
  );
};

export default ContactUsPage;
