// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// const questions = [
//   {
//     category: "Technology",
//     title: "How to implement a responsive navigation bar in a React application?",
//     description:
//       "I'm working on a React project and need to create a navigation bar that adapts to different screen sizes. What are the best practices and techniques to achieve this?",
//     upvotes: 12,
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuCfQcv2L7vYapEEqg64ISJKk5uuAf3yrzpaPck9vXxfFPkcRacoXTuYWE1dTTgs_38ZJEoX4uqp4SSoMKicIH1U0ZGYc_-eDsFhIk3ZFytIl5HeXDFSWysZwQx9O8iFgMSNTpYrdPuUJYsu4y4kxwKtgVRIllu1cPzUaFuzX_OJgZDz6tHGvTGw_QTO3YediW5-z63chyJH8EE1hbqM5pgIKlJv1vDYnnZHIZIPHrVdmnVthxGwPJCDC0lP-YPzwc-HRoU0_c5HwOgJ",
//   },
//   {
//     category: "Technology",
//     title: "Best practices for handling asynchronous operations in JavaScript",
//     description:
//       "I'm looking for recommendations on how to manage async code with promises and async/await. What patterns should I follow?",
//     upvotes: 8,
//     image:
//      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfQcv2L7vYapEEqg64ISJKk5uuAf3yrzpaPck9vXxfFPkcRacoXTuYWE1dTTgs_38ZJEoX4uqp4SSoMKicIH1U0ZGYc_-eDsFhIk3ZFytIl5HeXDFSWysZwQx9O8iFgMSNTpYrdPuUJYsu4y4kxwKtgVRIllu1cPzUaFuzX_OJgZDz6tHGvTGw_QTO3YediW5-z63chyJH8EE1hbqM5pgIKlJv1vDYnnZHIZIPHrVdmnVthxGwPJCDC0lP-YPzwc-HRoU0_c5HwOgJ",
//   },
// ];

// const LandingPage = () => {
//   return (
//     <div
//       className="min-h-screen text-white font-sans"
//       style={{
//         background: "linear-gradient(135deg, #1e1b4b, #3f2d56)",
//       }}
//     >
//       {/* Header */}
//       {/* <header className="flex justify-between items-center px-10 py-4 border-b border-purple-900">
//         <div className="flex items-center gap-4">
//           <h1 className="text-xl font-bold text-white">StackIt</h1>
//           <Link to="/" className="text-sm font-medium text-purple-200 hover:text-white">
//           </Link>
//         </div>
//         <div className="flex items-center gap-4">
//           <Link
//             to="/login"
//             className="bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium"
//           >
//             Signup
//           </Link>
//           <div
//             className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-purple-700"
//             style={{
//               backgroundImage: "url('https://i.pravatar.cc/300?img=68')",
//             }}
//           ></div>
//         </div>
//       </header> */}
//       <Navbar/>

//       {/* Main Content */}
//       <main className="max-w-5xl mx-auto px-6 py-8">
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-3xl font-bold text-white">Questions</h2>
//           <button className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm">
//             Ask New Question
//           </button>
//         </div>

//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search questions"
//             className="w-full bg-[#2a1f4d] text-white placeholder-purple-300 px-4 py-2 rounded-lg focus:outline-none"
//           />
//         </div>

//         <div className="flex gap-3 flex-wrap mb-6">
//           {["All", "Unanswered", "Most Voted", "Newest", "Oldest"].map(
//             (filter) => (
//               <button
//                 key={filter}
//                 className="bg-[#2a1f4d] hover:bg-purple-800 text-sm px-4 py-1.5 rounded-lg"
//               >
//                 {filter}
//               </button>
//             )
//           )}
//         </div>

