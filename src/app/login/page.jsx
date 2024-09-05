import React from "react";
import Image from "next/image";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
const LoginPage = () => {
  return (
    <main className="grid w-screen grid-cols-2 bg-black">
      <div className="col-span-1 px-20 py-10">
        <div className="flex h-full w-full flex-col justify-center gap-5">
          <div className="flex flex-col items-start gap-3">
            <h1 className="text-4xl font-normal">
              Hello,{" "}
              <span className="bg-custom-gradient bg-clip-text font-semibold text-transparent">
                DigitalFortress
              </span>
            </h1>
            <h2 className="text-c-gray text-right font-medium">
              Log in to platform to start creating magic.
            </h2>
          </div>

          <form action="" className="flex-btn w-full flex-col gap-5 py-10">
            <div className="relative w-full">
              <input
                type="text"
                className="bg-c-dark focus:border-border-gradient w-full rounded-lg border border-transparent px-10 py-4 text-white"
              />
              <AiOutlineMail className="text-c-gray absolute left-3 top-5 h-5 w-5" />
            </div>

            <div className="relative w-full">
              <input
                type="password"
                className="bg-c-dark focus:border-border-gradient w-full rounded-lg border border-transparent px-10 py-4 text-white"
              />
              <AiOutlineLock className="text-c-gray absolute left-3 top-5 h-5 w-5" />
            </div>

            <div className="flex w-full justify-between">
              <div className="flex gap-3 text-white">
                <input type="checkbox" />
                Remember me
              </div>
              <a className="text-blue-400" href="#">
                Forgot password?
              </a>
            </div>
            <button className="bg-c-button w-full rounded-lg p-4">Login</button>
          </form>

          <div className="flex justify-center gap-5">
            Don’t have an account?{" "}
            <span>
              <a href="#" className="text-blue-400">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <img src="/background.png" alt="" className="object-cover" />
      </div>
    </main>
  );
};

export default LoginPage;
