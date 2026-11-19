import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Mail,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const ROLES = [
  "Full-Stack Developer...",
  "Workflow Automation Builder...",
  "Building Scalable Web Apps...",
];

const CREDIBILITY_ITEMS = [
  { text: "Delivered full-stack solutions for local & remote clients" },
  {
    beforeCode: "Creator of ",
    code: "@degifetise/envdiff",
    afterCode: " (Open-Source)",
  },
  { text: "Open-source contributor to apps live on Google Play Store" },
];

const TECH_BADGES = [
  "React & Next.js",
  "TypeScript & Tailwind CSS",
  "Node.js & Express",
  "PostgreSQL & Supabase",
  "C# & .NET",
  "Workflow Automation",
  "Git & GitHub",
  "MongoDB & MySQL",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = ROLES[roleIndex];

    if (!isDeleting && displayedText === currentPhrase) {
      const pauseTimer = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayedText === "") {
      const nextTimer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, 250);
      return () => clearTimeout(nextTimer);
    }

    const delay = isDeleting ? 65 : 105;
    const typingTimer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentPhrase.slice(0, prev.length - 1)
          : currentPhrase.slice(0, prev.length + 1),
      );
    }, delay);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="overview"
      aria-label="Introduction and Overview"
      className="theme-border max-w-6xl mx-auto grid grid-cols-1 items-start gap-8 border-b px-4 pt-10 pb-14 md:grid-cols-3 lg:gap-12 lg:px-8"
    >
      {/* Left Column (1/3): Profile Avatar, Name & Credibility Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="theme-card theme-border mb-4 h-36 w-36 overflow-hidden rounded-full border-2 shadow-xl lg:h-44 lg:w-44">
          <img
            src="/profile.jpg"
            alt="Degife Tise portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="theme-text text-2xl font-bold tracking-tight lg:text-3xl">
          Degife Tise
        </h1>
        <p className="theme-muted mt-1 text-sm">
          Hawassa, Ethiopia{" "}
          <span className="theme-green text-xs font-medium">
            (Remote Ready)
          </span>
        </p>

        {/* Credibility Box nested cleanly inside Left Column */}
        <div className="theme-card theme-border theme-body mt-5 w-full space-y-2.5 rounded-lg border p-4 text-left text-xs">
          {CREDIBILITY_ITEMS.map((item, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <CheckCircle className="theme-green mt-0.5 h-4 w-4 shrink-0" />
              <span className="leading-relaxed">
                {item.text ? (
                  item.text
                ) : (
                  <>
                    {item.beforeCode}
                    <code className="rounded bg-black/10 dark:bg-white/10 px-1 py-0.5 text-[11px]">
                      {item.code}
                    </code>
                    {item.afterCode}
                  </>
                )}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right Column (2/3): Availability Badge, Typewriter Intro, Stack & CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        className="md:col-span-2 space-y-5 md:pt-2"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-700/40 bg-[#238636] px-3 py-1 text-xs text-white">
          <Sparkles className="h-3.5 w-3.5 text-white" />
          <span>Available for Remote Roles, Freelance &amp; Agency Builds</span>
        </div>

        <h2 className="theme-text text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
          Hi, I&apos;m Degife. <br />
          <span className="theme-green">
            {displayedText}
            <span className="theme-text ml-0.5 animate-pulse">|</span>
          </span>
        </h2>

        <p className="theme-body max-w-2xl text-base leading-relaxed">
          Building scalable web applications, reliable database architectures,
          and practical workflow automations that turn operational bottlenecks
          into clean digital products from Hawassa, Ethiopia.
        </p>

        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          {TECH_BADGES.map((badge, idx) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.18 + idx * 0.035 }}
              whileHover={{ y: -2 }}
              className="theme-card theme-border theme-body rounded-md border px-3 py-1.5 cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/251924275434?text=Hi%20Degife,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect."
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md bg-[#166534] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-colors hover:bg-[#15803d]"
          >
            <MessageSquare className="w-4 h-4" /> Let&apos;s Talk on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="https://t.me/ima1123"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-md bg-[#087ea4] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 transition-colors hover:bg-[#066b8c]"
          >
            <MessageSquare className="w-4 h-4" /> Let&apos;s Talk on Telegram
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/degifetise"
            target="_blank"
            rel="noreferrer"
            className="theme-subtle theme-border theme-text flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:opacity-80"
          >
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:degifetise09@gmail.com"
            className="theme-subtle theme-border theme-text flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors hover:opacity-80"
          >
            <Mail className="theme-body h-4 w-4" /> Email Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
