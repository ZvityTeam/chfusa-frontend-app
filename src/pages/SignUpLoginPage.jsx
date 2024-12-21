// SignUpLoginModal.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
export default function SignUpLoginModal({ isOpen, onClose }) {
  const [view, setView] = useState('login');

  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const renderContent = () => {
    switch (view) {
      case 'reset':
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                RESET PASSWORD
              </h2>
              <p className="text-gray-500 mt-2">
                Forgot your password? Let's get you a new one
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your registered email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <button
                type="submit"
                className="w-full py-3 px-4 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                RESET PASSWORD
              </button>
            </form>

            <div className="mt-6 text-center">
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-secondary hover:underline"
                >
                  Log On
                </button>
              </p>
            </div>
          </>
        );

      case 'register':
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">JOIN CHF</h2>
              <p className="text-gray-500 mt-2">
                We are glad you have chosen to register with us, Welcome!
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                type="tel"
                placeholder="Number as (999) 999-9999"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                type="password"
                placeholder="Password minimum 6 characters"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <p className="text-sm text-gray-500">
                Password must be 6 to 20 characters long with at least one digit, one uppercase & one lower case.
              </p>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                JOIN
              </button>
            </form>

            <div className="mt-6 text-center">
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setView('login')}
                  className="text-secondary hover:underline"
                >
                  Log On
                </button>
              </p>
            </div>
          </>
        );

      default: // login
        return (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">LOG ON</h2>
              <p className="text-gray-600 mt-2">Your space to be social</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-secondary/20"
              />

              <button
                type="submit"
                className="w-full py-3 px-4 bg-secondary text-white rounded hover:bg-opacity-90 transition-colors"
              >
                LOG ON
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setView('reset')}
                className="text-gray-600 hover:text-secondary"
              >
                Forgot Password?
              </button>
              <p className="mt-4">
                Don't have an account?{' '}
                <button
                  onClick={() => setView('register')}
                  className="text-secondary hover:underline"
                >
                  Join CHF
                </button>
              </p>
            </div>
          </>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{display:"flex",flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />
          <motion.div
            className="fixed top-[10%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 w-full max-w-md z-50"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            {renderContent()}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}


