import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  HeartPulse,
  SmilePlus,
  Dna,
  Video,
  Globe,
  Biohazard,
  Radiation,
  Star,
  User,
  BookOpen,
  Stethoscope,
  PackageSearch,
 Rocket 
} from "lucide-react";
import { banner_style } from "../Styles/styles";

const data = {
  event: {
    title: "About Us",
    date: "25th - 27th Nov 2025",
    organizer: "Helix Conferences",
    description: [
      <>
Step into the world of innovation and excellence at the International Engineering and Technology Summit in Osaka, Japan. This premier event unites engineers, technologists, industry pioneers, and researchers to explore the latest breakthroughs and emerging trends across multiple disciplines. Our goal is to inspire collaboration, ignite innovation, and drive meaningful progress in engineering and technology.
      </>,
      <>
        From cutting-edge AI to advanced robotics, from cybersecurity trends to sustainable engineering—we curate thought-provoking content and create immersive spaces where innovation thrives. Explore our sessions to engage with the future of technology, exchange ideas with global experts, and drive impactful solutions across industries.{" "}
        <Link
          to="https://pharmatech.helixconferences.com/pharmaceutical-conference-tracks/"
          target="blank"
          rel="noopener noreferrer"
          className="text-accent font-bold"
        >
          
        </Link>{" "}
       
      </>,
    ],
  },

  whyAttend: [
    "Attending our Pharma Conferences offers unmatched opportunities for growth and global exposure. Join industry pioneers and innovators as they present groundbreaking insights.",
    "Connect with world-class researchers and companies showcasing disruptive technology and science.",
    "Engage with regulators, policymakers, and ethics leaders shaping the future of pharma globally.",
    "Gain actionable knowledge on regulatory compliance, drug discovery, and therapeutic innovation.",
    "Be part of a movement focused on shaping the next era of pharmaceutical development and access.",
  ],

  aboutHelix: [
    "Helix Conferences has earned international recognition for organizing premium pharma and healthcare events. We design our conferences with a focus on strategic insights, regulatory trends, and scientific breakthroughs to ensure attendees leave with real-world knowledge and partnerships.",
  ],

  whoShouldAttend: [
    "Pharma professionals and researchers",
    "Biotech and clinical R&D experts",
    "Regulatory affairs and compliance officers",
    "Academicians and industry consultants",
    "Students and early-career scientists in pharma",
  ],

  join: [
    "Join us at the 2026 PharmaTech Summit to experience the fusion of science, strategy, and solution-driven innovation. Be part of the conversations that are transforming drug discovery, safety, and delivery at scale.",
  ],

  themes: [
    {
      icon: Brain,
      title: "Pharmacology",
      description:
        "Exploring Drug Action: Foundations and Frontiers in Pharmacology",
    },
    {
      icon: HeartPulse,
      title: "Pharmaceutics",
      description: "Innovations in Drug Formulation and Delivery Systems",
    },
    {
      icon: SmilePlus,
      title: "Pharmacognosy",
      description:
        "Natural Products and Herbal Drug Discovery in Modern Medicine",
    },
    {
      icon: Dna,
      title: "Pharmacovigilance",
      description:
        "Ensuring Drug Safety: Global Perspectives in Pharmacovigilance",
    },
    {
      icon: Video,
      title: "Pharma Regulatory Affairs",
      description:
        "Navigating Compliance: Regulatory Affairs in a Global Market",
    },
    {
      icon: Globe,
      title: "Traditional Medicine",
      description:
        "Integrating Ancient Wisdom with Modern Therapeutics",
    },
    {
      icon: Biohazard,
      title: "Pharma Chemistry",
      description:
        "Chemical Foundations of Drug Design and Synthesis",
    },
    {
      icon: Radiation,
      title: "Pharma Analysis",
      description:
        "Analytical Techniques in Pharmaceutical Quality Control",
    },
  ],

  highlights: [
 {
    title: "Keynote Speakers",
    description: "Tech leaders, innovators, and entrepreneurs share expert insights on emerging technologies and industry trends",
  },
  {
    title: "Panel Discussions",
    description: "Debates and discussions on AI, digital transformation, tech ethics, and future innovation",
  },
  {
    title: "Live Demonstrations",
    description: "See cutting-edge software, AI tools, robotics, and tech solutions in action",
  },
  {
    title: "Innovation Labs",
    description: "Hands-on experience with new technologies, prototypes, and startup solutions",
  },
  {
    title: "Poster Presentations",
    description: "Showcase research findings, tech projects, and innovative ideas from academia and startups",
  },
  {
    title: "Workshops",
    description: "Practical training on AI, machine learning, software development, cloud computing, and more",
  },
  {
    title: "Partnership Zones",
    description: "Connect with tech brands, investors, and potential collaborators for strategic partnerships",
  },
  {
    title: "Awards & Recognition",
    description: "Celebrate excellence in technology, innovation, and entrepreneurial achievements",
  },
],


  dates: {
    eventDate: "25th-27th Nov 2025",
    venue: "Novotel Valencia, Spain",
    registrationDeadline: "1st Nov 2025",
  },
};


