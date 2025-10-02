import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium border-black/10 dark:border-white/10">
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand))]"></span>
              New: Faster, simpler onboarding
            </span>
            <h1 className="text-4xl/tight sm:text-5xl/tight font-semibold">
              Ship a beautiful landing page in minutes
            </h1>
            <p className="lead max-w-prose">
              Acme helps modern teams launch quickly with a clean, responsive
              template. Accessible, SEO-friendly, and blazing fast by default.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#pricing" className="inline-flex h-11 items-center justify-center rounded-md bg-black text-white px-5 text-sm font-medium dark:bg-white dark:text-black hover:opacity-90">
                Get started
              </a>
              <a href="#features" className="inline-flex h-11 items-center justify-center rounded-md border border-black/10 dark:border-white/10 px-5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10">
                See features
              </a>
            </div>
            <div className="flex items-center gap-6 opacity-70 text-sm">
              <div className="flex items-center gap-2"><span className="h-4 w-4 rounded bg-black dark:bg-white"/> No code required</div>
              <div className="flex items-center gap-2"><span className="h-4 w-4 rounded bg-black/60 dark:bg-white/60"/> SEO-ready</div>
            </div>
          </div>
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-black/10 dark:border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
              alt="Team collaborating around a laptop"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-semibold">Everything you need</h2>
            <p className="lead">Opinionated defaults and flexible building blocks so you can launch faster.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Responsive by default", desc: "Looks great on phones, tablets, and desktops." },
              { title: "Accessible", desc: "Semantic HTML and focus states out of the box." },
              { title: "SEO friendly", desc: "Clean metadata and fast page loads." },
              { title: "TypeScript-ready", desc: "Strict, modern TS config included." },
              { title: "Dark mode", desc: "One-click theme toggle persisted locally." },
              { title: "No vendor lock-in", desc: "Pure Next.js and Tailwind – bring your own stack." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/[0.02]">
                <div className="h-10 w-10 rounded bg-[hsl(var(--brand))]/90 mb-4" />
                <h3 className="font-semibold mb-1">{f.title}</h3>
                <p className="opacity-70 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl font-semibold">Made for real work</h2>
            <p className="lead">A few looks at the product in action.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1526481280698-8fcc13fd78f1?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
            ].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
                <Image
                  src={src}
                  alt="Showcase"
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-semibold">Simple pricing</h2>
            <p className="lead">Start free. Upgrade when you’re ready — cancel anytime.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Starter", price: "$0", desc: "For personal projects", features: ["1 project", "Basic support", "Community access"] },
              { name: "Pro", price: "$19", desc: "For small teams", features: ["Unlimited projects", "Priority support", "Custom domains"] },
              { name: "Business", price: "$49", desc: "For growing companies", features: ["SLA & SSO", "Dedicated support", "Audit logs"] },
            ].map((tier, idx) => (
              <div key={tier.name} className={`rounded-2xl border p-6 flex flex-col gap-4 border-black/10 dark:border-white/10 ${idx===1? 'bg-[hsl(var(--brand))]/5 dark:bg-[hsl(var(--brand))]/10':''}`}>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-lg">{tier.name}</h3>
                  <div className="text-2xl font-semibold">{tier.price}<span className="text-sm opacity-60">/mo</span></div>
                </div>
                <p className="opacity-70 text-sm">{tier.desc}</p>
                <ul className="space-y-2 text-sm">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand))]"></span>{feat}</li>
                  ))}
                </ul>
                <a href="#" className={`mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 ${idx===1?'bg-black text-white dark:bg-white dark:text-black':''}`}>
                  {idx===1 ? 'Start Pro' : 'Choose plan'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container max-w-3xl">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
            <p className="lead">Answers to common questions about setup, usage, and pricing.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Can I use this for client projects?", a: "Yes, you can use it for commercial and client work." },
              { q: "Do I need to write backend code?", a: "No backend required to start; integrate APIs later if needed." },
              { q: "Is there a refund policy?", a: "We offer a 14‑day refund window — no questions asked." },
            ].map((item) => (
              <details key={item.q} className="rounded-xl border border-black/10 dark:border-white/10 p-4">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-2 opacity-80 text-sm">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
