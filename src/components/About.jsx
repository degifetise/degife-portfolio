import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-12 border-t border-[#30363d]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Fixed lowercase 'opacity'
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden shadow-sm"
      >
        <div className="bg-[#21262d] px-4 py-3 border-b border-[#30363d] flex items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-blue-400" />
            <span>degifetise</span>
          </div>
          <span className="text-xs text-gray-400">Public Profile Overview</span>
        </div>

        <div className="p-6 lg:p-8 space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
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

          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4 overflow-x-auto">
            <div className="flex justify-between items-center mb-3 text-xs text-gray-400">
              <span className="font-semibold text-white">
                Live GitHub Contribution Activity
              </span>
              <a
                href="https://github.com/degifetise"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                @degifetise ↗
              </a>
            </div>

            <div className="w-full flex justify-center py-2">
              <img
                src="https://github-readme-activity-graph.vercel.app/graph?username=degifetise&theme=github-dark&hide_border=true&color=39d353&bg_color=0d1117&line=58a6ff&point=39d353&area=true&area_color=238636"
                alt="My Real-Time GitHub Activity Graph"
                className="w-full max-w-4xl rounded object-contain"
              />
            </div>
            <div className="flex justify-between items-center mt-3 text-[11px] text-gray-400">
              <span>
                Automatically syncs with my public GitHub commits & activity
              </span>
              <span className="text-emerald-400 font-medium">
                ● Live syncing
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            My Active contributions across full-stack web engineering and
            open-source repositories.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
