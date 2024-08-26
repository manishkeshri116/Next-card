// import React, { useState } from 'react';

// const BrandMonitoringForm = () => {
//   const [projectName, setProjectName] = useState('');
//   const [keywordInput, setKeywordInput] = useState('');
//   const [keywords, setKeywords] = useState([]);

//   const handleAddKeyword = () => {
//     if (keywords.length < 10 && keywordInput.trim()) {
//       setKeywords([...keywords, keywordInput.trim()]);
//       setKeywordInput('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (projectName && keywords.length > 0) {
//       // Handle form submission logic here, e.g., send data to API
//       console.log('Project Name:', projectName);
//       console.log('Keywords:', keywords);
//     } else {
//       // Handle validation errors
//       alert('Please enter a project name and at least one keyword.');
//     }
//   };

//   return (
//     <div className="flex flex-col bg-gray-50 w-9/12">
//       <div className="flex-grow flex flex-col justify-center items-center">
//         <div className="w-full max-w-md p-10">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">
//             Start Monitoring a Brand
//           </h2>
//           <p className="text-sm text-gray-500 mb-6">
//             Learn what people say about your brand and get notified when it's mentioned on the Internet.
//           </p>

//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium mb-1">
//               Project name
//             </label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
//               placeholder="Type your project name here"
//               value={projectName}
//               onChange={(e) => setProjectName(e.target.value)}
//             />
//           </div>

//           <div className="mb-4">
//             <div className="flex justify-between">
//               <label className="block text-gray-700 text-sm font-medium mb-1">
//                 Enter keywords
//               </label>
//               <p className="text-xs text-gray-500 mt-2 text-red-600">
//                 Maximum of 10 keywords can be added
//               </p>
//             </div>

//             <div className="flex justify-between items-center">
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
//                 placeholder="e.g. bitcoin, ethereum, ton"
//                 value={keywordInput}
//                 onChange={(e) => setKeywordInput(e.target.value)}
//               />
//               <div className="relative">
//                 <button
//                   type="button"
//                   className="absolute top-1/2 right-2 transform -translate-y-1/2 px-5 py-1 bg-gray-200 text-gray-700 rounded-md"
//                   onClick={handleAddKeyword}
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div>
//             <ul>
//               {keywords.map((keyword, index) => (
//                 <li key={index} className="text-gray-700 mb-1">
//                   {keyword}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center py-4 mt-40">
//         <button
//           type="button"
//           className="py-2 px-7 bg-purple-500 text-white rounded hover:bg-purple-600"
//           onClick={handleSubmit}
//         >
//           Create
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BrandMonitoringForm;
