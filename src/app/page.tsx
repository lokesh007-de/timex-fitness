import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Dumbbell,
  Flame,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Play,
  Star,
  Target,
  Waves,
  Youtube,
} from "lucide-react";
import type { ReactNode } from "react";

import { CountUp } from "@/components/site/count-up";
import HeroScene from "@/components/site/hero-scene";
import { JoinForm } from "@/components/site/join-form";
import { Reveal } from "@/components/site/reveal";
import { SiteNav } from "@/components/site/site-nav";
import { TiltCard } from "@/components/site/tilt-card";

const unsplash = (id: string, width = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

const marqueeItems = [
  "Strength",
  "Conditioning",
  "Hypertrophy",
  "Mobility",
  "Recovery",
  "Boxing",
  "Nutrition",
  "Community",
];

const stats = [
  { value: 12, suffix: "+", label: "Years coaching" },
  { value: 4800, suffix: "+", label: "Members strong" },
  { value: 32, suffix: "", label: "Expert coaches" },
  { value: 60, suffix: "+", label: "Classes weekly" },
];

const programs = [
  {
    index: "01",
    title: "Strength Lab",
    icon: Dumbbell,
    description:
      "Progressive barbell cycles built on squat, bench, deadlift and press. Add weight without breaking down.",
    tags: ["Barbell", "Powerlifting", "60 min"],
    image: "photo-1526506118085-60ce8714f8c5",
  },
  {
    index: "02",
    title: "Engine Room",
    icon: Flame,
    description:
      "Metabolic conditioning that builds a bigger engine. Intervals, sleds, rowers and sweat you will remember.",
    tags: ["HIIT", "Conditioning", "45 min"],
    image: "photo-1517963879433-6ad2b056d712",
  },
  {
    index: "03",
    title: "Mobility & Recovery",
    icon: Waves,
    description:
      "Controlled movement, breathwork, sauna and ice. The work between sessions that keeps you training for decades.",
    tags: ["Mobility", "Recovery", "40 min"],
    image: "photo-1540497077202-7c8a3999166f",
  },
  {
    index: "04",
    title: "1:1 Coaching",
    icon: Target,
    description:
      "A dedicated coach, a plan written for your body and weekly check-ins that keep the needle moving.",
    tags: ["Personal", "Nutrition", "Ongoing"],
    image: "photo-1541534741688-6078c6bfb5c5",
  },
];

const principles = [
  {
    number: "01",
    title: "Assess",
    text: "Movement screen, strength baseline and lifestyle audit in your first week. No guessing.",
  },
  {
    number: "02",
    title: "Build",
    text: "A phased plan with clear numbers. Every block has a target — and a reason.",
  },
  {
    number: "03",
    title: "Progress",
    text: "Monthly retests, coach reviews and programme tweaks so results never plateau.",
  },
];

const coaches = [
  {
    name: "Marcus Vale",
    role: "Head of Strength",
    image: "photo-1567013127542-490d757e51fc",
    creds: "MSc S&C · IPF Coach",
  },
  {
    name: "Aisha Noor",
    role: "Conditioning Coach",
    image: "photo-1594381898411-846e7d193883",
    creds: "NASM-CPT · Boxing L2",
  },
  {
    name: "Diego Ramos",
    role: "Mobility & Recovery",
    image: "photo-1554284126-aa88f22d8b74",
    creds: "FRC · Sports Rehab",
  },
];

const plans = [
  {
    name: "Core",
    price: "39",
    blurb: "For the self-starter who just needs a serious place to train.",
    features: [
      "24/7 gym floor access",
      "2 group classes per week",
      "Locker, towel & showers",
      "Timex app + workout tracking",
    ],
    cta: "Start with Core",
    featured: false,
  },
  {
    name: "Performance",
    price: "69",
    blurb: "Our most popular plan. Coaching, classes and recovery included.",
    features: [
      "Everything in Core",
      "Unlimited group classes",
      "Monthly InBody composition scan",
      "Sauna, ice bath & recovery zone",
      "1 personal training session / month",
    ],
    cta: "Go Performance",
    featured: true,
  },
  {
    name: "Elite",
    price: "129",
    blurb: "Fully coached. Built for people chasing a specific number.",
    features: [
      "Everything in Performance",
      "4 personal training sessions / month",
      "Custom nutrition plan",
      "Priority class booking",
      "2 guest passes every month",
    ],
    cta: "Apply for Elite",
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "I came in unable to do a single pull-up. Fourteen months later I did eight strict reps and dropped 18kg. The coaches actually watch you.",
    name: "Priya S.",
    detail: "Member since 2022",
  },
  {
    quote:
      "The programming is the difference. Nothing is random. I finally understand what I'm doing in the gym and why it's working.",
    name: "Daniel K.",
    detail: "Performance plan",
  },
  {
    quote:
      "Best atmosphere of any gym I've trained in. People cheer for each other. It's the only place I've stayed consistent for three years.",
    name: "Maya R.",
    detail: "Member since 2021",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-volt" />
      <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-volt">
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative overflow-x-clip bg-ink">
      <SiteNav />

      {/* HERO */}
      <section className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-32 sm:pb-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(215,255,61,0.13),transparent_58%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(84,110,255,0.12),transparent_55%)]" />
          <div className="grid-lines absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.96)_0%,rgba(7,7,7,0.86)_34%,rgba(7,7,7,0.34)_58%,transparent_74%)]" />
          <HeroScene />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="max-w-[46rem]">
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-volt opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-volt" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-white/70">
                  Now enrolling · Est. 2014
                </span>
              </div>
            </Reveal>

            <h1 className="font-display uppercase leading-[0.82] tracking-[-0.01em]">
              <Reveal delay={0.05}>
                <span className="block text-[clamp(3.1rem,8.6vw,7rem)] text-white">
                  Train
                </span>
              </Reveal>
              <Reveal delay={0.12}>
                <span className="block text-[clamp(3.1rem,8.6vw,7rem)] text-stroke">
                  Hard.
                </span>
              </Reveal>
              <Reveal delay={0.19}>
                <span className="block text-[clamp(3.1rem,8.6vw,7rem)] text-white">
                  Live{" "}
                  <span className="text-volt drop-shadow-[0_0_32px_rgba(215,255,61,0.35)]">
                    Strong.
                  </span>
                </span>
              </Reveal>
            </h1>

            <Reveal delay={0.26}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Timex Fitness is a strength and conditioning gym for people who
                are done making excuses. Real coaching, intelligent programming
                and recovery — engineered around your goals.
              </p>
            </Reveal>

            <Reveal delay={0.33}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-volt px-7 py-4 text-sm font-semibold text-ink transition-all hover:bg-white hover:shadow-[0_0_40px_-8px_rgba(215,255,61,0.6)]"
                >
                  Start your free trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#programs"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white transition-colors hover:border-volt/60 hover:text-volt"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current">
                    <Play className="h-2.5 w-2.5 fill-current" />
                  </span>
                  Explore programs
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[
                      "photo-1571019613454-1cb2f99b2d8b",
                      "photo-1583454110551-21f2fa2afe61",
                      "photo-1541534741688-6078c6bfb5c5",
                    ].map((id) => (
                      <img
                        key={id}
                        src={unsplash(id, 96)}
                        alt=""
                        className="h-9 w-9 rounded-full border-2 border-ink object-cover"
                      />
                    ))}
                  </div>
                  <div className="leading-tight">
                    <div className="flex items-center gap-1 text-volt">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="h-3 w-3 fill-current"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <p className="mt-0.5 text-xs text-white/50">
                      4,800+ members training with us
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-14 flex w-full max-w-[1240px] items-end justify-between px-5 sm:px-8">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
              <span className="h-1.5 w-1 animate-bounce rounded-full bg-volt" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              Scroll to explore
            </span>
          </div>
          <div className="hidden border-l border-white/15 pl-5 text-right md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              Next intake
            </p>
            <p className="font-display text-xl uppercase text-white">
              Mon · 06:00
            </p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative z-20 overflow-hidden border-y border-volt/20 bg-volt py-3.5">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-5 px-5 font-display text-lg uppercase tracking-wide text-ink sm:text-2xl"
                >
                  {item}
                  <span className="text-ink/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <section className="relative border-b border-white/8 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-[1240px] grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="border-white/10 px-2 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="font-display text-[clamp(2.6rem,5vw,4rem)] leading-none text-white">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.26em] text-white/45">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative py-24 sm:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-volt/40 to-transparent" />
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal className="max-w-2xl">
              <SectionLabel>Programs</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] uppercase leading-[0.86] text-white">
                Pick your <span className="text-volt">battle</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-sm">
              <p className="text-sm leading-relaxed text-white/55">
                Four disciplines, one system. Every session is coached, every
                block is measured, and every plan bends to your life — not the
                other way around.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Reveal key={program.title} delay={index * 0.07}>
                  <TiltCard className="h-full">
                    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-7 transition-colors duration-300 hover:border-volt/40 sm:p-9">
                      <div
                        className="absolute inset-0 bg-cover bg-center opacity-15 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-30 group-hover:grayscale-0"
                        style={{
                          backgroundImage: `url(${unsplash(program.image, 900)})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

                      <div className="relative flex items-start justify-between">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-volt/25 bg-volt/10 text-volt">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs text-white/30">
                          {program.index}
                        </span>
                      </div>

                      <div className="relative mt-16">
                        <h3 className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">
                          {program.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55">
                          {program.description}
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-2">
                          {program.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/12 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/55"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-volt">
                          View schedule
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </article>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section
        id="method"
        className="relative overflow-hidden border-y border-white/8 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-volt/[0.06] blur-[120px]" />
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={unsplash("photo-1534438327276-14e5300c3a48", 1100)}
                alt="The Timex Fitness training floor"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl border border-white/12 bg-ink/70 px-5 py-4 backdrop-blur-md">
                <div>
                  <p className="font-display text-3xl leading-none text-volt">
                    98%
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
                    Member retention
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-3xl leading-none text-white">
                    7 days
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
                    Open every week
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-24 w-24 rounded-full border border-volt/30" />
            <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full border border-white/10" />
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>The Timex Method</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(2.6rem,6vw,4.8rem)] uppercase leading-[0.88] text-white">
                Built on <br />
                <span className="text-stroke">evidence,</span> not{" "}
                <span className="text-volt">ego.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
                Anyone can make you sore. We make you stronger. Our coaches
                follow a three-stage system that turns effort into measurable
                progress — and keeps it there.
              </p>
            </Reveal>

            <div className="mt-9 space-y-1">
              {principles.map((principle, index) => (
                <Reveal key={principle.number} delay={index * 0.08}>
                  <div className="group flex gap-5 rounded-xl border border-transparent px-2 py-4 transition-colors hover:border-white/10 hover:bg-white/[0.02]">
                    <span className="font-mono text-xs text-volt">
                      {principle.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl uppercase tracking-wide text-white">
                        {principle.title}
                      </h3>
                      <p className="mt-1 max-w-md text-sm leading-relaxed text-white/50">
                        {principle.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Data-led programming",
                  "A coach on every floor",
                  "Recovery built into the plan",
                  "Community accountability",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/70"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-volt/15 text-volt">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionLabel>Coaches</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] uppercase leading-[0.86] text-white">
                The people <br className="hidden sm:block" />
                behind the <span className="text-volt">progress</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-volt hover:text-volt"
              >
                Meet the full team
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach, index) => (
              <Reveal key={coach.name} delay={index * 0.08}>
                <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={unsplash(coach.image, 800)}
                      alt={`${coach.name}, ${coach.role} at Timex Fitness`}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                    <div className="absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white backdrop-blur">
                        <Instagram className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-white backdrop-blur">
                        <Youtube className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <div className="absolute inset-x-5 bottom-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-volt">
                        {coach.creds}
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl uppercase tracking-wide text-white">
                        {coach.name}
                      </h3>
                      <p className="text-sm text-white/55">{coach.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section
        id="membership"
        className="relative overflow-hidden border-y border-white/8 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-volt/[0.07] blur-[130px]" />
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <SectionLabel>Membership</SectionLabel>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] uppercase leading-[0.86] text-white">
              Invest in the <span className="text-volt">machine</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/55">
              Simple monthly plans. No joining fee, no lock-in contracts, and a
              7-day pause whenever life gets loud.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08} className="h-full">
                <TiltCard intensity={6} className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-7 sm:p-8 ${
                      plan.featured
                        ? "border-volt/60 bg-gradient-to-b from-volt/[0.10] to-ink-2 shadow-[0_0_70px_-30px_rgba(215,255,61,0.5)]"
                        : "border-white/10 bg-ink-2"
                    }`}
                  >
                    {plan.featured && (
                      <span className="absolute -top-3 left-7 rounded-full bg-volt px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink">
                        Most popular
                      </span>
                    )}

                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                        {plan.name}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-2 min-h-10 text-sm leading-relaxed text-white/50">
                      {plan.blurb}
                    </p>

                    <div className="mt-6 flex items-end gap-1.5">
                      <span className="font-display text-5xl leading-none text-white">
                        ${plan.price}
                      </span>
                      <span className="pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                        / month
                      </span>
                    </div>

                    <div className="my-7 h-px w-full bg-white/10" />

                    <ul className="flex-1 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-white/65"
                        >
                          <Check
                            className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                              plan.featured ? "text-volt" : "text-white/35"
                            }`}
                            strokeWidth={3}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                        plan.featured
                          ? "bg-volt text-ink hover:bg-white"
                          : "border border-white/15 text-white hover:border-volt hover:text-volt"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/35">
              <span>No joining fee</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <span>Cancel anytime</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <span>7-day pause</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
              <span>Student rates available</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <SectionLabel>Member stories</SectionLabel>
            <h2 className="mt-5 font-display text-[clamp(2.8rem,7vw,5.5rem)] uppercase leading-[0.86] text-white">
              Proof, not <span className="text-stroke">promises</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-ink-2 p-7 transition-colors hover:border-volt/30">
                  <div className="flex items-center gap-1 text-volt">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-3.5 w-3.5 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-white/70">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-volt/15 font-display text-sm text-volt">
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                        {item.detail}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/8 py-24 sm:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 translate-y-1/2 rounded-full bg-volt/[0.09] blur-[140px]" />
          <div className="grid-lines absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>Join Timex</SectionLabel>
              <h2 className="mt-5 font-display text-[clamp(2.9rem,7.5vw,6rem)] uppercase leading-[0.84] text-white">
                Your first <br />
                session is <span className="text-volt">on us.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55 sm:text-base">
                Book a free trial and we&apos;ll run a movement screen, set your
                baseline and build the first four weeks of your plan. No
                pressure, no contracts, no sales pitch.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-volt">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                      The gym
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      14 Forge Street,
                      <br />
                      Riverside District
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-volt">
                    <Clock className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                      Hours
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      Gym floor 24/7
                      <br />
                      Coached 05:00 – 22:00
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-volt">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                      Call
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      +1 (555) 014-8820
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-volt">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                      Email
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      hello@timexfitness.com
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-white/12 bg-ink-2/80 p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                    Free trial
                  </h3>
                  <p className="mt-1 text-xs text-white/45">
                    Takes 30 seconds. We reply within a day.
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-volt/15 text-volt">
                  <Dumbbell className="h-5 w-5" />
                </span>
              </div>
              <JoinForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/8 bg-ink-2/40">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-volt">
                  <span className="font-display text-xl leading-none text-ink">
                    T
                  </span>
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-xl tracking-wide text-white">
                    TIMEX
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.42em] text-volt">
                    Fitness
                  </span>
                </span>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
                A strength and conditioning gym built for the long game. Train
                hard. Live strong.
              </p>
              <div className="mt-6 flex gap-2">
                {[Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#top"
                    aria-label="Timex Fitness social profile"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-volt hover:text-volt"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/35">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                {[
                  { label: "Programs", href: "#programs" },
                  { label: "The method", href: "#method" },
                  { label: "Coaches", href: "#coaches" },
                  { label: "Membership", href: "#membership" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-volt"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/35">
                Visit
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/60">
                <li>14 Forge Street</li>
                <li>Riverside District</li>
                <li>Open 24 / 7</li>
                <li className="text-volt">hello@timexfitness.com</li>
              </ul>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.26em] text-white/35">
                Start
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                First session is free. Bring shoes, water and a willingness to
                work.
              </p>
              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-volt"
              >
                Book a trial
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
              © {new Date().getFullYear()} Timex Fitness. All rights reserved.
            </p>
            <div className="flex items-center gap-6 font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
              <a href="#top" className="transition-colors hover:text-white/60">
                Privacy
              </a>
              <a href="#top" className="transition-colors hover:text-white/60">
                Terms
              </a>
              <a href="#top" className="transition-colors hover:text-volt">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none select-none overflow-hidden">
          <p className="translate-y-[18%] whitespace-nowrap text-center font-display text-[clamp(4rem,16vw,15rem)] uppercase leading-none text-white/[0.035]">
            Timex Fitness
          </p>
        </div>
      </footer>
    </main>
  );
}
