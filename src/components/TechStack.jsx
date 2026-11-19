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
      color: "theme-blue-border theme-blue",
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
      color: "theme-green-border theme-green",
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
      color: "theme-purple-border theme-purple",
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
      color: "theme-amber-border theme-amber",
    },
  ];

  return (
    <section
      id="tech"
      className="theme-border max-w-6xl mx-auto border-t px-4 py-12"
    >
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="theme-amber h-7 w-7" />
        <h2 className="theme-text text-2xl font-bold">Tech Stack & Tools</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`theme-card theme-border rounded-lg border p-5 ${cat.color} transition-colors hover:opacity-90`}
          >
            <h3 className="theme-text theme-border mb-4 border-b pb-2 text-sm font-bold uppercase tracking-wider">
              {cat.title}
            </h3>
            <ul className="theme-body space-y-2.5 text-sm">
              {cat.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center gap-2">
                  <CheckCircle className="theme-green h-3.5 w-3.5 shrink-0" />
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
