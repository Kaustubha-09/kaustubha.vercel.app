import { RouterProvider } from 'react-router';
import { ThemeProvider } from 'next-themes';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      storageKey="portfolio-theme"
      disableTransitionOnChange={false}
    >
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}