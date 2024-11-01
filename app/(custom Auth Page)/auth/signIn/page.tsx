"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation for app directory
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className=" w-[600px] bg-white rounded-[24px] overflow-hidden  shadow-lg">
        <div className="flex justify-center bg-blue-500">
          <h1 className="text-[40px] font-bold text-blue-50">Sign In</h1>
        </div>

        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-[24px]">
          <div className="px-[16px] py-[32px] space-y-[16px]">
            <div className="flex flex-col space-y-[16px]">
              <label htmlFor="email" className="text-blue-950 text-[32px]">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-[2px] w-full h-[48px] rounded-[8px] outline-none focus:outline-none border-blue-600 bg-blue-200 focus:border-blue-700 px-[24px]"
              />
            </div>
            <div className="flex flex-col space-y-[16px]">
              <label htmlFor="password" className="text-blue-950 text-[32px]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-[2px] w-full h-[48px] rounded-[8px] outline-none focus:outline-none border-blue-600 bg-blue-200 focus:border-blue-700 px-[24px]"
              />
            </div>
          </div>
          <div className="flex flex-col py-[16px] space-y-[16px] justify-center">
            <div className="justify-center flex">
              <button
                type="submit"
                className="px-[48px] py-[6px] text-[32px] rounded-[16px] bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-blue-50 w-auto inline-block"
              >
                Sign In
              </button>
            </div>
            <div>
              <p className="text-blue-950 text-[20px] w-[auto] text-center">
                Don’t have an account?{" "}
                <a
                  href="/auth/register"
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
