"use client";

import { useState } from "react";

const outcomes = [
  { title: "Live Upwork Profile", description: "Optimized and ready to win jobs from day one." },
  { title: "One Sellable AI Service", description: "A clear, packaged offer clients can understand and buy." },
  { title: "3–5 Portfolio Projects", description: "Built during class, even before your first real client." },
  { title: "50+ Sent Proposals", description: "Real proposals, real jobs, real practice, not homework." },
  { title: "AI Delivery Toolkit", description: "Deliver 5–10x faster than competitors using AI workflows." },
  { title: "Dollar Pricing Strategy", description: "Know exactly what to charge and how to justify it." },
];

const paths = [
  {
    tag: "Path A",
    title: "AI Content Systems",
    level: "No Code Required",
    description: "Set up AI-powered content workflows for businesses. Generate a full month of content in 30 minutes.",
    tools: ["Claude", "ChatGPT", "Canva", "Buffer"],
    price: "$200–500 per setup",
  },
  {
    tag: "Path B",
    title: "AI Chatbot & Automation",
    level: "No Code Required",
    description: "Build AI chatbots and automations for customer support, lead capture, and client onboarding.",
    tools: ["Tidio", "ManyChat", "Make.com", "Voiceflow"],
    price: "$300–800 setup + $50–100/month retainer",
  },
  {
    tag: "Path C",
    title: "AI Web Development",
    level: "Minimal Code",
    description: "Build landing pages and web apps for startups and businesses using AI-first tools.",
    tools: ["Lovable", "v0", "Framer", "Bolt"],
    price: "$300–1,000 per project",
  },
];

const curriculum = {
  week1: {
    heading: "Freelancing Foundations",
    classes: [
      { number: "Class 1", title: "The Freelancing Reality Check", subtitle: "Kya Bechoge, Kisko Bechoge, Kahan Bechoge", detail: "Niche selection, market reality, client types" },
      { number: "Class 2", title: "Upwork Profile That Gets You Hired", subtitle: "Zero Reviews Se First Client Tak", detail: "Profile build, portfolio from zero" },
      { number: "Class 3", title: "Proposals That Win Jobs", subtitle: "150 Lafzon Mein Client Ko Convince Karo", detail: "5-line proposal framework, daily routine" },
    ],
  },
  week2: {
    heading: "AI Tools & Delivery",
    classes: [
      { number: "Class 4", title: "AI Fundamentals for Freelancers", subtitle: "ChatGPT Chalana AI Skill Nahi Hai", detail: "Prompting framework, Claude vs ChatGPT" },
      { number: "Class 5", title: "Building With AI (Path-Specific)", subtitle: "2 Ghanton Mein Wo Kaam Karo Jo Pehle 2 Din Lagta Tha", detail: "Live tool mastery per path" },
      { number: "Class 6", title: "Automation & Speed Stack", subtitle: "Clients Ko Lagay Ga Tum Team Ho", detail: "Make.com workflows, delivery speed" },
    ],
  },
  week3: {
    heading: "Scaling & Dollar Clients",
    classes: [
      { number: "Class 7", title: "Closing Clients & Handling Money", subtitle: "Pehle Client Se $1,000 Client Tak", detail: "Sales calls, Payoneer, tax basics" },
      { number: "Class 8", title: "Building Recurring Revenue", subtitle: "Ek Client Se Baar Baar Kamao", detail: "Retainer model, LinkedIn outreach" },
      { number: "Class 9", title: "The Growth System", subtitle: "System Banao, Hustle Band Karo", detail: "90-day plan, pricing ladder, graduation" },
    ],
  },
} as const;

const inclusions = [
  "9 live classes (18 hours)",
  "Lifetime recording access",
  "Private WhatsApp community",
  "Proposal templates + swipe files",
  "AI prompt library for all 3 paths",
  "Portfolio case study templates",
  "Client email templates",
  "Live Upwork profile review",
  "90-day post-program action plan",
  "Certificate of completion",
];

const faq = [
  { question: "Do I need coding experience?", answer: "No. All 3 paths are no-code or minimal-code. If you can use WhatsApp, you can do this." },
  { question: "What if I miss a live class?", answer: "All sessions are recorded and available on the app immediately after." },
  { question: "Which path should I choose?", answer: "Pick based on interest: content (Path A), chatbots (Path B), websites (Path C). You'll lock in on Class 1." },
  { question: "How do I get paid as a Pakistani freelancer?", answer: "Class 7 covers Payoneer setup, Wise, and FBR registration step by step." },
  { question: "What if I don't land a client in 3 weeks?", answer: "The program gives you the system. By Class 9 you'll have a profile, portfolio, and 70+ proposals sent. Results depend on daily execution." },
  { question: "What's the schedule?", answer: "3 classes per week, 2 hours each. Exact dates announced in the WhatsApp group after enrollment." },
];

