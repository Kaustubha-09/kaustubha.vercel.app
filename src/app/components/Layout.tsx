import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="size-full flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
