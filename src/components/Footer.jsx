
// import React from "react";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
// import { socialLinks, WhatsAppIcon } from "../utils/Quick Links/Links";
// import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

// const Footer = () => {
//   const nav_links = [
//     { name: "About", link: "/about-global-pharmaceutical-conclave/" },
//     { name: "Executive Panel", link: "/executive-panel-members/" },
//     { name: "Tracks", link: "/pharmaceutical-conference-tracks/" },
//     { name: "Orators", link: "/world-pharmaceutical-summit-orators" },
//     { name: "Schedule", link: "/pharmaceutical-event-schedule" },
//     { name: "Venue", link: "/venue" },
//     { name: "Event Partners", link: "/event_partners" },
//     { name: "Contact", link: "/Contact" },
//   ];

//   return (
//     <div className="flex flex-col rounded-t-2xl md:flex-row md:justify-between bg-black px-4 sm:px-6 md:px-12 py-8 md:py-10 text-white gap-10 md:gap-6 items-start md:items-stretch">
      
//       {/* Grid 1 */}
//       <div className="w-full md:w-1/4 flex flex-col mt-[10px] items-center md:items-start text-center md:text-left gap-4">
//         <div className="bg-white pt-10 p-4 rounded-xl">
//           <img
//             src={logo}
//             alt="Pharma Tech Logo"
//             className="h-32 w-48  sm:h-32 md:h-[180px] object-cover rounded-xl"
//             loading="lazy"
//           />
//         </div>
//         {/* <p className="text-slate-200 text-sm px-4 md:px-0 max-w-xs">
//           Global Health Equity: Expanding Access to Medicines & Vaccines.
//         </p> */}
//       </div>

//       {/* Grid 2 */}
//       <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
//         <h1 className="text-one font-semibold text-2xl sm:text-3xl border-b border-slate-800 w-full pb-1">
//           Quick Links
//         </h1>
//         <div className="flex flex-col justify-evenly  mt-6 gap-[10px] w-full">
//           {nav_links.map((item, idx) => (
//             <div key={idx} className="flex flex-row gap-1 justify-center md:justify-start items-center text-sm sm:text-base">
//               <ChevronRight size={16} />
//               <Link to={item.link}>{item.name}</Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Grid 3 */}
//       <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
//         <h1 className="text-one font-semibold text-2xl sm:text-3xl border-b border-slate-800 w-full pb-1">
//           Social Media
//         </h1>
//         <div className="flex flex-col mt-4 gap-2 w-full">
//           {socialLinks.map(({ id, name, url, icon }) => (
//             <div key={id} className="flex flex-row items-center justify-center md:justify-start">
//               <Link
//                 to={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={name}
//                 className="text-one p-2 rounded-full text-md cursor-pointer flex flex-row items-center gap-2"
//               >
//                 {icon}<p className="text-white">{name}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Grid 4 */}
//       <div className="w-full md:w-1/4 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
//         <h1 className="text-one font-semibold text-2xl sm:text-3xl border-b border-slate-800 w-full pb-1">
//           Get In Touch
//         </h1>
//         <div className="flex flex-col gap-6 text-slate-300 w-full">
//           {/* <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
//             <Phone size="18" />
//             <p>+1757 656 7778</p>
//           </div> */}
//           <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
//             <WhatsAppIcon className="h-5 w-5 fill-slate-300" />
//             <p>+1715 990 5583</p>
//           </div>
//           <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
//             <Mail size="18" />
//             <p>hello@helixconferences.com</p>
//           </div>
//           <div className="flex flex-row gap-2 items-start justify-center md:justify-start px-4 md:px-0 text-sm sm:text-base">
//             <MapPin size="44" />
//             <p className="text-left">
//               Helix Conferences LLC,
//               <br />
//                45573 Shepard Drive, Suit#101,<br />
//               Sterling, Virginia-20164, USA
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col">
//           <Link to="https://helixconferences.com/buy-a-ticket" target="blank" className="bg-one px-8 sm:px-12 py-2 rounded-full mt-1 text-sm sm:text-base">
//             Register
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { socialLinks, WhatsAppIcon } from "../utils/Quick Links/Links";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const nav_links = [
    { name: "About", link: "/about-techmatics-conclave" },
    { name: "Executive Panel", link: "/executive-panel-members/" },
    { name: "Tracks", link: "/techmatics-conference-tracks/"},
    { name: "Orators", link: "/techmatics-orators" },
    { name: "Schedule", link: "/techmatics-event-schedule"},
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <div className="flex flex-col rounded-t-2xl md:flex-row md:justify-between bg-[#6D6D6D] px-4 sm:px-6 md:px-12 py-8 md:py-10 text-white gap-10 md:gap-6 items-start md:items-stretch">

      {/* Grid 1 */}
      <div className="w-full md:w-1/4 flex flex-col mt-[10px] items-center md:items-start text-center md:text-left gap-4">
        <div className="bg-[#A1A1A1] pt-10 p-4 rounded-xl">
          <img
            src={logo}
            alt="Pharma Tech Logo"
            className="h-32 w-48  sm:h-32 md:h-[180px] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
      </div>

      {/* Grid 2 */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[#E0E0E0] font-semibold text-2xl sm:text-3xl border-b border-[#949494] w-full pb-1">
          Quick Links
        </h1>
        <div className="flex flex-col justify-evenly mt-6 gap-[10px] w-full">
          {nav_links.map((item, idx) => (
            <div key={idx} className="flex flex-row gap-1 justify-center md:justify-start items-center text-sm sm:text-base text-white">
              <ChevronRight size={16} />
              <Link to={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 3 */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-[#E0E0E0] font-semibold text-2xl sm:text-3xl border-b border-[#949494] w-full pb-1">
          Social Media
        </h1>
        <div className="flex flex-col mt-4 gap-2 w-full">
          {socialLinks.map(({ id, name, url, icon }) => (
            <div key={id} className="flex flex-row items-center justify-center md:justify-start">
              <Link
                to={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="text-white p-2 rounded-full text-md cursor-pointer flex flex-row items-center gap-2"
              >
                {icon}<p className="text-white">{name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 4 */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <h1 className="text-[#E0E0E0] font-semibold text-2xl sm:text-3xl border-b border-[#949494] w-full pb-1">
          Get In Touch
        </h1>
        <div className="flex flex-col gap-6 text-[#E8E8E8] w-full">

          <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
            <WhatsAppIcon className="h-5 w-5 fill-[#E8E8E8]" />
            <p>+1-305-239-8055</p>
          </div>

          <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
            <Mail size="18" />
            <p>hello@helixconferences.com</p>
          </div>

          <div className="flex flex-row gap-2 items-start justify-center md:justify-start px-4 md:px-0 text-sm sm:text-base">
            <MapPin size="44" />
            <p className="text-left">
              Helix Conferences LLC,<br />
              45573 Shepard Drive, Suit#101,<br />
              Sterling, Virginia-20164, USA
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <Link
            to="https://helixconferences.com/buy-a-ticket"
            target="blank"
            className="bg-[#4F4F4F] px-8 sm:px-12 py-2 rounded-full mt-1 text-sm sm:text-base text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

