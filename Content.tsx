import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const Content = () => {
  const [projectName, setProjectName] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  return (
    <div className="max-w-full mx-auto bg-gray-100 p-6">
      <div className="flex justify-between items-center p-4">
        <span className="text-lg">All</span>
        <div className="relative">
          <select className="border border-gray-300 rounded px-3 py-2 bg-white">
            <option>Sort by</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3">
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span> ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 m-3">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
                alt="Reddit Logo"
              />
              <div className="ml-4 flex-1">
                <div className="text-lg font-medium text-gray-900">
                  reddit.com
                </div>
                <div className="text-sm text-gray-500">June 14, 2024</div>
              </div>
              <IoEyeOutline className="text-blue-600 mr-2" />
              <CiHeart className="text-red-600 mr-2" />
              <AiOutlineDelete className="text-gray-600" />
            </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
              <span className="text-red-500 font-bold">Bitcoin</span>
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>

        
      </div>

      {/* from tag */}
 <div className="flex flex-col bg-gray-50 w-9/12 ">
  <div className="flex-grow flex flex-col justify-center items-center">
    <div className="w-full max-w-md  p-10 ">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Start Monitoring a Brand
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Learn what people say about your brand and get notified when it's mentioned on the Internet.
      </p>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-1">
          Project name
        </label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
          placeholder="Type your project name here"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Enter keywords
          </label>
          <p className="text-xs  mt-2 text-red-600 ">
            Maximum of 10 keywords can be added
          </p>
        </div>

        <div className="flex justify-between items-center">
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g. bitcoin, ethereum, ton"
            value={keywordInput}
            onChange={(e) => setKeywordInput(e.target.value)}
          />
          <div className="relative">
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 px-5 py-1 bg-gray-200 text-gray-700 rounded-md">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="flex justify-center py-4 mt-40">
    <button className="py-2 px-7 bg-purple-500 text-white rounded hover:bg-purple-600">
      Create
    </button>
  </div>
</div>

{/* checkbox */}

<div className="flex flex-col items-center justify-center min-h-screen w-9/12 bg-gray-50">
      <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col ">
          <div className="text-green-500 text-4xl mb-4 mt-14">
          <svg width="50px" height="50px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M142.196 30.4125C142.586 30.0637 142.897 29.6356 143.109 29.1567C143.32 28.6778 143.427 28.1592 143.422 27.6357C143.417 27.1122 143.3 26.5959 143.079 26.1213C142.858 25.6467 142.538 25.2248 142.141 24.8838C141.722 24.5249 141.307 24.1678 140.895 23.8127C137.751 21.1093 134.5 18.3102 131.1 15.9225C105.123 -2.36044 78.1316 -2.4633 50.8803 7.23287C26.2068 16.0055 10.3619 33.5563 3.77909 59.3882C-3.56415 88.249 2.86618 113.71 22.9048 135.073C23.4261 135.625 23.9582 136.177 24.4895 136.704C35.2539 147.469 48.6614 154.115 59.2847 158.739C63.8445 160.731 87.2404 163.149 93.5707 162.206C131.19 156.588 155.946 135.37 164.569 99.8725C166.215 92.9194 167.035 85.7962 167.011 78.6508C166.974 71.1466 165.712 63.6988 163.275 56.6012C163.097 56.0703 162.805 55.5851 162.418 55.1805C162.031 54.7759 161.56 54.4618 161.037 54.2606C160.515 54.0595 159.954 53.9764 159.396 54.0171C158.838 54.0579 158.295 54.2216 157.808 54.4965L157.706 54.5547C156.931 54.9984 156.336 55.7005 156.027 56.5381C155.717 57.3757 155.712 58.2954 156.012 59.1364C158.212 65.2371 159.334 71.674 159.327 78.1592C159.251 85.9394 158.198 93.6792 156.192 101.197C150.248 122.8 136.038 138.545 112.75 149.315C89.0741 160.65 55.1215 149.19 46.0879 143.226C36.1031 136.4 27.3663 127.908 20.2596 118.121C9.11418 102.34 6.61369 79.6587 12.6028 58.9229C15.4055 49.3489 20.3036 40.5185 26.9421 33.0722C33.5806 25.6259 41.793 19.7503 50.9838 15.8714C74.8941 5.93474 98.8852 4.18192 122.285 19.0635C125.422 21.061 133.422 27.3424 137.465 30.5501C138.143 31.0882 138.99 31.3691 139.855 31.3432C140.721 31.3172 141.549 30.986 142.194 30.4082L142.196 30.4125Z" fill="#000000"/>
<path d="M74.6287 104.313C76.2312 102.79 77.1115 102.019 77.9173 101.177C103.753 74.1855 132.047 49.8851 160.508 25.7727C161.584 24.8619 162.685 23.7 163.958 23.3737C165.493 22.9815 167.996 23.4326 168.682 24.2661C169.133 24.8821 169.418 25.6035 169.509 26.3612C169.601 27.1189 169.496 27.8875 169.206 28.5932C168.537 30.3474 166.907 31.8498 165.429 33.1629C156.607 41.0019 147.538 48.5708 138.872 56.5716C120.756 73.3024 102.756 90.1576 84.8704 107.137C77.0334 114.561 74.0173 114.862 66.8059 106.929C62.0589 101.705 47.7328 84.0973 43.3455 78.5495C42.7256 77.6872 42.1735 76.7781 41.6941 75.8305C40.7045 74.0756 40.0576 72.1419 42.0246 70.7814C44.2158 69.2662 45.7707 70.8473 47.0696 72.4937C48.384 74.1607 49.5048 75.9916 50.9121 77.5713C55.2811 82.4737 69.908 99.1421 74.6287 104.313Z" fill="#000000"/>
</svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Project successfully created!
          </h2>
          <p className=" text-gray-600 mb-6">
            Phlanx is now retrieving all relevant mentions from the internet for
            your new project <span className="font-semibold text-green-500">Crypto</span>.
            Brand mentions will start by quickly finding results from the last
            30 days.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="mb-2">
            <span className="font-semibold flex">Project name: </span>Crypto
          </div>
          <div className="mb-2">
            <span className="font-semibold">Project keywords: </span>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-white border rounded-full shadow-sm">
              Bitcoin
            </span>
            <span className="px-3 py-1 bg-white border rounded-full shadow-sm">
              TON
            </span>
            <span className="px-3 py-1 bg-white border rounded-full shadow-sm">
              Ethereum
            </span>
            
          </div>
          
        </div>
        <p className="text-xs">Following thisyou can chaeck daily for any new result!</p>
        <div className="flex justify-center py-4 mt-40">
    <button className="py-2 px-12 bg-purple-900 text-white rounded-md hover:bg-purple-600">
      Let's Start
    </button>
  </div>
      </div>
    </div>
{/* modal */}

<div className="inset-0 flex items-center justify-center  bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 ">
        <h2 className="text-xs  mb-4">Are you sure you want to remove this project?</h2>
        <div className="mb-4 bg-gray-200 rounded-xl">
            <div className="flex flex-col">
            <p className="text-gray-700 flex flex-col ml-3">Project name:
            <span>Crypto</span></p>
            <p className="text-gray-700 ml-3">Project keywords:</p>
            <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-white mb-2 ml-2 text-gray-800 text-sm px-2 py-1 rounded-full">Bitcoin</span>
            <span className="bg-white mb-2 ml-2 text-gray-800 text-sm px-2 py-1 rounded-full">TON</span>
            <span className="bg-white mb-2 ml-2 text-gray-800 text-sm px-2 py-1 rounded-full">Ethereum</span>
          </div>
            </div>
         
         
        </div>
        <div className="flex justify-between gap-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded">
            Cancel
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Content;
