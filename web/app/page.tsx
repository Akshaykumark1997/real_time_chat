'use client';
import Image from "next/image";
import Input from "./components/Input";


export default function LoginPage() {


  return (
    <div className="h-screen w-screen flex items-center justify-between bg-[#F0F4FC]">
      <div className="w-1/2 h-full flex flex-col items-start p-32 justify-center gap-2">
        <h1 className="text-2xl text-black">Welcome to</h1>
        <h1 className="text-4xl text-black">Enter platform name</h1>
        <p className="text-black text-xs">
          Here, we believe that building a strong professional network begins
          with your participation. We are delighted to offer a modern and
          user-friendly service to ensure you have the best experience.
        </p>
        <p className="text-[#4461F2] text-base">Join Now!</p>
        <Image
          src={"/images/Frame.png"}
          alt="frame_image"
          width={558}
          height={370}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col gap-4">
        <div className="flex gap-4">
          <h3 className="text-black text-2xl">Sign In</h3>
          <h3 className="text-black text-2xl">Register</h3>
        </div>
        <div>
          <Input />
        </div>
      </div>
    </div>
  );
}
