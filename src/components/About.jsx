import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="theme-border max-w-6xl mx-auto border-t px-4 py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Fixed lowercase 'opacity'
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="theme-card theme-border overflow-hidden rounded-lg border shadow-sm"
      >
        <div className="theme-subtle theme-border theme-body flex items-center justify-between border-b px-4 py-3 text-sm">
          <div className="flex items-center gap-2">
            <FolderGit2 className="theme-blue h-4 w-4" />
            <span>degifetise</span>
          </div>
          <span className="theme-muted text-xs">Public Profile Overview</span>
        </div>

        <div className="theme-body space-y-6 p-6 leading-relaxed lg:p-8">
          <div>
            <h3 className="theme-text mb-2 text-xl font-bold">
              👋 Welcome to my developer space
            </h3>
            <p className="mb-3">
              I am a 23-year-old Information Technology student at Hawassa
              University and an active full-stack web developer. I enjoy turning
              complex operational challenges into clean, secure, and
              lightning-fast digital solutions.
            </p>
            <p>
              My tech stack spans React, TypeScript, Tailwind CSS, Node.js,
              Express, C# (.NET), PostgreSQL, MongoDB, and Supabase. Whether
              building production-ready high school management systems featuring
              QR Smart IDs and four role-based dashboards (Admin, Teachers,
              Students, and Parents), multi-tenant shop management system and open-source developer utilities like{" "}
              <code>@degifetise/envdiff</code>, I focus on performance,
              security, and intuitive user experiences.
            </p>
          </div>

          <div className="theme-inset theme-border overflow-x-auto rounded-lg border p-4">
            <div className="theme-muted mb-3 flex items-center justify-between text-xs">
              <span className="theme-text font-semibold">
                Live GitHub Contribution Activity
              </span>
              <a
                href="https://github.com/degifetise"
                target="_blank"
                rel="noreferrer"
                className="theme-link hover:underline"
              >
                @degifetise ↗
              </a>
            </div>

            <div className="w-full flex justify-center py-2">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=degifetise&theme=github&hide_border=true&color=0969da&bg_color=ffffff&line=1f6feb&point=1a7f37&area=true&area_color=2da44e"
                alt="My Real-Time GitHub Activity Graph"
                className="w-full max-w-4xl rounded object-contain dark:hidden"
              />
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=degifetise&theme=github-dark&hide_border=true&color=39d353&bg_color=0d1117&line=58a6ff&point=39d353&area=true&area_color=238636"
                alt="My Real-Time GitHub Activity Graph"
                className="hidden w-full max-w-4xl rounded object-contain dark:block"
              />
            </div>
            <div className="theme-muted mt-3 flex items-center justify-between text-[11px]">
              <span>
                Automatically syncs with my public GitHub commits & activity
              </span>
              <span className="theme-green font-medium">
                ● Live syncing
              </span>
            </div>
          </div>
          <p className="theme-muted text-xs">
            My Active contributions across full-stack web engineering and
            open-source repositories.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