//         {/* Questions List */}
//         <div className="space-y-6">
//           {questions.map((q, index) => (
//             <div
//               key={index}
//               className="flex gap-6 bg-[#2a1f4d] hover:bg-[#3b2a61] transition p-5 rounded-lg shadow-md"
//             >
//               <div className="flex-1 flex flex-col justify-between gap-3">
//                 <div>
//                   <p className="text-purple-300 text-sm">{q.category}</p>
//                   <h3 className="text-lg font-bold">{q.title}</h3>
//                   <p className="text-purple-100 text-sm">{q.description}</p>
//                 </div>
//                 <button className="bg-purple-700 w-fit px-4 py-1.5 rounded-lg text-sm hover:bg-purple-600">
//                   Upvote ({q.upvotes})
//                 </button>
//               </div>
//               <div
//                 className="w-48 h-28 rounded-lg bg-cover bg-center"
//                 style={{ backgroundImage: "url($`{q.image}`)" }}
//               ></div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

// Simulate user login status
const isLoggedIn = false;

const questions = [
  {
    category: "Technology",
    title: "How to implement a responsive navigation bar in a React application?",
    description:
      "I'm working on a React project and need to create a navigation bar that adapts to different screen sizes. What are the best practices and techniques to achieve this?",
    upvotes: 12,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfQcv2L7vYapEEqg64ISJKk5uuAf3yrzpaPck9vXxfFPkcRacoXTuYWE1dTTgs_38ZJEoX4uqp4SSoMKicIH1U0ZGYc_-eDsFhIk3ZFytIl5HeXDFSWysZwQx9O8iFgMSNTpYrdPuUJYsu4y4kxwKtgVRIllu1cPzUaFuzX_OJgZDz6tHGvTGw_QTO3YediW5-z63chyJH8EE1hbqM5pgIKlJv1vDYnnZHIZIPHrVdmnVthxGwPJCDC0lP-YPzwc-HRoU0_c5HwOgJ",
  },
  {
    category: "Technology",
    title: "Best practices for handling asynchronous operations in JavaScript",
    description:
      "I'm looking for recommendations on how to manage async code with promises and async/await. What patterns should I follow?",
    upvotes: 8,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfQcv2L7vYapEEqg64ISJKk5uuAf3yrzpaPck9vXxfFPkcRacoXTuYWE1dTTgs_38ZJEoX4uqp4SSoMKicIH1U0ZGYc_-eDsFhIk3ZFytIl5HeXDFSWysZwQx9O8iFgMSNTpYrdPuUJYsu4y4kxwKtgVRIllu1cPzUaFuzX_OJgZDz6tHGvTGw_QTO3YediW5-z63chyJH8EE1hbqM5pgIKlJv1vDYnnZHIZIPHrVdmnVthxGwPJCDC0lP-YPzwc-HRoU0_c5HwOgJ",
  },
];

const LandingPage = () => {
  return (
    <div
      className="min-h-screen text-white font-sans"
      style={{
        background: "linear-gradient(135deg, #1e1b4b, #3f2d56)",
      }}
    >
      {/* Navbar with auth-aware display */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Title + Ask Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Questions</h2>
          <button className="bg-purple-800 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm">
            Ask New Question
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search questions"
            className="w-full bg-[#2a1f4d] text-white placeholder-purple-300 px-4 py-2 rounded-lg focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap mb-6">
          {["All", "Unanswered", "Most Voted", "Newest", "Oldest"].map(
            (filter) => (
              <button
                key={filter}
                className="bg-[#2a1f4d] hover:bg-purple-800 text-sm px-4 py-1.5 rounded-lg"
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((q, index) => (
            <div
              key={index}
              className="flex gap-6 bg-[#2a1f4d] hover:bg-[#3b2a61] transition p-5 rounded-lg shadow-md flex-col md:flex-row"
            >
              <div className="flex-1 flex flex-col justify-between gap-3">
                <div>
                  <p className="text-purple-300 text-sm">{q.category}</p>
                  <h3 className="text-lg font-bold">{q.title}</h3>
                  <p className="text-purple-100 text-sm">{q.description}</p>
                </div>
                <button className="bg-purple-700 w-fit px-4 py-1.5 rounded-lg text-sm hover:bg-purple-600">
                  Upvote ({q.upvotes})
                </button>
              </div>
              <div
                className="w-full md:w-48 h-28 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${q.image})` }}
              ></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
