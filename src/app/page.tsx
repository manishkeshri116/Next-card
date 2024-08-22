"use client";

import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import Content from "./Content";
import ReactChar from "./ReactChar";
const Page = () => {


  
  return (
    <div>
    <div className="p-4 bg-gray-100">
      <header className="flex items-center gap-4 bg-gray-900 p-4 rounded-md">
        <button className="flex flex-col items-center justify-center w-20 h-20 bg-gray-900 text-white rounded-md border border-gray-600 hover:bg-gray-800">
          <CiSquarePlus size={24} />
          <span className="text-sm mt-1">Add new</span>
        </button>

        <button className="bg-white rounded-md flex justify-center items-center p-2 gap-2">
          <div>
            <h1 className="text-black">Crypto</h1>
            <h1>21851 mentions</h1>
          </div>
          <BsThreeDotsVertical />
        </button>

        <button className="text-gray-500 flex gap-3 justify-between items-center p-2">
          <div>
            <h1>Name Of project</h1>
            <h1>5524 mentions</h1>
          </div>
          <BsThreeDotsVertical />
        </button>

        <button className="text-gray-500 flex gap-3 justify-between items-center p-2">
          <div>
            <h1>Name Of project</h1>
            <h1>5524 mentions</h1>
          </div>
          <BsThreeDotsVertical />
        </button>
      </header>
      <div className="p-0 bg-gray-100">
        <div className="grid grid-cols-3 bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Total Mentions */}
          <div className="bg-orange-500 text-white flex flex-col justify-between p-6 border border-black">
            <div className="text-sm uppercase">total mentions</div>
            <div className="text-5xl font-bold mt-auto">320.8K</div>
          </div>

          {/* Social Media and Other Mentions */}
          <div className="col-span-1 grid grid-rows-2">
            <div className="bg-gray-100 text-black flex flex-col justify-center items-center border-b border-gray-300 border border-black p-6">
              <div className="text-sm uppercase">social media mentions</div>
              <div className="text-5xl font-bold">104.4K</div>
            </div>
            <div className="bg-gray-100 text-black flex flex-col justify-center items-center border border-black p-6">
              <div className="text-sm uppercase">other mentions</div>
              <div className="text-5xl font-bold">216.4K</div>
            </div>
          </div>

          {/* Mentions Chart */}
        <ReactChar/>
        </div>
      </div>

     


    </div>
    <div className="flex">
    <Sidebar />
    <Content />
    </div>
    </div>
  );
};

export default Page;
