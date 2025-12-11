import React from 'react';
import { Link } from 'react-router-dom';
import { panel_members_about } from '../utils/Pannel Members/panel_members';
import PanelMemberCard from '../components/ui/PanelMemberCard';

const Epms_about = () => {

  return (
    <div className="flex flex-col px-4 md:px-12 py-8 min-h-[90vh] items-center justify-center my-8 ">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
    Executive Panel Members
      </h1>
      {/* <p className="w-full md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
        Renowned experts from across the globe sharing insights and leading the conversation at PHARMA TECH.
      </p> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mt-6">
        {panel_members_about.slice(0,4).map((item, idx) => (
          <PanelMemberCard
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>

      <Link to="/executive-panel-members/">
        <button className="bg-one text-white px-10 md:px-20 py-2 rounded-full mt-12 text-sm md:text-base">
          View All
        </button>
      </Link>
    </div>
  );
};

export default Epms_about;




// const Epms_about = () => {
//   return (
//     <div className="flex flex-col px-4 md:px-12 py-8 min-h-[90vh] items-center justify-center my-8">
//       <h1 className="text-2xl md:text-3xl font-bold text-center">
//         PHARMATECH - EPMs
//       </h1>
//       <p className="w-full md:w-2/3 my-2 text-center text-sm md:text-base text-slate-600">
//         Renowned experts from across the globe sharing insights and leading the conversation at PHARMATECH.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-full max-w-7xl">
//         {panel_members_about.slice(0, 4).map((item, idx) => (
//           <div key={idx} className="flex flex-col h-full">
//             <PanelMemberCard
//               name={item.name}
//               about={item.about}
//               from={item.from}
//               image={item.image}
//               link={item.link}
//             />
//           </div>
//         ))}
//       </div>

//       <Link to="/executive-panel-members/">
//         <button className="bg-one text-white px-10 md:px-20 py-2 rounded-full mt-12 text-sm md:text-base">
//           View All
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Epms_about;

