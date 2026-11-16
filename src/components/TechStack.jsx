import { Cpu, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Vite",
        "Tailwind CSS",
        "HTML5 & CSS3",
        "Lucide React",
        "Framer Motion",
      ],
      color: "border-blue-500/30 text-blue-400",
    },
    {
      title: "Backend & Architecture",
      skills: [
        "Node.js",
        "Express.js",
        "C# (.NET Core)",
        "Entity Framework Core",
        "RESTful APIs",
        "Serverless Functions",
        "Authentication & RBAC",
      ],
      color: "border-emerald-500/30 text-emerald-400",
    },
    {
      title: "Databases & Storage",
      skills: [
        "PostgreSQL",
        "Supabase",
        "MongoDB",
        "MySQL",
        "Microsoft SQL Server",
        "Database Modeling",
        "Row Level Security (RLS)",
      ],
      color: "border-purple-500/30 text-purple-400",
    },
    {
      title: "Tools & Deployment",
      skills: [
        "Git & GitHub",
        "CMD & PowerShell",
        "VS Code & Cursor IDE",
        "Visual Studio",
        "Vercel & Render",
        "Postman & Axios",
        "npm Package Publishing",
      ],
      color: "border-amber-500/30 text-amber-400",
    },
  ];

  return (
    <section
      id="tech"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-[#30363d]"
    >
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="w-7 h-7 text-amber-400" />
        <h2 className="text-2xl font-bold text-white">Tech Stack & Tools</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-[#161b22] border rounded-lg p-5 ${cat.color} hover:border-gray-500 transition`}
          >
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider pb-2 border-b border-[#30363d]">
              {cat.title}
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
