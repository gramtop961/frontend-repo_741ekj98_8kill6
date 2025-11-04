import { Phone, Bot, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Human-like conversations',
    desc: 'Turn-by-turn speech with interruptions, confirmations, and natural pacing for a delightful caller experience.'
  },
  {
    icon: Bot,
    title: 'Automated workflows',
    desc: 'Qualify leads, book meetings, and route issues. Connect to your tools via secure webhooks and APIs.'
  },
  {
    icon: Shield,
    title: 'Secure & compliant',
    desc: 'Enterprise-grade security, consent capture, and redaction keep your calls safe and compliant.'
  },
  {
    icon: Globe,
    title: 'Multilingual by design',
    desc: 'Speak and understand dozens of languages with regional accents and vocabulary.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Built for real conversations</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Everything you need to launch voice agents that actually get things done.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-sky-500 to-orange-400 text-white flex items-center justify-center">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
