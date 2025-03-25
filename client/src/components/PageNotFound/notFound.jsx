import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! The page you're looking for doesn't exist ❌.</p>
      <Link to="/" className="mt-6">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;






