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
    className="theme-border max-w-6xl mx-auto border-t px-4 py-12"
  >
    <div className="flex items-center gap-3 mb-8">
      <GraduationCap className="theme-blue h-7 w-7" />
      <h2 className="theme-text text-2xl font-bold">Education & Experience</h2>
    </div>

    <div className="theme-border ml-4 space-y-6 border-l-2 pl-6">
      {education.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="theme-card theme-border relative rounded-lg border p-5 transition-colors hover:opacity-90"
        >
          {/* Timeline Node Dot */}
          <div className="theme-inset absolute -left-8.25 top-6 h-4 w-4 rounded-full border-2 border-blue-500" />

          <span className="theme-blue text-xs font-semibold tracking-wide">
            {item.period}
          </span>
          <h3 className="theme-text mt-1 text-lg font-bold">{item.title}</h3>
          <p className="theme-green text-sm font-medium">{item.org}</p>
          <p className="theme-body mt-2 text-sm leading-relaxed">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);
}