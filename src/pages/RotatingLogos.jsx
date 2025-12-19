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
import { Link } from "react-router-dom";
// export const tracks = [
//   {
//     image: Ai,
//     title: "Artificial Intelligence",
//     description:
//       "By speeding up research, improving data processing, and spurring innovation in disciplines like biology, chemistry, physics, and medicine, artificial intelligence is revolutionizing science. It analyzes intricate data, finds patterns, and makes predictions that are difficult for people to do. AI enhances medication development, diagnostics, and customized therapies in medicine, and it helps with climate prediction and resource management in environmental science. AI increases research efficiency and creates new opportunities for discovery by automating chores and generating deeper insights. This has enormous potential to address global issues and advance human knowledge.",
//   },
//   {
//     image: communication,
//     title: "Communication",
//     description:
//       "In science and technology, sharing research with specialists and the general public, promoting collaboration, and expanding knowledge all depend on effective communication. It entails releasing research, converting difficult ideas into understandable language, and utilizing resources like webinars and digital media. Clear communication is essential in disciplines like environmental science, engineering, and medicine where it impacts sustainability, healthcare, and policy.",
//   },
//   {
//     image: Chemical,
//     title: "Chemical Engineering",
//     description:
//       "To design and optimize processes that transform raw materials into valuable products, chemical engineers mix concepts from chemistry, physics, mathematics, biology, and economics. It focuses on enhancing industrial methods, energy production, and sustainability and is crucial to sectors like chemicals, petrochemicals, medicines, food, and environmental protection.",
//   },
//   {
//     image: blockchain,
//     title: "Blockchain",
//     description:
//       "Blockchain is a decentralized digital ledger that ensures data security, transparency, and integrity by recording transactions across numerous computers. It was first developed for cryptocurrencies like Bitcoin but is now utilized in industries including digital identity verification, voting, healthcare, and supply chain management.",
//   },
//   {
//     image: industry,
//     title: "Industrial Engineering",
//     description:
//       "Optimizing systems and procedures to improve productivity, quality, and efficiency in the manufacturing, operations, and service sectors is the main goal of industrial engineering. Industrial engineers develop, analyze, and oversee systems involving people, materials, information, and equipment, striving for process improvement, waste reduction, cost reduction, and quality assurance.",
//   },
//   {
//     image: iot,
//     title: "Internet of Things",
//     description:
//       "Smarter systems are made possible by the Internet of Things (IoT), a network of connected devices that exchange information and communicate online. These devices gather and send data using sensors and software. IoT increases productivity, automates procedures, and facilitates real-time monitoring in industries like healthcare, transportation, agriculture, and smart cities.",
//   },
//   {
//     image: indu,
//     title: "Nuclear Engineering",
//     description:
//       "The use of nuclear processes, particularly for energy production through nuclear reactions, is the main focus of nuclear engineering. It involves designing, operating, and maintaining nuclear reactors, as well as technology for power generation, radiation protection, and safe handling of radioactive materials.",
//   },
//   {
//     image: It,
//     title: "Information Technology",
//     description:
//       "Utilizing computer systems, software, and networks to store, process, and analyze data supports research in a variety of subjects. IT enables large dataset management, simulation, system modeling, and international collaboration. IT is essential in fields like physics, genetics, and climate science, transforming how scientists tackle complex problems.",
//   },
//   {
//     image: BigData,
//     title: "Big Data",
//     description:
//       "Big data refers to enormous, intricate datasets produced by observations, experiments, and simulations that are too large for conventional techniques. In genomics, astronomy, climate science, and medicine, big data enables researchers to identify patterns and insights using AI, data mining, and machine learning, driving breakthroughs and discoveries.",
//   },
//   {
//     image: Robotics,
//     title: "Robotics",
//     description:
//       "Robotics involves the design and application of robots to perform repetitive, hazardous, or complex tasks. Used in industry, space exploration, medical, and environmental monitoring, robotics enhances efficiency, safety, and precision. Developments in AI and machine learning make robots more adaptive and autonomous.",
//   },
//   {
//     image: Auto,
//     title: "Automobile Engineering",
//     description:
//       "Automobile engineering focuses on the design, development, production, and testing of automobiles, trucks, and motorbikes. It integrates mechanics, thermodynamics, electronics, and materials science to create safe, efficient, and environmentally friendly vehicles, including electric drivetrains, autonomous systems, and infotainment technologies.",
//   },
//   {
//     image: marine,
//     title: "Marine Engineering",
//     description:
//       "Marine engineering focuses on designing, developing, and maintaining vessels and marine systems. Engineers work on engines, transmissions, navigation, and other ship components to ensure safety, efficiency, and sustainability in maritime operations.",
//   },
//   {
//     image: machine,
//     title: "Machine Learning",
//     description:
//       "Machine learning (ML) uses statistical models and algorithms to enable computers to learn from data and predict outcomes without explicit programming. ML analyzes large datasets, finds patterns, and generates insights in disciplines like biology, chemistry, physics, and environmental research, aiding in drug discovery and genomics.",
//   },
//   {
//     image: Aero,
//     title: "Aerospace Engineering",
//     description:
//       "Aerospace engineering includes aeronautical (aircraft) and astronautical (space) engineering, focusing on designing, developing, and operating air and space vehicles. Engineers develop propulsion systems, avionics, aerodynamics, and guidance systems to ensure performance, safety, and efficiency.",
//   },
//   {
//     image: Agric,
//     title: "Agriculture Engineering",
//     description:
//       "Agricultural engineering applies engineering principles to improve farming methods, address agriculture-related issues, and increase food production. It includes designing tools and systems for planting, harvesting, irrigation, and agricultural processing to boost productivity, crop yields, and sustainability.",
//   },
//   {
//     image: nano,
//     title: "Nano Engineering",
//     description:
//       "Nano engineering combines materials science, physics, and nanotechnology to create and modify materials and devices at the nanoscale (1–100 nm). It develops materials with special properties for high-performance applications, drug delivery systems, nanosensors, and advanced electronics.",
//   },
//   {
//     image: civil,
//     title: "Civil Engineering",
//     description:
//       "Civil engineering designs, builds, and maintains infrastructure like roads, bridges, buildings, water systems, and airports. It applies physics, mathematics, and materials science to ensure structures are safe, functional, and long-lasting, including environmental, geotechnical, and transportation engineering.",
//   },
//   {
//     image: mech,
//     title: "Mechanical Engineering",
//     description:
//       "Mechanical engineering is devoted to designing, analyzing, and producing mechanical systems. It integrates physics, thermodynamics, materials science, and mechanics to create machines and devices, from small components like gears to large systems like power plants and robotics.",
//   },
// ];
const routes = {
  about:"/about-Quantumtech-conclave",
  orators: "/Quantumtech-orators",
  home: "/",
  register: "https://helixconferences.com/buy-a-ticket",
  executive:"/executive-panel-members/",
  tracks: "/Quantumtech-conference-tracks/",
  venue: "/venue",
  schedule: "/Quantumtech-event-schedule",
  contact:"/contact",
};
export const tracks = [
  {
    image: Ai,
    title: "Quantum AI",
    description: (
      <>
        Explore the frontier where quantum computing meets artificial
        intelligence. <Link to={routes.about}>Quantum AI</Link> leverages quantum algorithms to accelerate machine learning, optimize complex problems, and revolutionize data analysis. Join experts uncovering transformative possibilities, from faster computations to breakthroughs in cryptography, healthcare, and beyond, shaping the next era of intelligent technology.
      </>
    ),
  },

  {
    image: communication,
    title: "Communication & Networking",
    description: (
      <>
        Explore the dynamic field of {" "}
        <Link to={routes.contact}>Communication and Networking</Link> where connectivity powers innovation. This track covers network architectures, protocols, wireless technologies, and data transmission strategies. Learn how seamless communication drives collaboration, IoT, cloud computing, and digital transformation, enabling faster, more reliable, and secure connections across industries worldwide.
      </>
    ),
  },

  {
    image: Chemical,
    title: "Core Quantum Science",
    description: (
      <>
      Dive into the fundamentals of quantum science, exploring the principles that govern the quantum realm. From superposition and entanglement to quantum materials and technologies, this track unveils the mysteries of the {" "}
        <Link to={routes.orators}>microscopic world</Link>,fostering insights that drive innovation in computing, communication, sensing, and the next generation of scientific discovery.
      </>
    ),
  },

  {
    image:"https://www.shutterstock.com/image-illustration/post-quantum-cryptography-resistant-shield-600nw-2572533271.jpg",
    title: "Cryptography & Cybersecurity",
    description: (
      <>
        Explore the cutting-edge of {" "}
        <Link to={routes.register}>Cryptography and Cybersecurity</Link>,where protecting data meets innovation. This track covers encryption, secure communication, threat detection, and risk mitigation strategies. Learn from experts about defending against cyber threats, safeguarding digital assets, and building resilient systems that ensure privacy, trust, and security in an increasingly connected world.
      </>
    ),
  },

  {
    image: industry,
    title: "Industry & Future",
    description: (
      <>
       Discover the {" "}
        <Link to={routes.contact}>Industry & Future</Link> track, exploring how emerging technologies shape tomorrow’s world. From quantum innovations to AI, automation, and sustainable solutions, this track examines trends transforming industries. Gain insights into future-ready strategies, cutting-edge applications, and the evolving landscape of science and technology that will define the next era of progress.
      </>
    ),
  },

  {
    image: iot,
    title: "Quantum Computation",
    description: (
      <>
        Unlock the future of computing with {" "}
        <Link to={routes.executive}>Quantum Computation</Link>. Explore quantum algorithms, qubits, and computational models that outperform classical systems. This track delves into solving complex problems, optimizing processes, and advancing simulations across industries. Join experts to understand how quantum computing is reshaping technology, innovation, and the limits of computation.
            </>
    ),
  },

  {
    image: indu,
    title: "Quantum Biology",
    description: (
      <>
       Delve into {" "}
        <Link to={routes.register}>Quantum Biology</Link>
        , where quantum principles illuminate life’s mysteries. Explore how quantum phenomena influence photosynthesis, enzyme activity, and cellular processes. This track uncovers the intersection of biology and quantum mechanics, offering insights into fundamental life processes and inspiring innovations in medicine, biotechnology, and our understanding of the natural world.


      </>
    ),
  },

  {
    image: It,
    title: "Software Development",
    description: (
      <>
Dive into the world of {" "}
        <Link to={routes.register}>Software Development</Link>
        where ideas transform into innovative applications. Explore programming, frameworks, agile methodologies, and best practices that drive efficient, scalable, and secure solutions. This track equips participants with the skills to build cutting-edge software, optimize workflows, and shape the future of technology across industries.
      </>
    ),
  },

  {
    image:"https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
    title: "Machine Learning",
    description: (
      <>
     Discover the transformative power of {" "}
        <Link to={routes.home}>Machine Learning</Link> , where data drives intelligent decisions. Explore algorithms, predictive modeling, and AI-driven insights that optimize industries, enhance automation, and unlock new possibilities. This track connects theory with real-world applications, empowering participants to harness data, innovate solutions, and shape the future of technology.
      </>
    ),
  },

  {
    image: Robotics,
    title: "Robotics & Automation",
    description: (
      <>
     <Link to={routes.home}>Robotics & Automation</Link> focuses on designing intelligent machines and automated systems that perform tasks with precision, speed, and efficiency. It covers robotics, control systems, AI-driven automation, and real-world applications across manufacturing, healthcare, logistics, and smart industries.
      </>
    ),
  },

  {
    image:"https://media.istockphoto.com/id/2149753998/photo/physics-quantum-and-quantum-entanglement-3d-rendering.jpg?s=612x612&w=0&k=20&c=AQIxkAxzwQC_jICCCeKA28IptXZl1MPpvvpSGiSDDy4=",
    title: "Optics & Photonics",
    description: (
      <>
      Explore the fascinating world of {" "}
        <Link to={routes.tracks}>Optics and Photonics</Link> where light drives innovation. This track covers lasers, fiber optics, imaging, and optical communication technologies. Learn how photonic systems revolutionize computing, healthcare, and   <Link to={routes.schedule }>telecommunications,</Link> enabling faster data transmission, advanced sensing, and groundbreaking research in science and technology.
      </>
    ),
  },

  {
    image:"https://bloximages.newyork1.vip.townnews.com/santafenewmexican.com/content/tncms/assets/v3/editorial/d/da/dda0d32a-bb90-50bc-81d8-ab4aaf370425/58733431bdd0c.image.jpg",
    title: "Quantum Cosmology",
    description: (
      <>
      Explore.{" "}
        <Link to={routes.schedule}>Quantum Cosmology</Link> , where quantum mechanics meets the universe’s origins. This track investigates the quantum nature of space-time, the Big Bang, black holes, and cosmic evolution. Discover how quantum theories provide insights into the universe’s fundamental structure, bridging cosmology, particle physics, and gravity, and reshaping our understanding of reality itself.
      </>
    ),
  },

  {
    image: machine,
    title: "Quantum Sensing and Metrology",
    description: (
      <>
        Discover{" "}
        <Link to={routes.orators}>Quantum Sensing and Metrology</Link> , where precision reaches unprecedented levels. Explore quantum-enhanced measurement techniques, sensors, and devices that surpass classical limits. This track highlights applications in navigation, medical imaging, and fundamental physics, demonstrating how quantum technologies are transforming measurement accuracy, enabling breakthroughs, and driving innovation across science and industry.
      </>
    ),
  },

  {
    image:"https://media.istockphoto.com/id/1130957259/photo/composition-with-tools-and-industrial-material-with-industrial-ship-background.jpg?s=612x612&w=0&k=20&c=XDZNptsfq3TASTKWGsmnDajREC820JuDQf9IyRanCsg=",
    title: "Materials & Devices",
    description: (
      <>
      Explore the Materials & Devices track, where innovation meets functionality. Delve into advanced materials, nanotechnology, and device engineering that drive breakthroughs in electronics, energy, and quantum technologies. Learn how cutting-edge materials enable next-generation devices, enhancing performance, efficiency, and sustainability across industries, shaping the future of {" "}
        <Link to={routes.venue}>science and technology</Link>.
      </>
    ),
  },

  {
    image: Agric,
    title: "Quantum Agriculture",
    description: (
      <>
       Explore{" "}
        <Link to={routes.executive}>Quantum Agriculture</Link>, where quantum technologies revolutionize farming and food production. This track examines precision agriculture, quantum sensing for soil and crop monitoring, and advanced modeling for sustainable yields. Discover how quantum innovations enhance efficiency, resource management, and environmental sustainability, shaping the future of agriculture and global food security.
      </>
    ),
  },

  {
    image: nano,
    title: "Quantum Chemistry",
    description: (
      <>
      Explore Quantum Chemistry, where quantum mechanics meets molecular science. This track delves into electronic structures, chemical reactions, and computational modeling at the quantum level. Discover how quantum approaches accelerate drug discovery, materials design, and chemical innovation, offering deeper insights into molecular behavior and shaping the future of {" "}
        <Link to={routes.home}>chemistry and technology.</Link>
      </>
    ),
  },

  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0420t0qZaLfkok56Xi40SW65iOzsvPUgAZA&s",
    title: "Quantum Applications",
    description: (
      <>
       Explore Quantum Applications, where theory meets real-world innovation. This track highlights practical uses {" "}
        <Link to={routes.venue}>quantum technologies</Link>across computing, communication, sensing, and cryptography. Learn how quantum solutions are transforming industries, solving complex problems, and enabling breakthroughs in healthcare, finance, and materials science, shaping the future of technology and scientific discovery.
      </>
    ),
  },

  {
    image: "https://quantumzeitgeist.com/wp-content/uploads/edukatin.jpg",
    title: "Quantum Education & Training",
    description: (
      <>
    
        <Link to={routes.home}>Quantum Education & Training</Link> dedicated to building the next generation of quantum experts. This track covers learning programs, workshops, and skill development in quantum technologies. Gain hands-on knowledge, practical insights, and theoretical foundations to drive innovation, empower careers, and shape the future of quantum science and its applications worldwide.
      </>
    ),
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
