import { Metadata } from 'next';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header/index';
import { Toaster } from '../../components/ui/toaster';
import '../../styles/globals.css'
import { inter } from '../../utils/font-utils';
import Favicon from '../../../public/images/favicon.ico';

export const metadata: Metadata = {
  title: { default: 'IdeaSalade', template: '%s | IdeaSalade' },
  description: '',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main>
          <div>{children}</div>
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
