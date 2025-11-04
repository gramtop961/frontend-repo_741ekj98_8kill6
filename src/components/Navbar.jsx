import { Rocket, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-zinc-200/60 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 text-white">
            <Phone size={18} />
          </div>
          <span className="tracking-tight">AICall Agent</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
          <a href="#features" className="hover:text-zinc-900 dark:hover:text-white">Features</a>
          <a href="#how" className="hover:text-zinc-900 dark:hover:text-white">How it works</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-3 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">
            Docs
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 px-3 text-sm font-medium hover:opacity-90">
            <Rocket size={16} />
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
