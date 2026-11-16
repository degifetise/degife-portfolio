import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  User,
  Upload,
  Sparkles,
  LucideGitBranch,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
export default function Hero() {
  const [profileImage, setProfileImage] = useState(null);

  const roles = [
    "Junior Full-Stack Developer",
    "UI/UX Designer",
    "Building Scalable Web Apps",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const Credibility = [
    "Delivered full-stack solutions for local & remote clients",
    "Creator of <code>@degifetise/envdiff</code> (Open-Source)",
    "Open-source contributor to apps live on Google Play Store",
  ];

  return (
    <section
      id="overview"
      className="max-w-6xl mx-auto px-4 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 items-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="group relative cursor-pointer mb-6">
          <div className="w-40 h-40 rounded-full border-2 border-[#30363d] overflow-hidden bg-[#161b22] flex items-center justify-center shadow-xl">
            {profileImage ? (
              <img
                src={profileImage}
                alt="degife tise"
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-20 h-20 text-gray-500" />
            )}
          </div>
          <label className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-xs text-white transition cursor-pointer">
            <Upload className="w-5 h-5 mb-1" />
            Upload Photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
        <h1 className="text-3xl font-bold text-white">Degife Tise</h1>
        <p className="text-gray-400 text-sm mt-1">
          Hawassa, Ethiopia{" "}
          <span className="text-emerald-400 text-xs">(Remote Ready)</span>{" "}
        </p>
      </motion.div>

      <div className="mt-6 w-full space-y-2.5 text-xs text-gray-300 bg-[#161b22] border border-[#30363d] p-3.5 rounded-lg">
        {Credibility.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span dangerouslySetInnerHTML={{ __html: item }}></span>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:col-span-2 space-y-6"
      >
        <div className="inline-flex items-center gap-2 bg-[#21262d] border border-[#30363d] px-3 py-1 rounded-full text-xs text-slate-300">
          <Sparkles className="w-3.5 h-3.5" /> Available for Remote
          Opportunities & Full-Time Roles
        </div>

        <h2>
          Hi, I'm Degife. <br />
          <motion.span
            initial={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {displayedText}
          </motion.span>
        </h2>
        <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl font-light">
          Crafting high-performance web applications, robust database
          architectures, and intuitive digital experiences that solve real-world
          problems from Hawassa, Ethiopia.
        </p>

        <div className="flex flex-wrap gap-2 pt-1 text-xs text-gray-400">
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            React & Typescript
          </span>
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            Tailwind CSS & HTML/CSS
          </span>
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            Node.js & Express
          </span>
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            Supabase & PostgreSQL
          </span>
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            Git & GitHub
          </span>
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            CMD & PowerShell
          </span>
          <span className="bg-[#161b22] border border-[#30363d] px-2.5 py-1 rounded text-gray-300">
            MongoDB
          </span>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20saw%20your%20portfolio%20and%20want%20to%20hire%20you."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#2ea043] hover:bg-[#2c974b] px-5 py-2.5 rounded-md text-sm font-semibold text-white transition shadow-lg shadow-emerald-900/20"
          >
            <MessageSquare className="w-4 h-4" /> Let's Talk on WhatsApp{" "}
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://t.me/ima1123"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#229ED9] hover:bg-[#1f8cb9] px-5 py-2.5 rounded-md text-sm font-semibold text-white transition shadow-lg shadow-sky-900/20"
          >
            <MessageSquare className="w-4 h-4" /> Let's Talk on Telegram{" "}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/degifetise"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] px-4 py-2 rounded-md text-sm font-medium text-white transition"
          >
            <LucideGitBranch />
          </a>
          <a
            href="mailto:degifetise09@gmail.com"
            className="flex items-center gap-2 bg-[#2eaff] hover:bg-[#2c974b] px-4 py-2 rounded-md text-sm font-medium text-white transition"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
