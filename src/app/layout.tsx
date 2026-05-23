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
      <body>{children}</body>
    </html>
  );
}
