
export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] py-8 text-xs text-gray-400">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-1.5">
          <span>
            © 2026 Degife Tise. Built with React, Tailwind CSS, & GitHub Dark
            Aesthetics.
          </span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/degifetise"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition flex items-center gap-1.5"
          >
           <span>Github</span>
            <span>@degifetise</span>
          </a>
          <span className="text-[#30363d]">•</span>
          <span className="text-gray-400">Hawassa, Ethiopia</span>
        </div>
      </div>
    </footer>
  );
}
