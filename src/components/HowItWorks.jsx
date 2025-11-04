import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Design your agent',
    desc: 'Define goals, tone, guardrails, and integrations. Bring your knowledge base and workflows.'
  },
  {
    title: 'Connect a number',
    desc: 'Provision an inbound line or start outbound campaigns in minutes with built-in rate limiting.'
  },
  {
    title: 'Go live',
    desc: 'Monitor calls in real time, review transcripts, and iterate rapidly with analytics.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">How it works</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">From idea to production voice agent in three simple steps.</p>
        </div>
        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 text-white flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
