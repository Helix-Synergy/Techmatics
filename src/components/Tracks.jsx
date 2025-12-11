import React from 'react';
import { tracks } from '../utils/Tracks/tracks';
import { Link } from 'react-router-dom';

const TracksSection = () => {
  // const navigate = useNavigate();

  return (
  <div className="py-6 px-4 md:py-12 md:px-6 bg-one/20 h-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
      TECHMATICS - Tracks
    </h2>

    {/* Responsive Grid for Track Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {tracks.map(({ name, icon }, idx) => (
        <div
          key={idx}
          className="flex flex-row items-center gap-4 px-4 py-4 rounded-lg shadow hover:shadow-lg hover:border-one transition-all bg-white border border-transparent cursor-pointer"
        >
          <img
            src={icon}
            alt=""
            className="h-8 w-8 object-contain shrink-0"
            loading="lazy"
          />
          <p className="text-sm font-medium text-gray-800">
            {name}
          </p>
        </div>
      ))}
    </div>

    {/* Call-to-action Buttons */}
    <div className=" mt-10 md:mt-10 flex flex-col md:flex-row gap-4 justify-center">
      <Link to="/techmatics-conference-tracks/" >
        <button className="bg-one text-white px-6 md:px-4 py-2 rounded-full text-sm md:text-base w-full md:w-auto text-center">
          Read More
        </button>
      </Link>
      <Link to="/abstract-submission">
        <button className="border bg-black text-white px-6 md:px-4 py-2 rounded-full text-sm md:text-base w-full md:w-auto text-center">
          Submit Abstract
        </button>
      </Link>
    </div>
  </div>
);

};

export default TracksSection;
// import React from 'react';
// import { tracks } from '../utils/Tracks/tracks';
// import { Link } from 'react-router-dom';

// const TracksSection = () => {
//   return (
//     <div className="py-6 px-4 md:py-12 md:px-6 bg-one/20 h-auto">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
//         TECHMATICS - Tracks
//       </h2>

//       {/* Responsive Grid for Track Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {tracks.map(({ name, icon }, idx) => (
//           <div
//             key={idx}
//             className="
//               flex flex-col items-center justify-between
//               px-4 py-6 rounded-lg shadow-lg hover:shadow-xl 
//               hover:border-one transition-all duration-300 bg-white 
//               border border-gray-200 cursor-pointer 
//               h-64 w-full
//             "
//           >
            
//             {/* Fixed-size Image Container with consistent sizing */}
//             <div className="
//               h-40 w-full mb-4 
//               flex items-center justify-center 
//               overflow-hidden rounded-md
//               bg-gray-50
//             ">
//               <img
//                 src={icon}
//                 alt={name}
//                 className="
//                   h-full w-full 
//                   object-contain 
//                   p-2
//                 "
//                 loading="lazy"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = "https://via.placeholder.com/150x150?text=Image";
//                 }}
//               />
//             </div>

//             {/* Track Name */}
//             <p className="
//               text-base font-semibold text-gray-800 
//               text-center h-12 flex items-center justify-center
//               px-2
//             ">
//               {name}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Call-to-action Buttons */}
//       <div className="mt-10 md:mt-12 flex flex-col md:flex-row gap-4 justify-center">
//         <Link to="/techmatics-conference-tracks/">
//           <button className="
//             bg-one text-white px-8 md:px-6 py-3 
//             rounded-full text-sm md:text-base 
//             w-full md:w-auto text-center
//             hover:bg-one/90 transition-colors
//           ">
//             Read More
//           </button>
//         </Link>
//         <Link to="/abstract-submission">
//           <button className="
//             border-2 border-black bg-black text-white 
//             px-8 md:px-6 py-3 rounded-full text-sm md:text-base 
//             w-full md:w-auto text-center
//             hover:bg-gray-800 hover:border-gray-800 transition-colors
//           ">
//             Submit Abstract
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TracksSection;