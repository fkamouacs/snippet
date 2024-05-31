import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Snippet',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-offblack">
      <body className={`${merriweather.className} flex justify-center`}>
        {children}
      </body>
    </html>
  );
}
