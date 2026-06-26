"use client";

import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "UI Systems",
  "Content Strategy",
  "Product Thinking",
  "Accessibility",
];

const experiences = [
  {
    company: "Independent Studio",
    role: "Frontend Developer",
    period: "2025 - Present",
    achievements: [
      "Built responsive portfolio and landing page experiences with strong performance targets.",
      "Translated brand ideas into polished interfaces with reusable component patterns.",
      "Improved content hierarchy, accessibility labels, and mobile navigation quality.",
    ],
  },
  {
    company: "Campus Creative Lab",
    role: "Web & Design Lead",
    period: "2024 - 2025",
    achievements: [
      "Led visual direction for community pages, event microsites, and digital campaigns.",
      "Collaborated with organizers to ship clear information architecture under tight timelines.",
      "Created templates that made future content updates faster and more consistent.",
    ],
  },
  {
    company: "Freelance Projects",
    role: "Digital Builder",
    period: "2023 - 2024",
    achievements: [
      "Delivered lightweight websites for personal brands, student groups, and small initiatives.",
      "Focused on fast loading pages, clean copy, and simple maintenance workflows.",
      "Experimented with motion, layout systems, and modern SaaS-inspired UI details.",
    ],
  },
];

const projects = [
  {
    title: "Signal Portfolio",
    description:
      "A refined personal site for showcasing work, writing, and social proof with a calm editorial layout.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "Launch Notes",
    description:
      "A product announcement template with reusable sections for metrics, testimonials, and feature highlights.",
    tech: ["React", "Framer Motion", "A11y"],
    live: "https://example.com",
    github: "https://github.com/",
  },
  {
    title: "Community Hub",
    description:
      "A fast information hub for events, team profiles, and important resources across a growing community.",
    tech: ["Next.js", "CMS-ready", "SEO"],
    live: "https://example.com",
    github: "https://github.com/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-cyan-glow">{number}.</span>
      <h2 className="text-2xl font-bold tracking-tight text-slateText-100 md:text-3xl">{title}</h2>
      <div className="hidden h-px flex-1 bg-slateText-300/20 sm:block" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-navy-900/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#home"
            className="rounded border border-cyan-glow px-3 py-2 font-mono text-sm font-bold text-cyan-glow transition hover:bg-cyan-glow/10"
            aria-label="Go to homepage"
          >
            FQ
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-slateText-200 transition hover:text-cyan-glow"
              >
                <span className="text-cyan-glow">0{index + 1}.</span> {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@example.com"
            className="rounded border border-cyan-glow px-4 py-2 font-mono text-sm text-cyan-glow transition hover:-translate-y-0.5 hover:bg-cyan-glow/10"
          >
            Say hello
          </a>
        </nav>
      </header>

      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-24 pt-32 md:px-10"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="mb-5 font-mono text-base text-cyan-glow">Hi, my name is</p>
          <h1 className="text-balance text-5xl font-extrabold tracking-tight text-slateText-100 md:text-7xl lg:text-8xl">
            Faqih Ramadhan.
          </h1>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-slateText-300 md:text-6xl lg:text-7xl">
            I build polished digital experiences.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slateText-200">
            I am a frontend-focused creator who enjoys turning ideas into fast,
            accessible, and visually thoughtful websites for people, products, and
            communities.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded border border-cyan-glow px-6 py-4 font-mono text-sm font-semibold text-cyan-glow transition hover:-translate-y-1 hover:bg-cyan-glow/10"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded bg-cyan-glow px-6 py-4 font-mono text-sm font-semibold text-navy-950 transition hover:-translate-y-1 hover:bg-cyan-soft"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="01" title="About Me" />
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-lg leading-8 text-slateText-200">
              <p>
                I create interfaces that feel sharp, trustworthy, and easy to use.
                My work blends technical execution with visual judgment, so every
                page has a clear purpose and a calm rhythm.
              </p>
              <p>
                Outside of coding, I like shaping ideas into practical systems:
                content plans, brand directions, simple workflows, and digital spaces
                that make a project feel more real.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 shadow-glow">
              <h3 className="mb-5 text-lg font-bold text-slateText-100">Skills I use</h3>
              <ul className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <li key={skill} className="font-mono text-sm text-slateText-200">
                    <span className="mr-2 text-cyan-glow">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionLabel number="02" title="Experience" />
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="relative rounded-lg border border-white/10 bg-navy-850/70 p-6 transition hover:-translate-y-1 hover:border-cyan-glow/40 hover:bg-navy-800/80"
            >
              <div className="absolute bottom-0 left-8 top-16 hidden w-px bg-cyan-glow/25 md:block" />
              <div className="grid gap-5 md:grid-cols-[180px_1fr]">
                <p className="font-mono text-sm text-cyan-glow">{job.period}</p>
                <div>
                  <h3 className="text-xl font-bold text-slateText-100">
                    {job.role} <span className="text-cyan-glow">@ {job.company}</span>
                  </h3>
                  <ul className="mt-4 space-y-3 text-slateText-200">
                    {job.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-1 text-cyan-glow">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionLabel number="03" title="Projects" />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group flex min-h-[360px] flex-col rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-glow transition hover:-translate-y-2 hover:border-cyan-glow/40"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl text-cyan-glow">□</span>
                <div className="flex gap-4 font-mono text-sm text-slateText-200">
                  <a href={project.github} className="transition hover:text-cyan-glow">
                    GitHub
                  </a>
                  <a href={project.live} className="transition hover:text-cyan-glow">
                    Live
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slateText-100 transition group-hover:text-cyan-glow">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 leading-7 text-slateText-200">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs text-slateText-300">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 py-28 text-center md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-cyan-glow">04. What&apos;s Next?</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-slateText-100 md:text-5xl">
            Let&apos;s build something clean.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slateText-200">
            I am open to collaborations, freelance work, and thoughtful conversations
            about design, websites, and digital products.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="rounded border border-cyan-glow px-6 py-4 font-mono text-sm font-semibold text-cyan-glow transition hover:-translate-y-1 hover:bg-cyan-glow/10"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/"
              className="rounded border border-cyan-glow px-6 py-4 font-mono text-sm font-semibold text-cyan-glow transition hover:-translate-y-1 hover:bg-cyan-glow/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/"
              className="rounded border border-cyan-glow px-6 py-4 font-mono text-sm font-semibold text-cyan-glow transition hover:-translate-y-1 hover:bg-cyan-glow/10"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="px-6 py-8 text-center font-mono text-xs text-slateText-300">
        Designed and built by Faqih. Inspired by clean developer portfolios.
      </footer>
    </main>
  );
}
