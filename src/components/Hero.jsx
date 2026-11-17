import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  const roles = [
    "Full-Stack Developer",
    "Open Source Contributor",
    "Building Scalable Web Apps",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  const Credibility = [
    "Delivered full-stack solutions for local & remote clients",
    "Creator of <code>@degifetise/envdiff</code> (Open-Source)",
    "Open-source contributor to apps live on Google Play Store",
  ];

  const techBadges = [
    "React & TypeScript",
    "Tailwind CSS & HTML/CSS",
    "Node.js & Express",
    "Supabase & PostgreSQL",
    "Git & GitHub",
    "CMD & PowerShell",
    "MongoDB",
  ];

  return (
    <section
      id="overview"
      className="max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-14 border-b border-[#30363d] grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start"
    >
      {/* Left Column (1/3): Profile Avatar, Name & Credibility Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full border-2 border-[#30363d] overflow-hidden bg-[#161b22] shadow-xl mb-4">
          <img
            src="/profile.jpg"
            alt="Degife Tise"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
          Degife Tise
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Hawassa, Ethiopia{" "}
          <span className="text-emerald-400 text-xs font-medium">
            (Remote Ready)
          </span>
        </p>

        {/* Credibility Box nested cleanly inside Left Column */}
        <div className="mt-5 w-full space-y-2.5 text-xs text-gray-300 bg-[#161b22] border border-[#30363d] p-4 rounded-lg text-left">
          {Credibility.map((item, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Column (2/3): Availability Badge, Typewriter Intro, Stack & CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="md:col-span-2 space-y-5 md:pt-2"
      >
        <div className="inline-flex items-center gap-2 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-full text-xs text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Available for Remote Opportunities & Full-Time Roles</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
          Hi, I'm Degife. <br />
          <span className="text-emerald-400">
            {displayedText}
            <span className="animate-pulse text-white ml-0.5">|</span>
          </span>
        </h2>

        <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
          Crafting high-performance web applications, robust database
          architectures, and intuitive digital experiences that solve real-world
          problems from Hawassa, Ethiopia.
        </p>

        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          {techBadges.map((badge, idx) => (
            <span
              key={idx}
              className="bg-[#161b22] border border-[#30363d] px-3 py-1.5 rounded-md text-gray-300"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#2ea043] hover:bg-[#2c974b] px-4 py-2.5 rounded-md text-sm font-semibold text-white transition shadow-lg shadow-emerald-900/20"
          >
            <MessageSquare className="w-4 h-4" /> Let's Talk on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://t.me/ima1123"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#229ED9] hover:bg-[#1f8cb9] px-4 py-2.5 rounded-md text-sm font-semibold text-white transition shadow-lg shadow-sky-900/20"
          >
            <MessageSquare className="w-4 h-4" /> Let's Talk on Telegram
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/degifetise"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] px-4 py-2.5 rounded-md text-sm font-medium text-white transition"
          >
            GitHub
          </a>

          <a
            href="mailto:degifetise09@gmail.com"
            className="flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] px-4 py-2.5 rounded-md text-sm font-medium text-white transition"
          >
            <Mail className="h-4 w-4 text-gray-300" /> Email Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
 