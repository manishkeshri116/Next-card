// import React, { useState } from 'react';

// const MainComponent = () => {
//   const [projectName, setProjectName] = useState('Crypto');
//   const [keywords, setKeywords] = useState(['Bitcoin', 'TON', 'Ethereum']);
//   const [status, setStatus] = useState('Project successfully created!');

//   const handleStart = () => {
//     // Add functionality to start retrieving mentions here.
//     console.log('Starting to retrieve mentions for', projectName);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen w-9/12 bg-gray-50">
//       <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
//         <ProjectDetails projectName={projectName} status={status} />
//         <KeywordTags keywords={keywords} />
//         <ActionButton handleStart={handleStart} />
//       </div>
//     </div>
//   );
// };

// const ProjectDetails = ({ projectName, status }) => (
//   <div className="flex flex-col ">
//     <div className="text-green-500 text-4xl mb-4 mt-14">
//       {/* SVG Icon */}
//       <svg width="50px" height="50px" viewBox="0 -3.5 170 170" fill="none" xmlns="http://www.w3.org/2000/svg">
//         {/* SVG path here */}
//       </svg>
//     </div>
//     <h2 className="text-xl font-semibold text-gray-800 mb-4">{status}</h2>
//     <p className="text-gray-600 mb-6">
//       Phlanx is now retrieving all relevant mentions from the internet for your new project <span className="font-semibold text-green-500">{projectName}</span>.
//       Brand mentions will start by quickly finding results from the last 30 days.
//     </p>
//     <div className="bg-gray-100 p-4 rounded-lg mb-4">
//       <div className="mb-2">
//         <span className="font-semibold flex">Project name: </span>{projectName}
//       </div>
//       <div className="mb-2">
//         <span className="font-semibold">Project keywords: </span>
//       </div>
//     </div>
//   </div>
// );

// const KeywordTags = ({ keywords }) => (
//   <div className="flex space-x-2">
//     {keywords.map((keyword, index) => (
//       <span key={index} className="px-3 py-1 bg-white border rounded-full shadow-sm">
//         {keyword}
//       </span>
//     ))}
//   </div>
// );

// const ActionButton = ({ handleStart }) => (
//   <div className="flex justify-center py-4 mt-40">
//     <button className="py-2 px-12 bg-purple-900 text-white rounded-md hover:bg-purple-600" onClick={handleStart}>
//       Let's Start
//     </button>
//   </div>
// );

// export default MainComponent;
