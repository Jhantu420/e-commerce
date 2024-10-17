"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { auth } from "@/lib/firestore/firebase";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const {user} = useAuth();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-300 p-8">
      <section className="bg-white  p-6 rounded-lg shadow-md w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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

          <div className="flex justify-between items-center font-bold ">
            <a
              href="/sign-up"
              className="text-sm text-blue-600 hover:underline"
            >
              New ? Create Account
            </a>
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
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
          <SignInWithGoogleComponent />
        </form>
      </section>
    </main>
  );
}

function SignInWithGoogleComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
      toast.success("Successfully signed in!");
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {/* Conditionally render the loading spinner or button */}
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="loader border-t-2 border-blue-600 rounded-full w-6 h-6 animate-spin"></div>
          <span className="ml-2 text-gray-500">Signing in...</span>
        </div>
      ) : (
        <button
          type="button"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      )}
    </div>
  );
}
