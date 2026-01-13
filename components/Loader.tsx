import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (onComplete) {
        onComplete();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>

        {/* Middle rotating ring */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-green-500 border-l-green-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>

        {/* Inner pulsing circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 animate-pulse"></div>

        {/* Center dot */}
        <div className="absolute inset-6 rounded-full bg-white shadow-lg"></div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-24">
        <p className="text-white text-lg font-semibold tracking-widest animate-pulse">
          LOADING
        </p>
      </div>
    </div>
  );
};

export default Loader;
