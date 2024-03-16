import React from 'react';
import Container from '../../../components/layouts/Container';

const TermsOfUsePage = () => {
  return (
    <Container>
      <div className='mt-10'>
        <div className='flex items-center space-x-3 text-md overflow-hidden bg-primary w-full max-h-24 headingStyle'>
          <h1 className='mt-3 ml-20 mb-3 font-[DM Sans] text-[22px] font-bold text-white'>
            Terms of Use
          </h1>
        </div>
        <div className='container max-w-5xl mx-auto font-body'>
          <div className='text-center mt-5 mb-5'>
            <h1 className='font-bold font-[DM Sans] text-[40px]'>Adaderana Terms of Use</h1>
          </div>
          <div className='mt-5 mb-5'>
            <div>
              <div>
                <p className='font-bold text-[24px] font-[DM Sana] mb-4'>
                  What Is a Terms of Use Agreement?
                </p>
                <p className='font-normal text-[14px] font-[DM Sana] mb-4'>
                  A terms of use agreement defines rules for the use of a website. Sometimes referred
                  to as “terms and conditions,” this document includes disclaimers and notices
                  clarifying the limit of the website’s or business’s liability to the visitor. It
                  also often displays other information about website ownership and copyright to help
                  protect a website’s content. And it may contain a privacy policy explaining how you
                  collect and use customer or visitor information. Because of the specific language
                  and the diversity in the range of websites’ needs, these documents should be created
                  with the help of legal experts for maximum legal protection.
                  <br />
                  Clickwrap vs. Browsewrap Terms of Use Agreements
                  <br />
                  <br />
                  Some sites present a pop-up or a landing page requiring visitors to agree to terms
                  and conditions before proceeding, which is called a “clickwrap agreement.” It’s more
                  common to find websites with a “browsewrap agreement.” With these, visitors are not
                  prompted to view or to agree to anything but can access a terms of use page by
                  browsing for a link if they so choose. In this case, a hyperlink or button is often
                  buried at the bottom of a home page and remains unseen by most visitors. One middle
                  ground option for presentation is a subdued pop-up or banner with a notice that by
                  continuing to use the site, a user agrees to the terms of use. These often contain a
                  hyperlink to the page with the terms of use. Regardless of presentation, each type
                  of agreement contains much of the same content. Either way, if website visitors
                  don’t approve of the specific conditions set forth in the agreement, they are free
                  to leave.
                </p>
              </div>
              <div>
                <p className='font-bold text-[24px] font-[DM Sana] mb-4'>
                  Five Reasons Why Your Website Needs a Terms of Use Agreement
                </p>
                <ol className='list-decimal ml-5'>
                  <li>
                    <p className='text-[14px] font-[DM Sana] mb-4'>Limiting Liability From Errors</p>
                    <p className='text-[14px] font-[DM Sana] mb-4 ml-[-20px]'>
                      Protecting yourself and your business is one of the most important reasons to
                      have a terms of use agreement. Most agreements contain a clause or disclaimer
                      aiming to lessen the website owner’s liability from errors in the website’s
                      content. In theory, this reduces the strength of any case a website visitor
                      could make for injury or property damage if allegedly impacted by erroneous
                      information. <br />
                      The internet is full of websites with flawed information. The American legal
                      system makes it relatively easy for businesses and consumers to sue each other
                      in court over a negative experience or impact. It’s also relatively common for
                      companies to be sued over baseless claims even at times when no wrongdoing
                      occurred. Website owners should be prepared for this and take seriously the
                      inherent (and sometimes unfair) risks of operating in such a public way.
                    </p>
                  </li>
                  <li>
                    <p className='text-[14px] font-[DM Sana] mb-4'>
                      Limiting Liability From User Content
                    </p>
                    <p className='text-[14px] font-[DM Sana] mb-4 ml-[-20px]'>
                      If your website involves user interactions such as a comments section, social
                      media functions, chat rooms or forums, a terms of use agreement can serve to
                      insulate the website from user-generated content. This is especially important
                      if users can freely upload digital media of their own to an online platform.
                      <br />
                      While a terms of use agreement may set rules about what content is and isn’t
                      allowed, it’s just as important to explicitly define users as third parties
                      whose content the website is not responsible for. Even a site such as a blog
                      that centrally reviews its content before posting may clarify that the website
                      or company itself isn’t represented by and doesn’t endorse views expressed by
                      contributors.
                      <br />
                      Limiting liability from user content via a terms of use agreement doesn’t
                      necessarily excuse a website from the responsibility to monitor and moderate
                      user content.
                    </p>
                  </li>
                  <li>
                    <p className='text-[14px] font-[DM Sana] mb-4'>Protecting Content</p>
                    <p className='text-[14px] font-[DM Sana] mb-4 ml-[-20px]'>
                      Websites and companies use terms of use agreements to communicate rules about
                      the copying and reproduction of their web content. “Protected content” can, of
                      course, include media such as images, music and videos, but it also applies to
                      logos, written commentary, data and other forms of digital media.
                      <br />
                      Language addressing these issues often takes the form of an intellectual
                      property clause claiming ownership of content and informs visitors of protection
                      by copyright, trademark, patent, trade secret or other intellectual property
                      laws. Some terms of use also include language on “permitted use” that speaks to
                      what visitors can do with its content.
                    </p>
                  </li>
                  <li>
                    <p className='text-[14px] font-[DM Sana] mb-4'>Preventing Abuse</p>
                    <p className='text-[14px] font-[DM Sana] mb-4 ml-[-20px]'>
                      Many terms of use agreements ban malware, bots and spiders from accessing a
                      website. Websites with user interactions usually also attempt to ban spamming or
                      other malicious user activity often considered abuse. It’s common for a terms of
                      use agreement to include a termination clause describing what it takes to be
                      banned for abusive conduct.
                    </p>
                  </li>
                  <li>
                    <p className='text-[14px] font-[DM Sana] mb-4'>Declaring Governing Law</p>
                    <p className='text-[14px] font-[DM Sana] mb-4 ml-[-20px]'>
                      A terms of use agreement should state under which country and state or province
                      laws the website aims to operate. In the event of a legal dispute, this can be
                      especially important for websites representing businesses with international
                      reach, as complications arise when a site facilitates transactions and other
                      interactions among people from different countries.
                      <br />A “governing law clause” or “choice of law provision” in a terms of use
                      agreement merely expresses a preference for which laws will apply to the
                      website’s activity, but courts do tend to value these declarations and treat
                      them favorably. While courts examine the issue from all angles in a dispute, a
                      governing law clause can be an important factor.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TermsOfUsePage;
