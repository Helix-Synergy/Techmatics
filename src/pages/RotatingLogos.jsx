import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";

// Importing the images
import Agric from "../assets/tracks/Agri-engenerring.jpg";
import Aero from "../assets/tracks/Areospace-enegneering-02.jpg";
import Auto from "../assets/tracks/Automobile-engeneering.jpg";
import BigData from "../assets/tracks/Big-data.jpg";
import Chemical from "../assets/tracks/Chemical-engineering.jpg";
import civil from "../assets/tracks/civil-eng.jpg";
import communication from "../assets/tracks/Communication-1.jpg";
import industry from "../assets/tracks/Industrial-engeneering.jpg";
import It from "../assets/tracks/Information-Technology.jpg";
import blockchain from "../assets/tracks/m1.jpg";
import indu from "../assets/tracks/m2.jpg";
import Ai from "../assets/tracks/m3.jpg";
import machine from "../assets/tracks/machine-laerning.jpg";
import marine from "../assets/tracks/Marine-image-3.jpg";
import mech from "../assets/tracks/mech-.-image.jpg";
import nano from "../assets/tracks/nano-eng.jpg";
import Robotics from "../assets/tracks/Robotics.jpg";
import iot from "../assets/tracks/The-Internet-of-Things.jpg";

export const tracks = [
  {
    image: Ai,
    title: "Artificial Intelligence",
    description:
      "By speeding up research, improving data processing, and spurring innovation in disciplines like biology, chemistry, physics, and medicine, artificial intelligence is revolutionizing science. It analyzes intricate data, finds patterns, and makes predictions that are difficult for people to do. AI enhances medication development, diagnostics, and customized therapies in medicine, and it helps with climate prediction and resource management in environmental science. AI increases research efficiency and creates new opportunities for discovery by automating chores and generating deeper insights. This has enormous potential to address global issues and advance human knowledge.",
  },
  {
    image: communication,
    title: "Communication",
    description:
      "In science and technology, sharing research with specialists and the general public, promoting collaboration, and expanding knowledge all depend on effective communication. It entails releasing research, converting difficult ideas into understandable language, and utilizing resources like webinars and digital media. Clear communication is essential in disciplines like environmental science, engineering, and medicine where it impacts sustainability, healthcare, and policy.",
  },
  {
    image: Chemical,
    title: "Chemical Engineering",
    description:
      "To design and optimize processes that transform raw materials into valuable products, chemical engineers mix concepts from chemistry, physics, mathematics, biology, and economics. It focuses on enhancing industrial methods, energy production, and sustainability and is crucial to sectors like chemicals, petrochemicals, medicines, food, and environmental protection.",
  },
  {
    image: blockchain,
    title: "Blockchain",
    description:
      "Blockchain is a decentralized digital ledger that ensures data security, transparency, and integrity by recording transactions across numerous computers. It was first developed for cryptocurrencies like Bitcoin but is now utilized in industries including digital identity verification, voting, healthcare, and supply chain management.",
  },
  {
    image: industry,
    title: "Industrial Engineering",
    description:
      "Optimizing systems and procedures to improve productivity, quality, and efficiency in the manufacturing, operations, and service sectors is the main goal of industrial engineering. Industrial engineers develop, analyze, and oversee systems involving people, materials, information, and equipment, striving for process improvement, waste reduction, cost reduction, and quality assurance.",
  },
  {
    image: iot,
    title: "Internet of Things",
    description:
      "Smarter systems are made possible by the Internet of Things (IoT), a network of connected devices that exchange information and communicate online. These devices gather and send data using sensors and software. IoT increases productivity, automates procedures, and facilitates real-time monitoring in industries like healthcare, transportation, agriculture, and smart cities.",
  },
  {
    image: indu,
    title: "Nuclear Engineering",
    description:
      "The use of nuclear processes, particularly for energy production through nuclear reactions, is the main focus of nuclear engineering. It involves designing, operating, and maintaining nuclear reactors, as well as technology for power generation, radiation protection, and safe handling of radioactive materials.",
  },
  {
    image: It,
    title: "Information Technology",
    description:
      "Utilizing computer systems, software, and networks to store, process, and analyze data supports research in a variety of subjects. IT enables large dataset management, simulation, system modeling, and international collaboration. IT is essential in fields like physics, genetics, and climate science, transforming how scientists tackle complex problems.",
  },
  {
    image: BigData,
    title: "Big Data",
    description:
      "Big data refers to enormous, intricate datasets produced by observations, experiments, and simulations that are too large for conventional techniques. In genomics, astronomy, climate science, and medicine, big data enables researchers to identify patterns and insights using AI, data mining, and machine learning, driving breakthroughs and discoveries.",
  },
  {
    image: Robotics,
    title: "Robotics",
    description:
      "Robotics involves the design and application of robots to perform repetitive, hazardous, or complex tasks. Used in industry, space exploration, medical, and environmental monitoring, robotics enhances efficiency, safety, and precision. Developments in AI and machine learning make robots more adaptive and autonomous.",
  },
  {
    image: Auto,
    title: "Automobile Engineering",
    description:
      "Automobile engineering focuses on the design, development, production, and testing of automobiles, trucks, and motorbikes. It integrates mechanics, thermodynamics, electronics, and materials science to create safe, efficient, and environmentally friendly vehicles, including electric drivetrains, autonomous systems, and infotainment technologies.",
  },
  {
    image: marine,
    title: "Marine Engineering",
    description:
      "Marine engineering focuses on designing, developing, and maintaining vessels and marine systems. Engineers work on engines, transmissions, navigation, and other ship components to ensure safety, efficiency, and sustainability in maritime operations.",
  },
  {
    image: machine,
    title: "Machine Learning",
    description:
      "Machine learning (ML) uses statistical models and algorithms to enable computers to learn from data and predict outcomes without explicit programming. ML analyzes large datasets, finds patterns, and generates insights in disciplines like biology, chemistry, physics, and environmental research, aiding in drug discovery and genomics.",
  },
  {
    image: Aero,
    title: "Aerospace Engineering",
    description:
      "Aerospace engineering includes aeronautical (aircraft) and astronautical (space) engineering, focusing on designing, developing, and operating air and space vehicles. Engineers develop propulsion systems, avionics, aerodynamics, and guidance systems to ensure performance, safety, and efficiency.",
  },
  {
    image: Agric,
    title: "Agriculture Engineering",
    description:
      "Agricultural engineering applies engineering principles to improve farming methods, address agriculture-related issues, and increase food production. It includes designing tools and systems for planting, harvesting, irrigation, and agricultural processing to boost productivity, crop yields, and sustainability.",
  },
  {
    image: nano,
    title: "Nano Engineering",
    description:
      "Nano engineering combines materials science, physics, and nanotechnology to create and modify materials and devices at the nanoscale (1–100 nm). It develops materials with special properties for high-performance applications, drug delivery systems, nanosensors, and advanced electronics.",
  },
  {
    image: civil,
    title: "Civil Engineering",
    description:
      "Civil engineering designs, builds, and maintains infrastructure like roads, bridges, buildings, water systems, and airports. It applies physics, mathematics, and materials science to ensure structures are safe, functional, and long-lasting, including environmental, geotechnical, and transportation engineering.",
  },
  {
    image: mech,
    title: "Mechanical Engineering",
    description:
      "Mechanical engineering is devoted to designing, analyzing, and producing mechanical systems. It integrates physics, thermodynamics, materials science, and mechanics to create machines and devices, from small components like gears to large systems like power plants and robotics.",
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style>

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
