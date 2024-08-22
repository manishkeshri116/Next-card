import React from 'react';
import { CiSearch } from "react-icons/ci";


const FilterSidebar = () => {
  return (
    <div className="w-96 p-4 bg-gray-50 rounded-lg shadow-sm ml-4">
      {/* Filter Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-sm">Filter</span>
        <button className="text-blue-500 text-xs">clear all</button>
      </div>

      {/* Search Box */}
      <div className="mt-4 flex items-center border rounded-md p-2">
          <CiSearch className="text-gray-500 mr-2" size={24} />
          <input
            type="text"
            placeholder="Search by keyword, domain"
            className="w-full px-2 py-1 border-none outline-none"
          />
        </div>

      {/* Checkbox Section */}
      <div className="mb-4">
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">All</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Favorites</span>
          </label>
        </div>
      </div>

      {/* Keywords Section */}
      <div className="mb-4">
        <span className="block font-medium text-sm mb-2">Keywords</span>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">All</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
            <span className="text-sm">Bitcoin</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Ethereum</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">TON</span>
          </label>
        </div>
      </div>

      {/* Platforms Section */}
      <div>
        <span className="block font-medium text-sm mb-2">Platforms</span>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" checked />
            <span className="text-sm">All (72,574)</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Instagram (6,065)</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">X (Twitter) (3,010)</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Youtube (5,043)</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Facebook (8,445)</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Reddit (9,434)</span>
          </label>
        </div>
        <div className="mb-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm">Blogs (16,0337)</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="text-sm flex">Web / News (19,010)</span>
          </label>
        </div>
      </div> 
    </div>
  );
};

export default FilterSidebar;
