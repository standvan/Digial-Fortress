"use client";
import React from "react";
import { MdOutlineKeyboardArrowLeft, MdBook } from "react-icons/md";
import {
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineAccountBook,
  AiFillAccountBook,
} from "react-icons/ai";
const DashBoardPage = () => {
  const activeStyle =
    "hover:bg-c-gray transitions bg-c-button flex items-center gap-3 overflow-hidden rounded-l px-2 py-4 text-black";
  const unActiveStyle =
    "hover:bg-c-gray transitions flex items-center gap-3 overflow-hidden rounded-l px-2 py-4 hover:text-black justify-between";
  return (
    <main className="bg-c-gray grid h-screen w-screen grid-cols-5">
      <div className="col-span-1 my-3 flex flex-col gap-10 rounded-lg bg-black">
        <div className="flex items-center justify-between px-2 py-5">
          <img src="/icon1.png" alt="" />
          <div className="bg-c-gray rounded-full">
            <MdOutlineKeyboardArrowLeft className="text-xl text-white" />
          </div>
        </div>
        <ul className="text-c-gray text-l mx-2 flex flex-col gap-4 font-semibold">
          <li className={activeStyle}>
            <div className="flex gap-5">
              <MdBook className="h-5 w-5" /> Dashboard
            </div>
          </li>
          <li className={unActiveStyle}>
            <div className="flex gap-5">
              <MdBook className="h-5 w-5" /> Tasks
            </div>
          </li>
          <li className={unActiveStyle}>
            <div className="flex gap-5">
              <MdBook className="h-5 w-5" /> Projects
            </div>
          </li>
          <li className={unActiveStyle}>
            <div className="flex gap-5">
              <MdBook className="h-5 w-5" /> Schedule
            </div>
            <span className="bg-c-button rounded-full px-2 py-1">2</span>
          </li>
        </ul>
      </div>
      <div className="col-span-4 m-3">
        <div className="flex flex-row items-center justify-between rounded-lg bg-black p-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search anything..."
              className="w-1/3 rounded-lg p-3"
            />
          </div>
          <ul className="flex-2 flex flex-row gap-3 text-white">
            <li>
              <AiOutlineMessage className="h-8 w-8" />
            </li>
            <li>
              <AiOutlineBell className="h-8 w-8" />
            </li>
            <li>
              <AiFillAccountBook className="h-8 w-8" />
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default DashBoardPage;
