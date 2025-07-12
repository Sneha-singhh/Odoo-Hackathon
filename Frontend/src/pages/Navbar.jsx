// import { useState } from 'react'
// import { Bell, User, X, Search } from 'lucide-react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   const [showSearch, setShowSearch] = useState(true)

//   return (
//     <header
//       className="flex justify-between items-center px-6 md:px-10 py-4 border-b border-purple-900 shadow-sm"
//       style={{ background: 'linear-gradient(135deg, #1e1b4b, #3f2d56)' }}
//     >
//       {/* Left: Logo & Nav Links */}
//       <div className="flex items-center gap-6">
//         <h1 className="text-xl font-bold text-white">StackIt</h1>
//         <div className="hidden md:flex gap-4">
//           <Link to="/" className="text-sm font-medium text-purple-200 hover:text-white transition">
//             Home
//           </Link>
//           <Link to="/tags" className="text-sm font-medium text-purple-200 hover:text-white transition">
//             Tags
//           </Link>
//         </div>
//       </div>

//       {/* Right: Search, Icons */}
//       <div className="flex items-center gap-4">
//         {showSearch ? (
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="h-10 w-40 md:w-60 px-4 rounded-lg bg-[#2b2b36] text-white placeholder:text-purple-300 border border-purple-700 focus:outline-none focus:border-purple-500"
//             />
//             <button
//               onClick={() => setShowSearch(false)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white"
//             >
//               <X size={18} />
//             </button>
//           </div>
//         ) : (
//           <button
//             onClick={() => setShowSearch(true)}
//             className="text-purple-300 hover:text-white transition"
//           >
//             <Search size={20} />
//           </button>
//         )}

//         {/* Notification Icon */}
//         <button className="text-purple-300 hover:text-white transition">
//           <Bell size={20} />
//         </button>

//         {/* User Icon */}
//         <button className="text-purple-300 hover:text-white transition">
//           <User size={20} />

//         </button>
//       </div>
//     </header>
//   )
// }



import { useState } from 'react';
import { Bell, User, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar({ isLoggedIn }) {
  const [showSearch, setShowSearch] = useState(true);

  return (
    <header
      className="flex justify-between items-center px-6 md:px-10 py-4 border-b border-purple-900 shadow-sm"
      style={{ background: 'linear-gradient(135deg, #1e1b4b, #3f2d56)' }}
    >
      {/* Left side */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold text-white">StackIt</h1>
        {isLoggedIn && (
          <div className="hidden md:flex gap-4">
            <Link to="/" className="text-sm font-medium text-purple-200 hover:text-white transition">Home</Link>
            <Link to="/tags" className="text-sm font-medium text-purple-200 hover:text-white transition">Tags</Link>
          </div>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <>
            {showSearch ? (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-10 w-40 md:w-60 px-4 rounded-lg bg-[#2b2b36] text-white placeholder:text-purple-300 border border-purple-700 focus:outline-none focus:border-purple-500"
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-purple-300 hover:text-white transition"
              >
                <Search size={20} />
              </button>
            )}

            <button className="text-purple-300 hover:text-white transition">
              <Bell size={20} />
            </button>

            <button className="text-purple-300 hover:text-white transition">
              <User size={20} />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
