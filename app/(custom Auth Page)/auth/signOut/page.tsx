"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import TopMenu from "@/components/newUi/topMenu";
import ButtonM2 from "@/components/newUi/buttonM2";
import ButtonM1 from "@/components/newUi/buttonM1";

const SignOut = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/"); // Redirect to home or another page after signing out
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-[600px] bg-white rounded-[24px] overflow-hidden flex flex-col space-y-[24px] shadow-lg">
        <div className="flex justify-center bg-blue-500">
          <h1 className="text-[40px] font-bold text-blue-50">Sign Out</h1>
        </div>

        <div className="px-[16px] py-[32px] flex flex-col items-center">
          <p className="text-blue-950 text-[32px] text-center">
            Are you sure you want to sign out?
          </p>
        </div>

        <div className="py-[32px] flex flex-row space-x-[16px] justify-center">
          <div className="flex space-x-[16px]">
            {/* <button
              onClick={handleSignOut}
              className="px-[48px] py-[6px] text-[32px] rounded-[16px] bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-blue-50"
            >
              Sign Out
            </button> */}
            <ButtonM1
              text="Sign Out"
              url="/api/auth/signout"
              hasOnClick={true}
              onClick={handleSignOut}
            />
            <ButtonM2
              text="Cancel"
              url="/"
              hasOnClick={true}
              onClick={() => router.push("/")}
            />
            {/* <button
              onClick={() => router.push("/")} // Redirect to home or dashboard
              className="px-[48px] py-[6px] text-[32px] rounded-[16px] bg-gray-300 hover:bg-gray-400 active:bg-gray-500 text-blue-950"
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignOut;
