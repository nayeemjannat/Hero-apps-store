import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
        {error && <span className="block italic mt-2 text-sm text-red-400">{error.statusText || error.message}</span>}
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-[#8B5CF6] text-white rounded-lg font-medium hover:bg-[#7C3AED] transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;


