import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Poppins } from 'next/font/google';
import './globals.css';
import './portfolio.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Maria Clara Gama | Social Media',
  description: 'Social Media e Estratégia Digital em João Pessoa - PB',
  openGraph: {
    title: 'Maria Clara Gama | Social Media',
    description: 'Social Media e Estratégia Digital em João Pessoa - PB',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
