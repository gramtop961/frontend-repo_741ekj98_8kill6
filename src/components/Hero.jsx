import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs text-zinc-700 dark:text-zinc-300">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 animate-pulse" />
            Real-time AI Voice</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Your AI Calling Agent
            <span className="block text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400">that talks like a human</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
            Automate inbound and outbound calls with a natural, friendly voice. Answer questions, schedule appointments, qualify leads — 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-zinc-900 to-zinc-800 text-white dark:from-white dark:to-zinc-200 dark:text-zinc-900 px-4 py-3 text-sm font-semibold">
              Try a demo call
              <ArrowRight size={16} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800">
              See how it works
            </button>
          </div>
          <div className="flex items-center gap-6 pt-2">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              <div className="font-semibold text-zinc-900 dark:text-white">Under a second</div>
              <div>response latency</div>
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              <div className="font-semibold text-zinc-900 dark:text-white">Natural voices</div>
              <div>multi-language</div>
            </div>
          </div>
        </div>
        <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
          <Spline 
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/20 dark:from-zinc-950/80 dark:via-transparent dark:to-zinc-950/30" />
        </div>
      </div>
    </section>
  );
}
