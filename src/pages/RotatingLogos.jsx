import React, { useEffect,useState } from "react";
import { Sparkle} from "lucide-react";


// import pharmacology from "../assets/tracks/pharmacology.jpg";
// import pharmaceutics from "../assets/tracks/pharmaceutics.jpg";
// import pharmaBiotechnology from "../assets/tracks/pharmaBiotechnology.jpg";
import pharmacognosy from "../assets/tracks/pharmacognosy.jpg";
import pharmacovigilance from "../assets/tracks/pharmacovigilance.jpg";
// import regulatoryAffairs from "../assets/tracks/regulatoryAffairs.jpg";
import traditionalMedicine from "../assets/tracks/traditionalMedicine.jpg";
import pharmaChemistry from "../assets/tracks/pharmaChemistry.jpg";
import pharmaAnalysis from "../assets/tracks/pharmaAnalysis.jpg";
import clinicalResearch from "../assets/tracks/clinicalResearch.jpg";
import drugDesigning from "../assets/tracks/drugDesigning.jpg";
import clinicalPathology from "../assets/tracks/clinicalPathology.jpg";
import pharmacotherapeutics from "../assets/tracks/pharmacotherapeutics.jpg";
import precisionMedicine from "../assets/tracks/precisionMedicine.jpg";
import pharmacoepidemiology from "../assets/tracks/pharmacoepidemiology.jpg";
import curativeTherapeutics from "../assets/tracks/curativeTherapeutics.jpg";
import pharmacoEconomics from "../assets/tracks/pharmacoEconomics.jpg";
import pharmaEthics from "../assets/tracks/pharmaEthics.jpg";
// Importing the images 
import Agric from "../assets/tracks/Agri-engenerring.jpg"
import Aero from "../assets/tracks/Areospace-enegneering-02.jpg"
import Auto from "../assets/tracks/Automobile-engeneering.jpg"
import BigData from "../assets/tracks/Big-data.jpg"
import Chemical from "../assets/tracks/Chemical-engineering.jpg"
import civil from "../assets/tracks/civil-eng.jpg"
import communication from "../assets/tracks/Communication-1.jpg"
import industry from "../assets/tracks/Industrial-engeneering.jpg"
import It from "../assets/tracks/Information-Technology.jpg"
import blockchain from "../assets/tracks/m1.jpg"
import indu from "../assets/tracks/m2.jpg"
import Ai from "../assets/tracks/m3.jpg"
import machine from "../assets/tracks/machine-laerning.jpg"
import marine from "../assets/tracks/Marine-image-3.jpg"
import mech from "../assets/tracks/mech-.-image.jpg"
import nano from "../assets/tracks/nano-eng.jpg"
import Robotics from "../assets/tracks/Robotics.jpg"
import iot from "../assets/tracks/The-Internet-of-Things.jpg"


