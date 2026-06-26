"use client";

import { motion, useScroll, useSpring, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── DATA ── */
const NAV_ITEMS = ["About", "Experience", "Projects", "Writing", "Contact"];

const EXPERIENCES = [
  {
    company: "PT JFD Indonesia",
    role: "Quality Assurance & Control Officer",
    period: "May 2022 – Present",
    items: [
      "Developed and implemented QA/QC procedures to improve process compliance and product quality.",
      "Conducted inspections of raw materials, WIP, and finished goods to reduce nonconformities.",
      "Ensured compliance with ISO 9001 & IATF 16949 standards, supporting successful audits with zero major findings.",
      "Implemented CAPA and root cause analysis to support continuous improvement initiatives.",
    ],
  },
  {
    company: "DSC International",
    role: "Sales and Service Officer",
    period: "Mar 2021 – May 2022",
    items: [
      "Achieved sales targets through effective customer engagement and communication.",
      "Handled customer inquiries across multiple communication channels while maintaining customer satisfaction.",
    ],
  },
  {
    company: "Mega International Sejahtera",
    role: "Junior Warehouse Administrator",
    period: "Jan 2020 – Jan 2021",
    items: [
      "Maintained inventory documentation and supported logistics coordination.",
      "Evaluated shipment quality and processed material returns efficiently.",
    ],
  },
  {
    company: "Ministry of Public Works and Housing",
    role: "Human Resources Intern",
    period: "Jul 2019 – Sep 2019",
    items: [
      "Assisted recruitment scheduling and administrative documentation.",
      "Created and updated employee data spreadsheets using Microsoft Excel.",
    ],
  },
];

const PROJECTS = [
  {
    no: "01",
    title: "Momentum",
    desc: "Personal productivity app for focus, tasks, and daily workflow.",
    href: "https://momentum-rouge-rho.vercel.app/",
    icon: "⚡",
    tag: "Productivity",
    bg: "#FFF8E7",
  },
  {
    no: "02",
    title: "Quraish Notes",
    desc: "Digital notes platform for thoughts, reflections, and ideas.",
    href: "https://quraish-notes.vercel.app/",
    icon: "📝",
    tag: "Personal",
    bg: "#F0F7FF",
  },
];

const WRITINGS = [
  { title: "Work Pressure That Follows You Home", date: "Jun 2026", href: "https://medium.com/@oderisteipsum/work-pressure-that-follows-you-home-80b744a5eb45" },
  { title: "Have I Failed?", date: "May 25, 2026", href: "https://medium.com/@oderisteipsum/have-i-failed-ab240e112cc2" },
  { title: "Learn to carry yourself well.", date: "May 23, 2026", href: "https://medium.com/@oderisteipsum/learn-to-carry-yourself-well-ceb2934a3164" },
  { title: "Essential: The Small Things That Build Real Progress", date: "May 22, 2026", href: "https://medium.com/@oderisteipsum/essential-the-small-things-that-build-real-progress-eacd161b3fd8" },
];

const SKILLS = [
  "IATF 16949", "ISO 9001", "CAPA", "Internal Audit",
  "8D / 5 Why", "Fishbone Diagram", "In-Process QC",
  "SPC & Data Analysis", "SOP Management", "Continuous Improvement",
  "Microsoft Office", "Google Workspace", "Canva / Photoshop",
];

const EDUCATION = {
  degree: "Bachelor's Degree in Economics (Management)",
  school: "Universitas Pasundan",
  period: "2016 – 2020",
  gpa: "3.78 / 4.00",
  note: "Awarded a full 4-year scholarship for academic excellence",
};

const ACHIEVEMENTS = [
  "Achieved zero line stop caused by quality issues during production period",
  "Performed incoming, in-process, and final inspection in compliance with customer drawing & standards",
  "Ensured 100% on-time quality release to meet production targets",
  "Reduced rework and scrap costs through quality improvement initiatives",
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fikri-rahmatulloh/" },
  { label: "Instagram", href: "https://www.instagram.com/faquloh/" },
  { label: "Spotify", href: "https://open.spotify.com/user/317qm7hoiawpvovp644qwof7hxxm" },
  { label: "Medium", href: "https://medium.com/@oderisteipsum" },
];

/* ── MOTION VARIANTS ── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };
const staggerFast = { visible: { transition: { staggerChildren: 0.05 } } };

/* ── COUNT UP ── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    const controls = animate(motionVal, to, { duration: 1.4, ease: "easeOut", delay: 0.3 });
    return controls.stop;
  }, [to]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [rounded]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ── HELPERS ── */
function Divider() {
  return <div className="h-px w-full bg-[#111]/8" />;
}

function Label({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-mono text-xs text-[#111]/30">{n}</span>
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5C5652]">{text}</span>
      <div className="flex-1 h-px bg-[#111]/10" />
    </div>
  );
}

/* ── PAGE ── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* scroll progress bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  /* active nav via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach((name) => {
      const el = document.getElementById(name.toLowerCase());
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(name.toLowerCase()); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#EDEAE4] text-[#111]">

      {/* ── GRADIENT BLOBS ── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#E8440A]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[440px] w-[440px] rounded-full bg-[#F2C94C]/12 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-[#E8440A]/7 blur-[110px]" />
      </div>

      {/* ── SCROLL PROGRESS ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-[#E8440A]"
        style={{ scaleX }}
      />

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 bg-[#EDEAE4]/90 backdrop-blur-sm border-b border-[#111]/6">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="font-black text-sm tracking-tight hover:text-[#E8440A] transition">
            Quraish's Portfolio
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {NAV_ITEMS.map((n) => {
              const active = activeSection === n.toLowerCase();
              return (
                <a key={n} href={`#${n.toLowerCase()}`}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active
                      ? "bg-[#111] text-white"
                      : "text-[#111]/65 hover:bg-[#111]/6 hover:text-[#111]"
                  }`}>
                  {n}
                </a>
              );
            })}
          </div>

          <a href="mailto:quraishrahmatulloh@gmail.com"
            className="hidden rounded-full bg-[#E8440A] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#111] md:inline-flex">
            Hire me
          </a>
          <button onClick={() => setMenuOpen(v => !v)} className="font-bold text-sm md:hidden">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#111]/8 bg-[#EDEAE4] px-6 pb-4 pt-2 md:hidden">
            {NAV_ITEMS.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm font-semibold text-[#111]/75 hover:text-[#111]">{n}</a>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">

          {/* left */}
          <motion.div variants={stagger} initial="hidden" animate="visible" className="origin-left">
            <motion.h1 variants={fadeLeft}
              className="font-black leading-[0.95] tracking-tighter text-[#111]"
              style={{ fontSize: "clamp(52px,8.5vw,100px)" }}>
              Quraish<br />
              <span className="text-[#E8440A]">Rahmatulloh.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-lg font-semibold text-[#5C5652] md:text-xl">
              QA/QC Engineer · Tinkerer · Lifelong Learner
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 max-w-md text-sm leading-7 text-[#111]/75">
              Manufacturing QA by profession. Tinkerer and writer by choice.
              3+ years keeping quality standards honest on the factory floor.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              <a href="#projects"
                className="rounded-full bg-[#111] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#E8440A]">
                See my work →
              </a>
              <a href="mailto:quraishrahmatulloh@gmail.com"
                className="rounded-full border border-[#111]/15 bg-white px-6 py-3 text-sm font-bold text-[#111]/80 shadow-sm transition hover:border-[#111]/30 hover:text-[#111]">
                Say hello
              </a>
              <a href="/cv.pdf" download
                className="flex items-center gap-2 rounded-full border border-[#E8440A]/30 bg-[#E8440A]/8 px-6 py-3 text-sm font-bold text-[#E8440A] transition hover:bg-[#E8440A] hover:text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M8 12l4 4 4-4M12 4v12" />
                </svg>
                Download CV
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex items-center gap-5">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="text-xs font-semibold text-[#111]/35 transition hover:text-[#E8440A]">
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* right — photo card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2.5rem] bg-[#F2C94C] shadow-xl shadow-[#111]/12">
              {/* dots */}
              <div className="absolute left-5 top-5 grid grid-cols-3 gap-1.5 opacity-25 z-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#111]" />
                ))}
              </div>
              {/* name tag */}
              <div className="absolute right-4 top-4 z-10 rounded-2xl bg-white/90 px-3 py-2 shadow-md backdrop-blur-sm">
                <p className="text-[11px] font-black text-[#111] leading-tight">Quraish<br />Rahmatulloh</p>
                <p className="mt-0.5 text-[10px] font-bold text-[#E8440A]">QA/QC Engineer</p>
              </div>
              {/* photo */}
              <img
                src="/Uloh.jpeg"
                alt="Quraish Rahmatulloh"
                className="w-full object-cover"
                style={{ height: 420, objectPosition: "center 55%" }}
              />
            </motion.div>

            {/* stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-4 top-1/3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-[#111]/10">
              <p className="text-2xl font-black text-[#111] leading-none"><CountUp to={3} suffix="+" /></p>
              <p className="mt-0.5 text-[10px] font-semibold text-[#5C5652]">Years QA/QC</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 bottom-16 rounded-2xl bg-[#111] px-4 py-3 shadow-lg">
              <p className="text-2xl font-black text-[#F2C94C] leading-none"><CountUp to={2} /></p>
              <p className="mt-0.5 text-[10px] font-semibold text-white/50">Projects live</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* ── ABOUT ── */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <Label n="01" text="About" />
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">

          {/* photo column */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="overflow-hidden rounded-3xl bg-[#F2C94C]/30">
              <img
                src="/Uloh.jpeg"
                alt="Quraish Rahmatulloh"
                className="w-full object-cover"
                style={{ height: 360, objectPosition: "center 40%" }}
              />
            </div>
            {/* available status under photo */}
            <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-[#111]/8 bg-white px-4 py-3 shadow-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-sm font-semibold text-[#111]/80">Available for new opportunities</span>
            </div>
          </motion.div>

          {/* text column */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.h2 variants={fadeUp} className="text-3xl font-black leading-tight md:text-4xl">
              Building quality into<br />everything I do.
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-5 space-y-3 text-sm leading-7 text-[#111]/75">
              <p>
                Manufacturing QA by profession. Tinkerer and writer by choice.
                3+ years keeping quality standards honest on the factory floor.
              </p>
              <p>
                Off the clock: building apps nobody asked for, writing essays nobody expected,
                and learning things just to see if I can.
              </p>
            </motion.div>

            {/* skills */}
            <motion.div variants={fadeUp} className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#111]/35">Skills & Expertise</p>
              <motion.div variants={staggerFast} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex flex-wrap gap-2">
                {SKILLS.map(s => (
                  <motion.span key={s} variants={scaleIn}
                    className="rounded-full border border-[#111]/10 bg-white px-4 py-1.5 text-xs font-semibold text-[#111]/75 shadow-sm transition hover:border-[#E8440A]/30 hover:text-[#E8440A] cursor-default">
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* ── EXPERIENCE ── */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <Label n="02" text="Experience" />
        <div className="space-y-4">
          {EXPERIENCES.map((job, i) => (
            <motion.div key={job.company}
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group rounded-3xl border border-[#111]/8 bg-white p-7 shadow-sm transition hover:shadow-md hover:border-[#111]/16">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black">{job.role}</h3>
                  <p className="mt-0.5 text-sm font-bold text-[#E8440A]">{job.company}</p>
                </div>
                <span className="rounded-full bg-[#EDEAE4] border border-[#111]/8 px-4 py-1.5 text-xs font-semibold text-[#5C5652]">
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2">
                {job.items.map(a => (
                  <li key={a} className="flex gap-3 text-sm leading-6 text-[#111]/75">
                    <span className="mt-1 shrink-0 text-[#E8440A] font-bold">–</span>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

{/* ── EDUCATION & ACHIEVEMENTS ── */}
      <section className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <Label n="03" text="Education & Achievements" />
        <div className="grid gap-4 md:grid-cols-2">
          {/* Education card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-3xl border border-[#111]/8 bg-white p-7 shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#111]/35">Education</p>
            <h3 className="text-lg font-black leading-snug">{EDUCATION.degree}</h3>
            <p className="mt-1 text-sm font-bold text-[#E8440A]">{EDUCATION.school}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#EDEAE4] border border-[#111]/8 px-3 py-1 text-xs font-semibold text-[#5C5652]">{EDUCATION.period}</span>
              <span className="rounded-full bg-[#EDEAE4] border border-[#111]/8 px-3 py-1 text-xs font-semibold text-[#5C5652]">GPA {EDUCATION.gpa}</span>
            </div>
            <p className="mt-4 flex gap-2 text-sm leading-6 text-[#111]/75">
              <span className="mt-0.5 text-[#F2C94C] font-bold shrink-0">★</span>
              {EDUCATION.note}
            </p>
          </motion.div>
          {/* Key Achievements card */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="rounded-3xl border border-[#111]/8 bg-white p-7 shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#111]/35">Key Achievements</p>
            <ul className="space-y-2.5">
              {ACHIEVEMENTS.map(a => (
                <li key={a} className="flex gap-3 text-sm leading-6 text-[#111]/75">
                  <span className="mt-1 shrink-0 text-[#E8440A] font-bold">–</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

{/* ── PROJECTS ── */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <Label n="04" text="Projects" />
        <div className="grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.a key={p.title} href={p.href} target="_blank" rel="noreferrer"
              variants={fadeUp} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#111]/8 bg-white shadow-sm transition hover:-translate-y-1.5 hover:shadow-lg hover:border-[#E8440A]/20">
              {/* icon banner */}
              <div className="flex items-center justify-center py-10" style={{ background: p.bg }}>
                <span className="text-5xl">{p.icon}</span>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#EDEAE4] px-3 py-1 text-[10px] font-bold text-[#5C5652]">{p.tag}</span>
                  <span className="rounded-full bg-[#EDEAE4] border border-[#111]/8 px-2.5 py-0.5 text-[10px] font-bold text-[#5C5652] transition group-hover:bg-[#E8440A] group-hover:text-white group-hover:border-[#E8440A]">
                    Live ↗
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black transition group-hover:text-[#E8440A]">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-[#111]/75">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

{/* ── WRITING ── */}
      <section id="writing" className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <div className="mb-10 flex items-center gap-3">
          <span className="font-mono text-xs text-[#111]/30">05</span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5C5652]">Writing</span>
          <span className="rounded-full bg-[#E8440A] px-2.5 py-0.5 text-[10px] font-black text-white">
            {WRITINGS.length} articles
          </span>
          <div className="flex-1 h-px bg-[#111]/10" />
          <a href="https://medium.com/@oderisteipsum" target="_blank" rel="noreferrer"
            className="text-xs font-bold text-[#111]/35 underline underline-offset-4 transition hover:text-[#E8440A]">
            Medium →
          </a>
        </div>
        <div className="space-y-1">
          {WRITINGS.map((w, i) => (
            <motion.a key={w.title} href={w.href} target="_blank" rel="noreferrer"
              variants={fadeLeft} initial="hidden" whileInView="visible"
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              className="group flex items-center justify-between gap-6 rounded-2xl px-5 py-4 transition hover:bg-white hover:shadow-sm">
              <div className="flex items-center gap-4 min-w-0">
                <span className="shrink-0 font-mono text-xs text-[#111]/25">0{i + 1}</span>
                <h3 className="truncate text-sm font-bold text-[#111] transition group-hover:text-[#E8440A]">
                  {w.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-4">
                <span className="hidden text-xs text-[#111]/35 md:block">{w.date}</span>
                <span className="text-[#111]/25 transition group-hover:text-[#E8440A]">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

{/* ── CONTACT ── */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <motion.div
          variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[2.5rem] bg-white text-[#111] border border-[#111]/8 shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* left */}
            <div className="p-10 md:p-14">
              <Label n="06" text="Contact" />
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                Let&apos;s build<br />something<br />
                <span className="text-[#E8440A]">great.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#111]/65">
                Open to new roles, freelance projects, and collaborations.
              </p>
              <a href="mailto:quraishrahmatulloh@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E8440A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#F2C94C] hover:text-[#111]">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                quraishrahmatulloh@gmail.com
              </a>
            </div>

            {/* right — socials */}
            <div className="border-t border-[#111]/8 p-10 md:border-l md:border-t-0 md:p-14">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#5C5652]">Find me on</p>
              <div className="space-y-2">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    className="group flex items-center justify-between rounded-2xl border border-[#111]/8 bg-[#EDEAE4] px-4 py-3.5 text-sm font-semibold text-[#111]/70 transition hover:bg-[#111] hover:text-white">
                    {s.label}
                    <span className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                ))}
              </div>

              {/* CV download in contact too */}
              <a href="/cv.pdf" download
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-[#111]/8 bg-[#EDEAE4] px-4 py-3.5 text-sm font-bold text-[#111]/70 transition hover:bg-[#111] hover:text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M8 12l4 4 4-4M12 4v12" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="mx-auto max-w-6xl px-6 py-8 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#111]/8 pt-8">
          <p className="text-xs font-semibold text-[#111]/30">
            © {new Date().getFullYear()} Quraish Rahmatulloh
          </p>
          <p className="text-xs font-semibold text-[#111]/30">
            Built because I&apos;m so bored
          </p>
        </div>
      </footer>

    </div>
  );
}
