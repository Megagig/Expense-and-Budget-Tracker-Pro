import { SignInButton } from '@clerk/nextjs';

const Guest = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Please login to manage your finances</p>
      <SignInButton />
    </div>
  );
};

export default Guest;
// import { SignInButton } from '@clerk/nextjs';

// const Guest = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">
//           Expense & Budget Tracker Pro!
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Please login to manage your finances, track your expenses, and create
//           budgets with ease.
//         </p>
//         <SignInButton>
//           <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
//             Sign In
//           </button>
//         </SignInButton>
//         <p className="mt-4 text-gray-500">
//           Don't have an account?{' '}
//           <a href="/register" className="text-blue-500 hover:underline">
//             Register here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Guest;
