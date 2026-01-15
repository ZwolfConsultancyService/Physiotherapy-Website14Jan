import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
          
          {/* Animated Ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-pink-500 rounded-full animate-spin"></div>
          
          {/* Inner Pulse */}
          <div className="absolute inset-2 bg-pink-100 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Loading...
        </h3>
        <p className="text-gray-500 text-sm">Please wait a moment</p>
      </div>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;