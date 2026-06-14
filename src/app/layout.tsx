import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaustubha Eluri — Software Engineer',
  description: 'Research SWE · AI/ML · Accessibility. Building AI that works for everyone.',
  openGraph: {
    title: 'Kaustubha Eluri',
    description: 'Research SWE · AI/ML · Accessibility',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DMQ3W6XJYH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DMQ3W6XJYH');
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
