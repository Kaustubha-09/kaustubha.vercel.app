import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-6xl mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
