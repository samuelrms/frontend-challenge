import { Children } from '@/types/children';
import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import Providers from './Providers';

const inter = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}