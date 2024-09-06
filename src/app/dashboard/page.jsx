"use client";
import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdBook,
  MdOutlineIndeterminateCheckBox,
  MdKeyboardArrowDown,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import {
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineAccountBook,
  AiFillAccountBook,
} from "react-icons/ai";
import Button from "../components/button";
import { FaPenAlt, FaTrashAlt } from "react-icons/fa";
const DashBoardPage = () => {
  const activeStyle =
    "hover:bg-c-gray transitions bg-c-button flex items-center gap-3 overflow-hidden rounded-xl px-2 py-4 text-black text-sm";
  const unActiveStyle =
    "hover:bg-c-gray transitions flex items-center gap-3 overflow-hidden rounded-xl px-2 py-4 hover:text-black justify-between text-sm";

  const datas = [
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2022",
      check: true,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "20 Jan 2022",
      check: true,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: false,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: false,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: true,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: true,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: false,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: false,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: false,
    },
    {
      name: "Sisyphus",
      address: "sisyphus.com",
      date: "22 Jan 2021",
      check: false,
    },
  ];
  const [show, setshow] = useState(true);
  return (
    <main className="flex h-screen w-screen overflow-x-hidden bg-c-gray">
      {show ? (
        <>
          <div
            className="transitions-side fixed mx-2 my-3 flex h-screen flex-col gap-10 rounded-lg bg-black"
            style={{ width: 312, zIndex: 2 }}
          >
            <div className="flex items-center justify-between px-2 py-5">
              <img src="/icon1.png" alt="" />
              <div
                className="rounded-full bg-c-gray"
                onClick={() => setshow(false)}
              >
                <MdOutlineKeyboardArrowLeft className="text-xl text-white" />
              </div>
            </div>
            <ul className="text-l mx-2 flex flex-col gap-4 font-semibold text-c-gray">
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
                <span className="rounded bg-c-button px-2">2</span>
              </li>
            </ul>
          </div>
          <div className="h-screen" style={{ width: 312 }}></div>
        </>
      ) : (
        <>
          <div
            className="transitions-side fixed mx-2 my-3 flex h-screen flex-col gap-10 rounded-lg bg-black"
            style={{ width: 96, zIndex: 2 }}
          >
            <div className="flex flex-col items-center justify-between gap-4 px-2 py-5">
              <img src="/icon2.png" alt="" />
              <div
                className="rounded-full bg-c-gray"
                onClick={() => setshow(true)}
              >
                <MdOutlineKeyboardArrowRight className="text-xl text-white" />
              </div>
            </div>
            <ul className="text-l mx-2 flex flex-col gap-4 p-3 font-semibold text-c-gray">
              <li className={activeStyle}>
                <div className="flex w-full justify-center gap-5">
                  <MdBook className="h-5 w-5" />
                </div>
              </li>
              <li className={unActiveStyle}>
                <div className="flex w-full justify-center gap-5">
                  <MdBook className="h-5 w-5" />
                </div>
              </li>
              <li className={unActiveStyle}>
                <div className="flex w-full justify-center gap-5">
                  <MdBook className="h-5 w-5" />
                </div>
              </li>
              <li className={unActiveStyle}>
                <div className="flex w-full justify-center gap-5">
                  <MdBook className="h-5 w-5" />
                </div>
              </li>
            </ul>
          </div>
          <div className="h-screen" style={{ width: 96 }}></div>
        </>
      )}

      <div className="mx-5 my-3 flex flex-1 flex-col gap-5">
        <div className="flex flex-row items-center justify-between rounded-lg bg-black p-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search anything..."
              className="rounded-lg bg-c-gray p-3 text-white"
              style={{ width: 340 }}
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
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <div
          className="overflow-x-auto rounded-md bg-black text-white"
          style={{ height: 766 }}
        >
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-sm text-c-gray">
                <th className="flex items-center gap-2">
                  <MdOutlineIndeterminateCheckBox className="h-5 w-5 text-c-button" />
                  Project
                  <MdKeyboardArrowDown className="h-5 w-5" />
                </th>
                <th>Last assessed</th>
                <th>License use</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {datas.map((data, index) => (
                <tr key={index}>
                  <td className="flex items-center gap-2">
                    {data.check ? (
                      <MdCheckBox className="h-5 w-5 text-c-button" />
                    ) : (
                      <MdCheckBoxOutlineBlank className="h-5 w-5 text-c-button" />
                    )}

                    <img src="/Avataricon3.png" alt="" className="h-10 w-10" />
                    <div className="flex flex-col">
                      <h3 className="">{data.name}</h3>
                      <p className="text-xs text-c-gray">{data.address}</p>
                    </div>
                  </td>
                  <td>{data.date}</td>
                  <td className="flex gap-4">
                    <Button title="Active" color="#0E5A3A" />
                    <Button title="Customer data" color="#423419" />
                    <Button title="Admin" color="#FFAC82" />
                  </td>
                  <td className="">
                    <div className="flex gap-4 text-c-gray">
                      <FaTrashAlt className="h-4 w-4" />
                      <FaPenAlt className="h-4 w-4" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between p-4">
            <div className="rounded-xl border border-c-gray px-3 py-2">
              Previous
            </div>
            <p className="text-c-gray">Page 1 of 10</p>
            <div className="rounded-xl border border-c-gray px-3 py-2">
              Next
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoardPage;
