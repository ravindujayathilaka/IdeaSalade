import React from 'react';
import Image from 'next/image';
import '../../../styles/globals.css';
import Container from '../../../components/layouts/Container';

const AboutUsPage = () => {
  return (
    <Container>
      <div className='mt-10'>
        <div className='flex items-center space-x-3 text-md overflow-hidden bg-primary w-full max-h-24 headingStyle'>
          <h1 className='mt-3 ml-20 mb-3 font-[DM Sans] text-2xl font-bold text-white'>About Us</h1>
        </div>
        <div>
          <div className='h-96 relative overflow-hidden'>
            <div className='absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_40.44%)]' />
            <div className='absolute w-full h-full'>
              <div className='mt-72 ml-20'>
                <h1 className='font-[DM Sans] text-[32px] font-bold text-white '>
                  Learn About the IdeaSalad
                </h1>
                <h1 className='font-[Arboria-Medium] text-[16px] font-normal text-slate-400'>
                  Data Unveils Truths, We Illuminate Stories
                </h1>
              </div>
            </div>
            <Image
              src='/images/aboutus_image_1.jpeg'
              alt='About Us'
              width={1920}
              height={465}
              className='object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_40.44%)]'
            />
          </div>
        </div>
        <div className='container max-w-5xl mx-auto font-body'>
          <div className='mt-4'>
            <p className='font-[DM Sans] text-[28px] font-bold'>What we do</p>
            <div className='mt-4'>
              <p className='font-[DM Sans] text-[14px] font-medium'>
                <span className='text-[26px]'>I</span>n the highly competitive news broadcasting
                space, Derana has built probably the most unbiased and comprehensive news property on
                offer &quot;Ada Derana&quot; - with a news team of 100 people geared to deliver the
                most accurate and timely information. Ada Derana To be the number one News brand among
                Sri Lankans in terms of loyalty by reaching them through every possible opportunity in
                late 2007, Ada Derana entered into a partnership with Dialog Telekom, the largest
                mobile phone operator in Sri Lanka, to send breaking news alerts to all Dialog mobile
                subscribers as Short Text Messages (SMS). Currently, instant news alerts can be
                obtained through all the leading operators
              </p>
              <p className='mt-4 font-[DM Sans] text-[14px] font-medium'>
                Today, Ada Derana is characterised by its availability across delivery channels such
                as Television, Radio, Web, SMS alerts, IVR, Video Alerts, and social media such as
                Facebook, Twitter and YouTube. In most of these forms, Ada Derana is available on a
                multilingual platform providing greater accessibility to consumers both in Sri Lanka
                and across the world. The style of the news property has been customized to suit each
                of the delivery media, taking note of the nature of consumption.
              </p>
            </div>
          </div>
          <div className='mt-6'>
            <p className='font-[DM Sans] text-3xl font-bold leading-10'>www.ideasalad.lk</p>
            <div className='mt-4'>
              <p className='font-[DM Sans] text-[14px] font-medium'>
                The showpiece of the Ada Derana news property is the www.adaderana.lk web portal which
                is ranked the Number One news site used by Sri Lankans; analysis shows that surfers
                spend more time on the site than they do on that of the nearest competitor. Available
                in Sinhala, Tamil and English, the site facilitates two way viewer generation by
                offering consumers an interactive platform to comment on the latest stories and
                interact with the Ada Derana community, and by allowing viewers to file in their own
                news reports through Newsdesk - My Report.
              </p>
            </div>
          </div>
          <div className='mt-6'>
            <p className='font-[DM Sans] text-[28px] font-bold'>Our Vision</p>
            <div className='mt-4 ml-4'>
              <ul className='list-disc'>
                <li>
                  <p className='font-[DM Sans] text-[14px] font-medium'>
                    Ada Derana, the premium news property, walked away with the SLIM Brand Excellence
                    silver award for the Most Innovative Brand of the Year at the awards ceremony held
                    recently. The award was due recognition for Ada Derana&apos;s drive to become a
                    leading news provider by strategically innovating its distribution and delivery.
                    Sri Lanka Institute of Marketing (SLIM) is the nation body of marketing in Sri
                    Lanka.
                  </p>
                  <div className='m-auto mt-8 mb-8 h-auto w-2/4'>
                    <Image
                      src='/images/aboutus_image_1.jpeg'
                      alt='About Us'
                      width={626}
                      height={463}
                      className='object-cover w-full h-full rounded-3xl'
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsPage;
