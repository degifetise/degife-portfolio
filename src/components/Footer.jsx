
export default function Footer() {
  return (
    <footer className="theme-page theme-border theme-muted border-t py-8 text-xs">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-1.5">
          <span>
            © 2026 Degife Tise.
          </span>
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/degifetise"
            target="_blank"
            rel="noreferrer"
            className="theme-body flex items-center gap-1.5 transition-colors hover:opacity-70"
          >
           <span>Github</span>
          </a>
          <span className="theme-border"></span>
          <span>Hawassa, Ethiopia</span>
        </div>
      </div>
    </footer>
  );
}
