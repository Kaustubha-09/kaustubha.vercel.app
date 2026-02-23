import { Outlet, useNavigate } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { useEffect } from 'react';

export function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle GitHub Pages redirect from 404.html
    const searchParams = new URLSearchParams(window.location.search);
    const redirect = searchParams.get('redirect');
    
    if (redirect) {
      // Remove the redirect parameter and navigate to the correct path
      window.history.replaceState(null, '', redirect);
      navigate(redirect, { replace: true });
    } else if (sessionStorage.getItem('redirect')) {
      // Fallback: use sessionStorage if query param is missing
      const storedRedirect = sessionStorage.getItem('redirect');
      sessionStorage.removeItem('redirect');
      if (storedRedirect && storedRedirect !== window.location.pathname) {
        window.history.replaceState(null, '', storedRedirect);
        navigate(storedRedirect, { replace: true });
      }
    }
  }, [navigate]);

  return (
    <div className="size-full flex flex-col">
      <ScrollProgress />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