function SectionHeading({ title, description, align = "center" }: { title: string; description?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto text-center" : "text-left"}>
      <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-semibold tracking-[-0.055em] text-white">{title}</h2>
      {description ? <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-white/58 md:text-lg">{description}</p> : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FeatureMark() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white/10 bg-white/[0.06] text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
      <CheckIcon />
    </div>
  );
}

export default function Home() {
  const [activeWeek, setActiveWeek] = useState<keyof typeof curriculum>("week1");

  return (
    <main id="top" className="relative overflow-x-hidden bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12rem] h-[32rem] w-[68rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_22%,rgba(10,10,10,0)_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03),transparent_18%,transparent_82%,rgba(255,255,255,0.03))] opacity-70" />
      </div>

      <header className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-3 md:px-10 md:py-3">
          <a href="#top" className="text-[1.25rem] font-extrabold leading-none tracking-[-0.055em] text-white md:text-[1.35rem]">
            FreelancifyAI
          </a>
          <nav className="hidden items-center gap-12 text-[1rem] text-white/55 md:flex">
            <a href="#program" className="transition-colors hover:text-white">Program</a>
            <a href="#curriculum" className="transition-colors hover:text-white">Curriculum</a>
            <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
          </nav>
          <a href="#pricing" className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(255,255,255,0.12)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/95 md:px-8 md:text-[1rem]">
            Enroll Now - PKR 5,000
          </a>
        </div>
      </header>

      <section className="px-6 pb-4 pt-12 md:px-10 md:pb-6 md:pt-16">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-white/64 backdrop-blur-sm">3-Week Live Program</div>
          <h1 className="max-w-[53rem] text-balance text-[clamp(2.85rem,6.15vw,6rem)] font-extrabold leading-[1.13] tracking-[-0.07em] text-white">
            Learn to Earn with AI - <span className="text-white/65">Dollar Clients, Rupee Effort</span>
          </h1>
          <p className="mt-5 max-w-[42rem] text-balance text-[1.125rem] leading-7 text-white/62 md:text-[1.44rem] md:leading-7">
            9 live classes. Real tools. Real proposals. Your first client in 3 weeks or you have a system to get there.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex h-16 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-white/95 md:px-12 md:text-lg">Join Early Bird - PKR 5,000</a>
            <a href="#curriculum" className="inline-flex h-16 items-center justify-center rounded-full border border-white/20 bg-white/[0.02] px-10 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.06] md:px-12 md:text-lg">See Full Curriculum</a>
          </div>
          <p className="mt-3 text-sm font-medium text-white/55 md:text-base">Live on WhatsApp + App · 18 Hours of Instruction · Limited Seats</p>
        </div>
      </section>

      <section className="px-6 pb-3 md:px-10 md:pb-4">
        <div className="mx-auto grid max-w-[1120px] gap-2 md:grid-cols-3">
          {[["18 Hours", "Live Instruction"], ["70+ Proposals", "Sent by Program End"], ["3 Weeks", "From Zero to First Client"]].map(([value, label]) => (
            <div key={value} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-sm">
              <div className="text-2xl font-bold tracking-[-0.045em] text-white md:text-[1.9rem]">{value}</div>
              <div className="mt-2 text-sm font-medium text-white/55 md:text-base">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="program" className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading title="What You'll Have After 3 Weeks" />
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {outcomes.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.03))] p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-white/16">
                <FeatureMark />
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-white">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-white/58">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading align="center" title="Pick Your Path on Day 1. Master It in 3 Weeks." description="You choose one on Class 1. No switching. Full focus." />
          </div>
          <div className="mt-6 grid gap-3 xl:grid-cols-3">
            {paths.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]">
                <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">{item.tag}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">{item.title}</h3>
                <div className="mt-1.5 text-sm font-medium text-white/45">{item.level}</div>
                <p className="mt-2 text-base leading-7 text-white/62">{item.description}</p>
                <div className="mt-4">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">Tools</div>
                  <div className="mt-1.5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/76">{tool}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 border-t border-white/10 pt-3.5">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/35">Entry Price</div>
                  <div className="mt-2 text-lg font-semibold text-white">{item.price}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="curriculum" className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading title="9 Classes. 18 Hours. Everything You Need." />
          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.03] p-3.5 md:p-4">
            <div className="flex flex-wrap gap-2 border-b border-white/8 pb-2.5">
              {(Object.keys(curriculum) as Array<keyof typeof curriculum>).map((key) => {
                const isActive = activeWeek === key;
                return (
                  <button key={key} type="button" onClick={() => setActiveWeek(key)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${isActive ? "bg-white text-black" : "bg-white/[0.03] text-white/58 hover:bg-white/[0.06] hover:text-white"}`}>
                    {key === "week1" ? "Week 1" : key === "week2" ? "Week 2" : "Week 3"}
                  </button>
                );
              })}
            </div>
            <div className="grid gap-2.5 p-2 pt-3 md:grid-cols-3 md:p-2.5">
              {curriculum[activeWeek].classes.map((item) => (
                  <article key={item.number} className="rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] p-5">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/35">{item.number}</div>
                  <h3 className="mt-2.5 text-xl font-semibold tracking-[-0.03em] text-white">{item.title}</h3>
                  <p className="mt-1.5 text-base font-medium text-white/72">{item.subtitle}</p>
                  <p className="mt-1.5 text-sm leading-7 text-white/48">{item.detail}</p>
                </article>
              ))}
            </div>
            <div className="px-2 pb-2 text-sm text-white/42 md:px-4">{curriculum[activeWeek].heading}</div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading title="Your 3-Week Journey" />
          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {[["1", "Week 1 End", "Live Upwork profile · 15 proposals sent · Niche locked"], ["2", "Week 2 End", "3 portfolio projects built · AI delivery workflows live · 45+ proposals sent"], ["3", "Week 3 End", "Sales framework ready · Retainer pitch drafted · 70+ proposals sent"]].map(([step, title, detail]) => (
              <div key={step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl font-bold text-white">{step}</div>
                  <div>
                    <div className="text-lg font-semibold text-white">{title}</div>
                    <p className="mt-1 text-base leading-7 text-white/55">{detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading title="Everything Inside the Program" />
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {[0, 1].map((column) => (
              <div key={column} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4 md:p-5">
                <div className="grid gap-2">
                  {inclusions.slice(column * 5, column * 5 + 5).map((item) => (
                    <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/8 bg-[#0e0e0e] px-4 py-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80"><CheckIcon /></div>
                      <div className="text-base font-medium text-white/78">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading title="One Client Pays for This 10x Over" />
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 md:p-7">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/62">Early Bird</div>
              <div className="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">PKR 5,000</div>
              <div className="mt-3 text-sm font-medium text-white/45">First 48 hours only</div>
              <div className="mt-4 grid gap-1.5">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/76"><CheckIcon /><span>{item}</span></div>
                ))}
              </div>
              <a href="#pricing" className="mt-5 inline-flex h-14 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-white/95 md:px-8 md:text-base">Claim Early Bird Spot</a>
            </article>
            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 md:p-7">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/46">Full Price</div>
              <div className="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">PKR 10,000</div>
              <div className="mt-3 text-sm font-medium text-white/45">After early bird closes</div>
              <div className="mt-4 grid gap-1.5">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/76"><CheckIcon /><span>{item}</span></div>
                ))}
              </div>
              <a href="#pricing" className="mt-5 inline-flex h-14 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.06] md:px-8 md:text-base">Enroll at Full Price</a>
            </article>
          </div>
          <div className="mt-4 grid gap-1 text-center text-sm text-white/48 md:text-base">
            <p>Your first project earns PKR 55,000–140,000. This costs PKR 5,000.</p>
            <p>IDM charges PKR 65,000 · Aaghaz charges PKR 45,000 · This is PKR 5,000.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading title="Common Questions" />
          <div className="mt-6 grid gap-2.5">
            {faq.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-5" open={item.question === "What's the schedule?"}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/72 transition group-open:rotate-180"><ChevronIcon /></span>
                </summary>
                <p className="mt-2.5 max-w-3xl text-base leading-7 text-white/58">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1240px] text-center">
          <blockquote className="mx-auto max-w-5xl text-3xl font-semibold tracking-[-0.045em] text-white md:text-5xl md:leading-tight">“The ones who succeed won't be the smartest in the room. They'll be the ones who sent proposals every single day for 90 days straight.”</blockquote>
          <div className="mt-3 text-base font-medium text-white/45">by @thetruehammad</div>
          <p className="mt-2 text-lg text-white/68">Start that 90 days here.</p>
          <a href="#pricing" className="mt-4 inline-flex h-14 items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-white/95 md:text-base">Join FreelancifyAI - PKR 5,000</a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-white/[0.02] px-6 py-12 md:px-10 md:py-14">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr] md:gap-8">
            <div>
              <div className="text-xl font-extrabold tracking-[-0.05em] text-white md:text-2xl">FreelancifyAI</div>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/45 md:text-base">
                Earn with AI. Bill in Dollars.
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                Quick Links
              </div>
              <div className="mt-4 grid gap-3 text-sm text-white/55 md:text-base">
                <a href="#program" className="transition-colors hover:text-white">
                  Program
                </a>
                <a href="#curriculum" className="transition-colors hover:text-white">
                  Curriculum
                </a>
                <a href="#pricing" className="transition-colors hover:text-white">
                  Pricing
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                Connect
              </div>
              <a href="#" className="mt-4 inline-flex text-sm font-medium text-white/60 transition hover:text-white md:text-base">
                @thetruehammad
              </a>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/45 md:ml-auto md:text-base">
                Built for creators who want to sell, ship, and get paid faster.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/35 md:mt-12 md:flex md:items-center md:justify-between md:pt-6">
            <p>© 2026 FreelancifyAI. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Live on WhatsApp + App</p>
          </div>
        </div>
      </footer>


    </main>
  );
}
