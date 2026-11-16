import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default  function Education() {
const education = [
  {
    title: "B.Sc. in Information Technology",
    org: "Hawassa University",
    period: "2024 — Expected 2027",
    desc: "Focusing on software engineering principles, database management systems, computer networking, and full-stack web architecture.",
  },
  {
    title: "Software Engineering Intern",
    org: "Hawassa University ICT Center",
    period: "Aug 2026 — Sep 2026",
    desc: "Architected and built a unified campus event management system using ASP.NET Core MVC, Entity Framework Core, C#, and MySQL with role-based access control.",
  },
  {
    title: "Junior Full-Stack Developer",
    org: "Freelance & Local Business Solutions",
    period: "2025 — Present",
    desc: "Delivering production-ready school management platforms with QR Smart IDs, multi-tenant shop/pharmacy POS systems, and open-source developer tools.",
  },
];

return (
  <section
    id="education"
    className="max-w-6xl mx-auto px-4 py-12 border-t border-[#30363d]"
  >
    <div className="flex items-center gap-3 mb-8">
      <GraduationCap className="w-7 h-7 text-blue-400" />
      <h2 className="text-2xl font-bold text-white">Education & Experience</h2>
    </div>

    <div className="space-y-6 border-l-2 border-[#30363d] ml-4 pl-6">
      {education.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative bg-[#161b22] border border-[#30363d] rounded-lg p-5 hover:border-gray-500 transition"
        >
          {/* Timeline Node Dot */}
          <div className="absolute -left-[33px] top-6 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-[#58a6ff]" />

          <span className="text-xs text-blue-400 font-semibold tracking-wide">
            {item.period}
          </span>
          <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
          <p className="text-sm font-medium text-emerald-400">{item.org}</p>
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
}