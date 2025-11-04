export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-white">AICall Agent</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 max-w-sm">
              Create always-on voice agents that answer, assist, and act — so your team can focus on what matters.
            </p>
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-300">
            <div>Contact</div>
            <div className="mt-1">hello@aicall.example</div>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} AICall Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