// export const tracks = [
//   {
//     image: pharmacognosy,
//     title: "Artificial Intelligence",
//     // subtitle: "Natural Drug Sources",
//     description:
//      "By speeding up research, improving data processing, and spurring innovation in disciplines like biology, chemistry, physics, and medicine, artificial intelligence is revolutionizing science. It analyzes intricate data, finds patterns, and makes predictions that are difficult for people to do. AI enhances medication development, diagnostics, and customized therapies in medicine, and it helps with climate prediction and resource management in environmental science. AI increases research efficiency and creates new opportunities for discovery by automating chores and generating deeper insights. This has enormous potential to address global issues and advance human knowledge."
//   },
//   {
//     image: pharmacovigilance,
//     title: "Pharmacovigilance",
//     subtitle: "Drug Safety Monitoring",
//     description:
//       "Pharmacovigilance involves monitoring, detecting, and assessing adverse effects of Pharmaceutical Drugs. It ensures Medication safety by identifying risks like Side effects, Overdose, and Drug misuse. This track is critical in maintaining Public health, reducing harm, and guiding Regulatory decisions throughout a Drug’s lifecycle.",
//   },
//   {
//     image: traditionalMedicine,
//     title: "Traditional Medicine",
//     subtitle: "Ancient Healing Practices",
//     description:
//       "Traditional Medicine draws from Centuries-old Cultural practices using Herbs, Minerals, and Spiritual therapies. It integrates Holistic healing to prevent and treat Diseases naturally. This track promotes Alternative Medicine's role in Modern Healthcare by studying Traditional Diagnostic methods and Plant-based Therapeutic systems across Global cultures.",
//   },
//   {
//     image: pharmaChemistry,
//     title: "Pharmaceutical Chemistry",
//     subtitle: "Drug Molecule Design",
//     description:
//       "Pharmaceutical Chemistry blends Organic Chemistry, Biochemistry, and Pharmacology to develop and optimize Drug compounds. It plays a key role in Drug discovery, Quality control, and Formulation. This track emphasizes creating safe, Stable, and Effective Medications with desired Therapeutic outcomes for diverse Patient populations.",
//   },
//   {
//     image: pharmaAnalysis,
//     title: "Pharmaceutical Analysis",
//     subtitle: "Drug Quality Testing",
//     description:
//       "Pharmaceutical Analysis uses Analytical techniques to Identify, Measure, and Ensure the Purity and Composition of Drugs. It supports Quality control, Structural characterization, and Regulatory compliance. This track ensures Medications meet Safety and Efficacy standards throughout Manufacturing and Post-market surveillance processes.",
//   },
//   {
//     image: clinicalResearch,
//     title: "Clinical Research",
//     subtitle: "Trial and Evaluation",
//     description:
//       "Clinical Research investigates new Drugs through Preclinical and Clinical trial phases. It evaluates Safety, Efficacy, and Dosage in Human populations. This track emphasizes Protocol development, Data analysis, and Regulatory compliance, playing a Pivotal role in Translating Scientific discoveries into Approved Therapeutic interventions.",
//   },
//   {
//     image: drugDesigning,
//     title: "Drug Designing",
//     subtitle: "Targeted Molecule Creation",
//     description:
//       "Drug Designing involves creating Therapeutic molecules that interact with Biological targets like Enzymes or Receptors. Using Computational modeling, Molecular docking, and Structure-activity relationships, this track enables Researchers to optimize Drug Efficacy and minimize Side effects through Precise Chemical structure modifications.",
//   },
//   {
//     image: clinicalPathology,
//     title: "Clinical Pathology",
//     subtitle: "Diagnostic Sample Analysis",
//     description:
//       "Clinical Pathology analyzes Bodily fluids and Tissues to Diagnose Diseases and Monitor Drug effects. It provides Essential data for Evaluating Treatment safety and Effectiveness. This track links Pharmaceutical sciences with Diagnostic Medicine, guiding Personalized Treatment strategies and Improving Patient care outcomes with proper care.",
//   },
//   {
//     image: pharmacotherapeutics,
//     title: "Pharmacotherapeutics",
//     subtitle: "Disease-Focused Treatment",
//     description:
//       "Pharmacotherapeutics focuses on using Drugs to treat Diseases effectively. It integrates Pharmacology and Clinical care to Select optimal Medications, Dosages, and Regimens. This track emphasizes Personalized Treatment planning, Monitoring Therapeutic outcomes, and Minimizing Side effects to Enhance Patient well-being and Clinical success.",
//   },
//   {
//     image: precisionMedicine,
//     title: "Precision Medicine",
//     subtitle: "Tailored Drug Therapy",
//     description:
//       "Precision Medicine uses Genetic, Environmental, and Lifestyle data to Personalize Treatments. In Pharmacy, it Enhances Drug selection and Dosage accuracy, Reducing Adverse effects and Maximizing Efficacy. This track supports Innovations in Oncology, Cardiology, and Rare Diseases, Transforming One-size-fits-all care into Individualized Therapeutic solutions.",
//   },
//   {
//     image: pharmacoepidemiology,
//     title: "Pharmacoepidemiology",
//     subtitle: "Drug Use in Populations",
//     description:
//       "Pharmacoepidemiology studies how Drugs are used and their Effects across Populations. It evaluates Drug Safety, Usage patterns, and Health outcomes, Integrating Pharmacology and Epidemiology. This track provides Essential data for Improving Public Health, Guiding Regulatory decisions, and Supporting Safe, Effective Medication practices Globally.",
//   },
//   {
//     image: curativeTherapeutics,
//     title: "Curative Therapeutics",
//     subtitle: "Illness-Curing Treatments",
//     description:
//       "Curative Therapeutics aims to Eliminate Diseases at their Source, Offering Complete Recovery rather than Symptom control. This track explores Treatments like Antibiotics, Antivirals, and Cancer therapies that Target Root causes. Pharmacists ensure these Therapies are used Effectively and Safely to achieve Optimal Health outcomes.",
//   },
//   {
//     image: pharmacoEconomics,
//     title: "Pharmaco Economics",
//     subtitle: "Drug Cost Effectiveness",
//     description:
//       "Pharmaco Economics assesses the Economic impact of Medications by Comparing Costs to Clinical outcomes. It Informs Policy decisions, Resource allocation, and Treatment prioritization. This track supports Sustainable Healthcare by Evaluating Drug value, Optimizing Spending, and Improving Patient access to Affordable, Effective Therapies.",
//   },
//   {
//     image: pharmaEthics,
//     title: "Pharma Ethics",
//     subtitle: "Ethical Drug Practices",
//     description:
//       "Pharmaceutical Ethics ensures that Drug Development, Distribution, and Patient care follow Moral and Legal standards. This track emphasizes Informed consent, Patient rights, Research integrity, and Equitable access. Pharmacists and Researchers are Guided by Ethical principles to Prioritize Safety, Transparency, and Trust in Healthcare.",
//   },
// ];
export const tracks = [
  {
    image:Ai,
    title: "Artificial Intelligence",
    description:
      "By speeding up research, improving data processing, and spurring innovation in disciplines like biology, chemistry, physics, and medicine, artificial intelligence is revolutionizing science. It analyzes intricate data, finds patterns, and makes predictions that are difficult for people to do. AI enhances medication development, diagnostics, and customized therapies in medicine, and it helps with climate prediction and resource management in environmental science. AI increases research efficiency and creates new opportunities for discovery by automating chores and generating deeper insights. This has enormous potential to address global issues and advance human knowledge."
  },
  {
    image: communication,
    title: "Communication",
    description:
      "In science and technology, sharing research with specialists and the general public, promoting collaboration, and expanding knowledge all depend on effective communication. It entails releasing research, converting difficult ideas into understandable language, and utilizing resources like webinars and digital media. Clear communication is essential in disciplines like environmental science, engineering, and medicine where it impacts sustainability, healthcare, and policy."
  },
  {
    image:Chemical,
    title: "Chemical Engineering",
    description:
      "To design and optimize processes that transform raw materials into valuable products, chemical engineers mix concepts from chemistry, physics, mathematics, biology, and economics. It focuses on enhancing industrial methods, energy production, and sustainability and is crucial to sectors like chemicals, petrochemicals, medicines, food, and environmental protection."
  },
  {
    image: blockchain,
    title: "Blockchain",
    description:
      "Blockchain is a decentralized digital ledger that ensures data security, transparency, and integrity by recording transactions across numerous computers. It was first developed for cryptocurrencies like Bitcoin but is now utilized in industries including digital identity verification, voting, healthcare, and supply chain management."
  },
  {
    image: industry,
    title: "Industrial Engineering",
    description:
      "Optimizing systems and procedures to improve productivity, quality, and efficiency in the manufacturing, operations, and service sectors is the main goal of industrial engineering. Industrial engineers develop, analyze, and oversee systems involving people, materials, information, and equipment, striving for process improvement, waste reduction, cost reduction, and quality assurance."
  },
  {
    image: iot,
    title: "Internet of Things",
    description:
      "Smarter systems are made possible by the Internet of Things (IoT), a network of connected devices that exchange information and communicate online. These devices gather and send data using sensors and software. IoT increases productivity, automates procedures, and facilitates real-time monitoring in industries like healthcare, transportation, agriculture, and smart cities."
  },
  {
    image: indu,
    title: "Nuclear Engineering",
    description:
      "The use of nuclear processes, particularly for energy production through nuclear reactions, is the main focus of nuclear engineering. It involves designing, operating, and maintaining nuclear reactors, as well as technology for power generation, radiation protection, and safe handling of radioactive materials."
  },
  {
    image: It,
    title: "Information Technology",
    description:
      "Utilizing computer systems, software, and networks to store, process, and analyze data supports research in a variety of subjects. IT enables large dataset management, simulation, system modeling, and international collaboration. IT is essential in fields like physics, genetics, and climate science, transforming how scientists tackle complex problems."
  },
  {
    image: BigData,
    title: "Big Data",
    description:
      "Big data refers to enormous, intricate datasets produced by observations, experiments, and simulations that are too large for conventional techniques. In genomics, astronomy, climate science, and medicine, big data enables researchers to identify patterns and insights using AI, data mining, and machine learning, driving breakthroughs and discoveries."
  },
  {
    image: Robotics,
    title: "Robotics",
    description:
      "Robotics involves the design and application of robots to perform repetitive, hazardous, or complex tasks. Used in industry, space exploration, medical, and environmental monitoring, robotics enhances efficiency, safety, and precision. Developments in AI and machine learning make robots more adaptive and autonomous."
  },
  {
    image:Auto,
    title: "Automobile Engineering",
    description:
      "Automobile engineering focuses on the design, development, production, and testing of automobiles, trucks, and motorbikes. It integrates mechanics, thermodynamics, electronics, and materials science to create safe, efficient, and environmentally friendly vehicles, including electric drivetrains, autonomous systems, and infotainment technologies."
  },
  {
    image: marine,
    title: "Marine Engineering",
    description:
      "Marine engineering focuses on designing, developing, and maintaining vessels and marine systems. Engineers work on engines, transmissions, navigation, and other ship components to ensure safety, efficiency, and sustainability in maritime operations."
  },
  {
    image: machine,
    title: "Machine Learning",
    description:
      "Machine learning (ML) uses statistical models and algorithms to enable computers to learn from data and predict outcomes without explicit programming. ML analyzes large datasets, finds patterns, and generates insights in disciplines like biology, chemistry, physics, and environmental research, aiding in drug discovery and genomics."
  },
  {
    image: Aero,
    title: "Aerospace Engineering",
    description:
      "Aerospace engineering includes aeronautical (aircraft) and astronautical (space) engineering, focusing on designing, developing, and operating air and space vehicles. Engineers develop propulsion systems, avionics, aerodynamics, and guidance systems to ensure performance, safety, and efficiency."
  },
  {
    image: Agric,
    title: "Agriculture Engineering",
    description:
      "Agricultural engineering applies engineering principles to improve farming methods, address agriculture-related issues, and increase food production. It includes designing tools and systems for planting, harvesting, irrigation, and agricultural processing to boost productivity, crop yields, and sustainability."
  },
  {
    image: nano,
    title: "Nano Engineering",
    description:
      "Nano engineering combines materials science, physics, and nanotechnology to create and modify materials and devices at the nanoscale (1–100 nm). It develops materials with special properties for high-performance applications, drug delivery systems, nanosensors, and advanced electronics."
  },
  {
    image: civil,
    title: "Civil Engineering",
    description:
      "Civil engineering designs, builds, and maintains infrastructure like roads, bridges, buildings, water systems, and airports. It applies physics, mathematics, and materials science to ensure structures are safe, functional, and long-lasting, including environmental, geotechnical, and transportation engineering."
  },
  {
    image: mech,
    title: "Mechanical Engineering",
    description:
      "Mechanical engineering is devoted to designing, analyzing, and producing mechanical systems. It integrates physics, thermodynamics, materials science, and mechanics to create machines and devices, from small components like gears to large systems like power plants and robotics."
  }
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
        <div
          className="fixed top-[22%] right-[1%] z-50 transition-custom"
        >
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