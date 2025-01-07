import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import process from 'process';

const API_GATEWAY_ENDPOINT = process.env.REACT_APP_API_GATEWAY_ENDPOINT || '';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isDark } = useTheme();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (API_GATEWAY_ENDPOINT) {
      try {
        const response = await fetch(API_GATEWAY_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (data.token) {
          // Store the token securely (e.g., in HttpOnly cookies or local storage)
          console.log('Login successful:', data);
        } else {
          console.error('Login failed:', data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-50'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold ${isDark ? 'text-white' : 'text-gray-900'}`}>Sign in if you can...</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${isDark ? 'border-gray-700 bg-gray-800 placeholder-gray-400 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-500 text-gray-900'} rounded-t-md focus:outline-none focus:ring-medium-turquoise-500 focus:border-medium-turquoise-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${isDark ? 'border-gray-700 bg-gray-800 placeholder-gray-400 text-gray-200' : 'border-gray-300 bg-white placeholder-gray-500 text-gray-900'} rounded-b-md focus:outline-none focus:ring-medium-turquoise-500 focus:border-medium-turquoise-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-turquoise-600 hover:bg-turquoise-700 md:py-4 md:text-lg md:px-10"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;