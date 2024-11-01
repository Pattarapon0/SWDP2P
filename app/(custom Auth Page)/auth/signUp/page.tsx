"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCon, setPasswordCon] = useState("");
  const [correctPassword, setCorrectPassword] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== passwordCon) {
      setCorrectPassword(false);
      return;
    }
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* <div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-blue-800">
              Create an Account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="tel"
                  placeholder="Phone Number"
                  value={formData.tel}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </CardContent>
        </Card>
      </div> */}
      <div className=" w-[600px] bg-white rounded-[24px] overflow-hidden shadow-lg">
        <div className="flex justify-center bg-blue-500">
          <h1 className="text-[40px] font-bold text-blue-50">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-[24px]">
          <div className="px-[16px] py-[32px] space-y-[16px]">
            <div className="flex flex-col space-y-[16px]">
              <label htmlFor="username" className="text-blue-950 text-[32px]">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="border-[2px] w-full h-[48px] rounded-[8px] outline-none focus:outline-none border-blue-600 bg-blue-200 focus:border-blue-700 px-[24px]"
              />
            </div>
            <div className="flex flex-col space-y-[16px]">
              <label
                htmlFor="phoneNumber"
                className="text-blue-950 text-[32px]"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border-[2px] w-full h-[48px] rounded-[8px] outline-none focus:outline-none border-blue-600 bg-blue-200 focus:border-blue-700 px-[24px]"
              />
            </div>
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
              <div className="space-y-[8px]">
                <label htmlFor="password" className="text-blue-950 text-[32px]">
                  Password
                </label>
                {!correctPassword && (
                  <div className="text-red-500 text-[16px]">
                    Passwords do not match
                  </div>
                )}
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-[2px] w-full h-[48px] rounded-[8px] outline-none focus:outline-none border-blue-600 bg-blue-200 focus:border-blue-700 px-[24px]"
              />
            </div>
            <div className="flex flex-col space-y-[16px]">
              <label
                htmlFor="passwordCon"
                className="text-blue-950 text-[32px]"
              >
                Confirm Password
              </label>
              <input
                id="passwordCon"
                type="password"
                value={passwordCon}
                onChange={(e) => setPasswordCon(e.target.value)}
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
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
