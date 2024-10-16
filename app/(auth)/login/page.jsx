"use client"
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login with:", { email, password });
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-300">
      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter your password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
            <a href="/signup" className="text-sm text-blue-600 hover:underline">
              Sign up
            </a>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-500">or</span>
          </div>

          <div>
            <button
              type="button"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
              onClick={() => console.log("Login with Google")}
            >
              Login with Google
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
