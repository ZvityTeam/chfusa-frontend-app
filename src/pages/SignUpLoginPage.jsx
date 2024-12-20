// SignUpLoginModal.js
import React, { useState } from 'react';

const SignUpLoginModal = ({ showModal, closeModal }) => {
    const [FormInput, setFormInput] = useState({})
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const ChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormInput(prevState => ({ ...prevState, [name]: value }));
    };
    const loginFormHandler = (e) => {
        e.preventDefault()
    }

    return (
        <>
            {showModal && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-96"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold">{isSignUp ? 'Sign Up' : 'Login'}</h2>
                            <p className="text-sm text-gray-500">
                                {isSignUp
                                    ? 'Create a new account to get started.'
                                    : 'Welcome back! Please log in.'}
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={loginFormHandler}>
                            {JSON.stringify(FormInput)}

                            {isSignUp && (
                                <>
                                    <div>
                                        <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                                            Username
                                        </label>
                                        <input
                                            onChange={ChangeHandler}
                                            name='username'
                                            value={FormInput.username || ''}
                                            type="text"
                                            id="username"
                                            placeholder="Enter your username"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            onChange={ChangeHandler}
                                            name='email'
                                            value={FormInput.email || ''}
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            onChange={ChangeHandler}
                                            name='password'
                                            value={FormInput.password || ''}
                                            type="password"
                                            id="password"
                                            placeholder="Create a password"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </>
                            )}

                            {!isSignUp && (
                                <>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                            Email Address
                                        </label>
                                        <input
                                            onChange={ChangeHandler}
                                            name='email'
                                            value={FormInput.email || ''}
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            onChange={ChangeHandler}
                                            name='password'
                                            value={FormInput.password || ''}
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="flex justify-between items-center mt-4">
                                <button
                                    type="submit"
                                    className="w-full py-2 px-4 bg-secondary text-white font-semibold  rounded-full hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {isSignUp ? 'Sign Up' : 'Log In'}
                                </button>
                            </div>
                        </form>

                        {/* Toggle Form */}
                        <div className="mt-4 text-center">
                            <span className="text-sm text-gray-600">
                                {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                                <button
                                    onClick={toggleForm}
                                    className="text-blue-600 font-semibold"
                                >
                                    {isSignUp ? 'Log In' : 'Sign Up'}
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUpLoginModal;
