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
      langColor: "bg-blue-600",
      status: "Production Ready",
      live: "https://school-mgmt-api.vercel.app/",
      github: "https://github.com/degifetise",
    },
    {
      title: "Full Shop POS System",
      desc: "Production-ready multi-tenant point-of-sale and inventory management platform featuring role-based access control, expiry tracking, financial analytics, and offline queueing.",
      tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      language: "TypeScript",
      langColor: "bg-blue-600",
      status: "Production Ready",
      live: "https://fully-shop-mgmt.vercel.app/",
      github: "https://github.com/degifetise/FullyShopMgmt-1",
    },
    {
      title: "@degifetise/envdiff",
      desc: "Open-source npm CLI package and companion web utility for comparing, validating, and sanitizing .env environment files safely on the client side.",
      tags: ["React", "npm", "Vite", "Node.js"],
      language: "javascript",
      langColor: "bg-blue-600",
      status: "UnderMaintenance",
      live: "https://www.npmjs.com/package/@degifetise/envdiff",
      github: "https://github.com/degifetise",
    },
    {
      title: "ArchivalX (EduScholar)",
      desc: "PERN-stack university research repository featuring thesis proposal workflows, faculty review controls, and automated duplicate topic detection.",
      tags: ["PostgreSQL", "Express", "React", "Node.js"],
      language: "JavaScript",
      langColor: "bg-amber-600",
      status: "Public/under Developing",
      live: "https://degifetise.vercel.app",
      github: "https://github.com/degifetise",
    },
  ];

  return (
    <section
      id="projects"
      className="theme-border max-w-6xl mx-auto border-t px-4 py-12"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <FolderGit2 className="theme-purple h-7 w-7" />
          <h2 className="theme-text text-2xl font-bold">
            Featured Pinned Repositories
          </h2>
        </div>
        <a
          href="https://github.com/degifetise"
          target="_blank"
          rel="noreferrer"
          className="theme-link flex items-center gap-1 text-sm hover:underline"
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
            className="theme-card theme-border flex flex-col justify-between rounded-lg border p-6 transition-colors hover:opacity-90"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="theme-muted h-4 w-4 shrink-0" />
                  <h3 className="theme-link text-lg font-semibold hover:underline">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {project.title}
                    </a>
                  </h3>
                </div>
                <span className="theme-subtle theme-border theme-green shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-medium">
                  {project.status}
                </span>
              </div>

              <p className="theme-body mb-5 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="theme-inset theme-body theme-border rounded-md border px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="theme-muted theme-border flex items-center justify-between border-t pt-3 text-xs">
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
                    className="theme-link flex items-center gap-1 text-xs font-medium hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-body flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-70"
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