const AboutPublicHealth = () => {
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
     <div
  className={`${banner_style} w-full mx-auto about-banner`}
  style={{
    backgroundImage: "url('https://techmatics.helixconferences.com/wp-content/uploads/2024/12/The-Internet-of-Things-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
          {data.event.title}
        </h1>
      </div>

      <h1 className="text-4xl mt-2 font-bold text-one">
        A CONFERENCE ON TECHMATICS-2026
      </h1>
      <p className="text-center text-gray-600 text-3xl mb-6">
        <strong>
          24<sup>th</sup> - 25<sup>th</sup> Sep 2026
        </strong>
      </p>

      {data.event.description.map((desc, idx) => (
        <p
          key={idx}
          className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
        >
          {desc}
        </p>
      ))}

      {/* Why Attend Section */}
      {/* <section className="mb-10 text-center w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-one mb-4">Why Attend the 2025 Oral Medicine Conference?</h2>
        {data.whyAttend.map((para, idx) => (
          <p key={idx} className="mb-3 text-base text-gray-700 text-center w-full">
            {para}
          </p>
        ))}
      </section> */}

      {/* About Helix Section */}
      {/* <section className="mb-10 text-center w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-one mb-4">Helix Conferences: Leading the Way in Event Organization</h2>
        {data.aboutHelix.map((para, idx) => (
          <p key={idx} className="mb-3 text-base text-gray-700 text-center w-full">
            {para}
          </p>
        ))}
      </section> */}

      {/* Who Should Attend Section */}
      {/* <section className="mb-10 text-center w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-one mb-4">Who Can Attend?</h2>
        <ul className="list-disc list-inside text-base text-gray-700 text-center w-full">
          {data.whoShouldAttend.map((item, idx) => (
            <li key={idx} className="mb-2">{item}</li>
          ))}
        </ul>
      </section> */}

      {/* Join Section */}
      <section className="mb-10 text-center w-full min-w-4xl px-2 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-one mb-4 w-full">
          Join the Global Community at TECHMATICS Conference 2026
        </h2>
        {data.join.map((para, idx) => (
          <p
            key={idx}
            className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
          >
            {para}
          </p>
        ))}
      </section>

      {/* Themes Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl my-8 font-bold text-one">Who Can Attend...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <User className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
            IT Professionals & Software Developers
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <BookOpen className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Academics & Researchers
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <Rocket className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
         Tech Entrepreneurs & Startups
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <PackageSearch className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
             Business & Technology Consultants
            </h3>
          </div>
          {/* <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <GraduationCap className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Students and trainees in dentistry and related fields</h3>
          </div> */}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl font-bold text-one mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 text-md text-gray-800 text-left flex items-start shadow-sm "
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
              <div className="flex flex-wrap items-start">
                <h3 className="font-semibold whitespace-nowrap mr-1">
                  {highlight.title} –
                </h3>
                <p className="text-md text-gray-600 flex-1">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dates Section */}
      {/* <section className="mb-16 text-center w-full md:px-12 px-4">
        <h2 className="text-4xl font-bold text-one mb-8">
          Important Dates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Calendar className="w-6 h-6 text-one mb-2" />
            <strong>Event Date</strong>
            <p>{data.dates.eventDate}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Globe className="w-6 h-6 text-one mb-2" />
            <strong>Proposed Venue</strong>
            <p>{data.dates.venue}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <BadgeCheck className="w-6 h-6 text-one mb-2" />
            <strong>Registration Deadline</strong>
            <p>{data.dates.registrationDeadline}</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPublicHealth;

