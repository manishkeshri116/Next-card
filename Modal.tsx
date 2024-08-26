// import React, { useState } from 'react';

// const ConfirmationModal = ({ isVisible, onClose, onConfirm }) => {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">Are you sure you want to remove this project?</h2>
//         <div className="mb-4 bg-gray-100 rounded-xl p-4">
//           <div className="flex flex-col">
//             <p className="text-gray-800 flex flex-col ml-3">
//               Project name:
//               <span className="font-semibold">Crypto</span>
//             </p>
//             <p className="text-gray-800 ml-3 mt-2">Project keywords:</p>
//             <div className="flex flex-wrap gap-2 mt-2 ml-3">
//               <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">Bitcoin</span>
//               <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">TON</span>
//               <span className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full">Ethereum</span>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-between gap-4">
//           <button
//             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
//             onClick={onClose}
//             aria-label="Cancel removal">
//             Cancel
//           </button>
//           <button
//             className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
//             onClick={onConfirm}
//             aria-label="Confirm removal"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const handleOpenModal = () => setModalVisible(true);
//   const handleCloseModal = () => setModalVisible(false);
//   const handleConfirm = () => {
//     // Add your confirmation logic here
//     console.log('Project removed');
//     setModalVisible(false);
//   };

//   return (
//     <div className="p-4">
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//         onClick={handleOpenModal}
//       >
//         Show Confirmation Modal
//       </button>
//       <ConfirmationModal
//         isVisible={isModalVisible}
//         onClose={handleCloseModal}
//         onConfirm={handleConfirm}
//       />
//     </div>
//   );
// };

// export default App;
