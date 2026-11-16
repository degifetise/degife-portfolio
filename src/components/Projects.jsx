import {
  FolderGit2,
  ExternalLink,
  ChevronRight,
  Star,
  GitFork,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "High School Management & Smart ID",
      desc: "Production-ready school management system with four role-based dashboards (Admin, Teachers, Students, Parents), parent-child linking, gradebook analytics, and QR Smart ID cards.",
      tags: ["C#", ".NET(8)", "PostgreSQL", "Tailwind CSS"],
      language: "C#",
      langColor: "bg-blue-400",
      status: "Production Ready",
      live: "https://school-mgmt-api.vercel.app/",
      github: "https://github.com/degifetise",
    },
    {
      title: "Full Shop POS System",
      desc: "Production-ready multi-tenant point-of-sale and inventory management platform featuring role-based access control, expiry tracking, financial analytics, and offline queueing.",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      language: "TypeScript",
      langColor: "bg-blue-400",
      status: "Production Ready",
      live: "https://fully-shop-mgmt.vercel.app/",
      github: "https://github.com/degifetise/FullyShopMgmt-1",
    },
    {
      title: "@degifetise/envdiff",
      desc: "Open-source npm CLI package and companion web utility for comparing, validating, and sanitizing .env environment files safely on the client side.",
      tags: ["React", "npm", "Vite", "Node.js"],
      language: "javascript",
      langColor: "bg-blue-400",
      status: "UnderMaintenance",
      live: "https://www.npmjs.com/package/@degifetise/envdiff",
      github: "https://github.com/degifetise",
    },
    {
      title: "ArchivalX (EduScholar)",
      desc: "PERN-stack university research repository featuring thesis proposal workflows, faculty review controls, and automated duplicate topic detection.",
      tags: ["PostgreSQL", "Express", "React", "Node.js"],
      language: "JavaScript",
      langColor: "bg-yellow-400",
      status: "Public/under Developing",
      live: "https://degifetise.vercel.app",
      github: "https://github.com/degifetise",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-[#30363d]"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FolderGit2 className="w-7 h-7 text-purple-400" />
          <h2 className="text-2xl font-bold text-white">
            Featured Pinned Repositories
          </h2>
        </div>
        <a
          href="https://github.com/degifetise"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-400 hover:underline flex items-center gap-1"
        >
          View all on GitHub <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -3 }}
            className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 flex flex-col justify-between hover:border-gray-500 transition"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-gray-400 shrink-0" />
                  <h3 className="text-lg font-semibold text-blue-400 hover:underline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>
                <span className="text-[11px] bg-[#21262d] border border-[#30363d] px-2.5 py-0.5 rounded-full text-emerald-400 font-medium shrink-0">
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs bg-[#0d1117] text-gray-300 px-2.5 py-1 rounded-md border border-[#30363d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[#30363d]/60 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${project.langColor}`}
                    />
                    {project.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> Featured
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> Main
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-blue-400 hover:underline font-medium text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-white font-medium text-xs"
                  >
                    {/*  <Github className="w-3.5 h-3.5" /> Code */}
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
