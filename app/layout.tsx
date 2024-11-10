import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import ico from '@/assets/img/logo.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SpawnUP',
  description: 'Transformamos ideias em realidade digital',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="mr-[2.4rem] ml-[2.4rem] md:mr-[1rem] md:ml-[1rem] flex justify-center items-center">
            <div className="max-w-[88.5rem] w-full">
              <NavBar />

              {children}
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
