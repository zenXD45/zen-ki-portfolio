import type { Metadata } from 'next';
import './globals.css';
import { PageTransition } from '@/components/page-transition';

export const metadata: Metadata = {
  title: 'Zenitsu Agatsuma - Developer Portfolio',
  description: 'A personal portfolio showcasing the projects and skills of a passionate developer with shocking potential.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
