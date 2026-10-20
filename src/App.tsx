import { useEffect, useState } from "react";
import aboutData from "../public/content/about.json";
import experienceData from "../public/content/experience.json";
import projectsData from "../public/content/projects.json";
import skillsData from "../public/content/skills.json";
import ContactForm from "./contactForm";

const GITHUB = "https://github.com/sulenchy";
const LINKEDIN = "https://www.linkedin.com/in/abudu-abiodun-751b12b0/";
const TWITTER = "https://twitter.com/ababsul";
const FACEBOOK = "https://www.facebook.com/sulenchy";
const RESUME = "/resume.pdf";

const NAV = ["Work", "About", "Experience"] as const;

const PRACTICES = [
  "Full-stack product engineering",
  "Technical education",
  "Frontend systems",
  "Mentorship",
];

const PROJECT_META: Record<string, { type: string; accent: string }> = {
  "1": { type: "Desktop app", accent: "bg-[#d9ff5b]" },
  "2": { type: "Mobile app", accent: "bg-[#b7a8ff]" },
  "3": { type: "Open source", accent: "bg-[#ff8d72]" },
  "4": { type: "Web product", accent: "bg-[#9ad7c2]" },
};

interface IAbout {
  greeting: string;
  bio: string;
  avatar: string;
}

interface IProject {
  id: string;
  name: string;
  description: string;
  languages: string[];
  isDeployed: boolean;
  links: {
    github: { link: string };
    deployed: string;
  };
}

interface ISkill {
  id: string;
  name: string;
  yearsOfExperience: number;
}

interface IExpr {
  id: string;
  companyName: string;
  achievement: string;
  startDate: string;
  endDate: string;
  links: { companyUrl?: string };
  role: string;
}

const footerLinks = [
  { label: "GitHub", href: GITHUB },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "Twitter", href: TWITTER },
  { label: "Facebook", href: FACEBOOK },
  { label: "Resume", href: RESUME },
];

function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 22v-4.2c.04-1.04-.36-2.04-1.1-2.75 3.6-.4 7.38-1.77 7.38-8A6.24 6.24 0 0 0 19.61 2.7 5.8 5.8 0 0 0 19.35.5S18.3.16 15 2.15a15.3 15.3 0 0 0-6 0C5.7.16 4.65.5 4.65.5a5.8 5.8 0 0 0-.26 2.2 6.24 6.24 0 0 0-1.67 4.37c0 6.22 3.78 7.59 7.38 8-.73.7-1.13 1.7-1.1 2.73V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 19c-3 .92-3-1.5-4.2-1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      )}
    </svg>
  );
}

function yearOf(value: string) {
  return value.match(/\d{4}/)?.[0] ?? "";
}

function formatSpan(start: string, end: string) {
  const startYear = yearOf(start);
  const endYear = yearOf(end);
  return endYear ? `${startYear} — ${endYear}` : `${startYear} — Now`;
}

function withProtocol(url: string) {
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function liveLabel(url: string) {
  return url.includes("npmjs.com") ? "npm" : "Live";
}

function DashboardArt({ label }: { label: string }) {
  return (
    <div className="relative h-full min-h-[340px] overflow-hidden bg-[#172b22] p-5 sm:p-7">
      <div className="absolute -right-16 -top-20 size-64 rounded-full border-[36px] border-[#d9ff5b]/20" />
      <div className="relative mx-auto flex h-full max-w-md flex-col rounded-2xl border border-white/10 bg-[#0d1713]/85 p-4 shadow-2xl backdrop-blur">
        <div className="mb-5 flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="size-2 rounded-full bg-[#d9ff5b]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">{label}</span>
        </div>
        <div className="grid flex-1 grid-cols-[.65fr_1fr] gap-3">
          <div className="space-y-2">
            {[68, 90, 58, 76].map((width, index) => (
              <div
                key={width}
                className={`h-2 rounded-full ${index === 1 ? "bg-[#d9ff5b]/60" : "bg-white/10"}`}
                style={{ width: `${width}%` }}
              />
            ))}
          </div>
          <div className="flex items-end gap-1.5 rounded-lg border border-white/5 bg-white/[.03] p-3">
            {[35, 60, 44, 80, 58, 95, 72, 88].map((height, index) => (
              <span
                key={height}
                className="flex-1 rounded-t-sm bg-[#d9ff5b]"
                style={{ height: `${height}%`, opacity: 0.35 + index * 0.07 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GridArt({ label }: { label: string }) {
  return (
    <div className="relative flex h-full min-h-[340px] items-center justify-center overflow-hidden bg-[#ece9ff] p-6">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(#988be5_1px,transparent_1px),linear-gradient(90deg,#988be5_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative grid w-full max-w-sm grid-cols-2 gap-3">
        <div className="col-span-2 flex items-center justify-between rounded-xl border border-[#9a8ce3]/30 bg-white/80 p-4 shadow-lg shadow-[#8e7adb]/10 backdrop-blur">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#514878]">{label}</span>
          <div className="flex -space-x-1.5">
            {["#3e3860", "#7569af", "#b7a8ff"].map((color) => (
              <span key={color} className="size-5 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-[#302b49] p-4 text-white shadow-xl">
          <span className="mb-10 block size-7 rounded-full bg-[#b7a8ff]" />
          <span className="block h-2 w-16 rounded bg-white/70" />
          <span className="mt-2 block h-1.5 w-10 rounded bg-white/20" />
        </div>
        <div className="flex flex-col justify-between rounded-xl border border-[#9a8ce3]/30 bg-white/90 p-4 shadow-xl">
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-[#b7a8ff]" />
            <span className="size-2 rounded-full bg-[#ddd7ff]" />
          </div>
          <span className="rounded-full bg-[#302b49] py-2 text-center font-mono text-[8px] uppercase tracking-wider text-white">
            Ship it
          </span>
        </div>
      </div>
    </div>
  );
}

function PosterArt({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="relative h-full min-h-[340px] overflow-hidden bg-[#f9e7dc] p-6">
      <div className="absolute left-[18%] top-[10%] h-[115%] w-[45%] -rotate-12 rounded-[50%] bg-[#ff8d72]" />
      <div className="absolute -bottom-[45%] right-[-5%] size-72 rounded-full bg-[#172b22]" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-[#342824]">
          <span>{label}</span>
          <span>Open work</span>
        </div>
        <div className="ml-auto w-[72%] rounded-2xl border border-white/40 bg-white/75 p-3 shadow-2xl backdrop-blur-md">
          <div className="mb-3 aspect-[2/1] overflow-hidden rounded-xl bg-[#172b22]">
            <div className="h-full w-full opacity-80 [background-image:radial-gradient(circle_at_30%_40%,#ff8d72_0,transparent_20%),radial-gradient(circle_at_70%_65%,#d9ff5b_0,transparent_14%)]" />
          </div>
          <div className="flex items-end justify-between gap-3">
            <span className="text-xs font-semibold text-[#1b241f]">{detail}</span>
            <span className="rounded-full bg-[#172b22] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-wider text-white">
              Explore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LibraryArt({ label }: { label: string }) {
  return (
    <div className="relative h-full min-h-[340px] overflow-hidden bg-[#e7f4ee] p-6">
      <div className="absolute -left-10 top-8 h-40 w-40 rounded-full bg-[#9ad7c2]" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-tl-[4rem] bg-[#14231c]" />
      <div className="relative flex h-full flex-col justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#14231c]/60">{label}</span>
        <div className="max-w-xs rounded-2xl border border-[#14231c]/10 bg-white/80 p-5 text-[#14231c] shadow-xl backdrop-blur">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#14231c]/40">npm package</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-[#14231c]">pagination-core</p>
          <div className="mt-5 flex gap-2">
            {["headless", "typed", "zero deps"].map((item) => (
              <span key={item} className="rounded-full bg-[#d9ff5b] px-2.5 py-1 text-[10px] font-semibold">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectArt({ project }: { project: IProject }) {
  if (project.id === "1") return <DashboardArt label={`${project.name} / workspace`} />;
  if (project.id === "2") return <GridArt label={project.languages[0] ?? project.name} />;
  if (project.id === "3") return <LibraryArt label="Open source" />;
  return <PosterArt label={project.name} detail={project.languages.slice(0, 2).join(" · ")} />;
}

function App() {
  const about = aboutData as IAbout;
  const experienceArr = experienceData.experience as IExpr[];
  const projectArr = projectsData.projects as IProject[];
  const skillArr = skillsData.skills as ISkill[];
  const [menuOpen, setMenuOpen] = useState(false);

  const earliestYear = experienceArr.reduce((min, item) => {
    const year = Number(yearOf(item.startDate) || min);
    return Math.min(min, year);
  }, new Date().getFullYear());
  const yearsBuilding = new Date().getFullYear() - earliestYear;
  const teachingYears = skillArr.find((skill) => skill.name.toLowerCase().includes("mentor"))?.yearsOfExperience;

  const stats = [
    [`${yearsBuilding}`, "Years building"],
    [`${projectArr.length}`, "Projects shared"],
    [teachingYears ? `${teachingYears}` : "—", "Years teaching"],
    [`${skillArr.length}`, "Skills practiced"],
  ];

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));

    const onPointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f2ec] text-[#14231c] selection:bg-[#d9ff5b] selection:text-[#14231c]">
      <header className="animate-nav fixed inset-x-0 top-0 z-50 border-b border-[#14231c]/10 bg-[#f4f2ec]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-16">
          <a href="#top" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Abudu Abiodun home">
            <span className="grid size-9 place-items-center rounded-full bg-[#14231c] text-xs font-bold text-[#d9ff5b] transition-transform group-hover:-rotate-6">
              AA
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Abudu Abiodun</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#14231c]/60 transition-colors hover:text-[#14231c]"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs font-medium text-[#14231c]/65 lg:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </span>
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-[#14231c] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#294637] hover:shadow-lg sm:flex"
            >
              Let’s talk <ArrowUpRight />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 place-items-center rounded-full border border-[#14231c]/15 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#14231c]/10 bg-[#f4f2ec] px-5 py-6 md:hidden" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-[#14231c]/10 py-4 text-xl font-semibold"
              >
                {item}
                <ArrowRight />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48 lg:px-16">
          <div className="hero-orbit pointer-events-none absolute right-[-10%] top-20 size-[34rem] rounded-full border border-[#14231c]/5 md:right-[-3%]">
            <div className="absolute inset-[18%] rounded-full border border-[#14231c]/5" />
            <div className="absolute inset-[37%] rounded-full bg-[#d9ff5b]/70 blur-3xl" />
          </div>
          <div className="relative">
            <p className="hero-intro hero-intro-1 mb-8 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#14231c]/55">
              <span className="h-px w-8 bg-[#14231c]/35" />
              Full-stack engineer · Educator
            </p>
            <h1 className="max-w-6xl text-[clamp(3.6rem,10vw,9.2rem)] font-semibold leading-[0.85] tracking-[-0.075em]">
              <span className="hero-line">
                <span className="hero-line-inner hero-intro-2">
                  I build, teach & <span className="font-serif font-normal italic tracking-[-0.055em]">ship</span>
                </span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner hero-intro-3">on the web.</span>
              </span>
            </h1>
            <div className="hero-intro hero-intro-4 mt-12 grid gap-10 md:grid-cols-[1fr_.72fr] md:items-end lg:grid-cols-[1fr_14rem_.9fr]">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group flex items-center gap-3 rounded-full bg-[#d9ff5b] px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5"
                >
                  Explore selected work
                  <span className="grid size-7 place-items-center rounded-full bg-[#14231c] text-white">
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-[#14231c]/15 px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-white"
                >
                  <GitHubIcon /> GitHub
                </a>
                <a
                  href={RESUME}
                  download="abi-resume.pdf"
                  className="flex items-center gap-2 rounded-full border border-[#14231c]/15 px-5 py-3.5 text-sm font-semibold transition-colors hover:bg-white"
                >
                  Resume
                </a>
              </div>
              <figure className="group relative max-w-64 md:row-span-2 md:max-w-none lg:row-span-1">
                <div className="absolute -inset-2 translate-x-3 translate-y-3 rounded-[1.8rem] bg-[#d9ff5b] transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
                <div className="relative overflow-hidden rounded-[1.45rem] border border-[#14231c]/10 bg-[#e5e0d5] p-2 shadow-xl shadow-[#14231c]/10 transition-transform duration-500 group-hover:-rotate-1">
                  <img
                    src={about.avatar}
                    alt="Portrait of Abudu Abiodun"
                    className="aspect-[4/5] w-full rounded-[1.05rem] object-cover object-[50%_20%]"
                  />
                  <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 font-mono text-[8px] font-medium uppercase tracking-[0.16em] text-[#14231c]/55">
                    <span>Abudu Abiodun</span>
                    <span>{about.greeting.replace(/^Hello, I am\s*/i, "")}</span>
                  </figcaption>
                </div>
              </figure>
              <p className="max-w-lg text-lg leading-relaxed text-[#14231c]/65 md:justify-self-end lg:pl-3">
                {about.bio}
              </p>
            </div>
          </div>
          <div className="hero-intro hero-intro-5 mt-20 grid grid-cols-2 border-y border-[#14231c]/10 py-8 md:mt-28 md:grid-cols-4">
            {stats.map(([value, label], index) => (
              <div
                key={label}
                className={`border-[#14231c]/10 px-4 py-3 first:pl-0 md:border-l md:first:border-l-0 md:first:pl-0 ${index % 2 ? "border-l" : ""}`}
              >
                <strong className="block text-3xl font-semibold tracking-tight md:text-4xl">{value}</strong>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.13em] text-[#14231c]/45">{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="bg-[#14231c] py-24 text-white md:py-32">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-16">
            <div data-reveal className="reveal mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
              <div>
                <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#d9ff5b]">01 / Selected practice</p>
                <h2 className="text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
                  Ideas brought
                  <br />
                  <span className="font-serif font-normal italic text-white/55">to life.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/50">
                Selected work across products, tools, and learning systems, grounded in clarity and technical depth.
              </p>
            </div>
            <div className="space-y-5">
              {projectArr.map((project, index) => {
                const meta = PROJECT_META[project.id] ?? { type: "Product", accent: "bg-[#d9ff5b]" };
                const primary = project.isDeployed && project.links.deployed ? project.links.deployed : project.links.github.link;
                return (
                  <article
                    key={project.id}
                    data-reveal
                    data-delay={String((index % 3) + 1)}
                    className="reveal project-card group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] lg:grid-cols-[.9fr_1.1fr]"
                  >
                    <div className="flex min-h-[340px] flex-col p-7 md:p-10 lg:min-h-[460px]">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-white/35">{String(index + 1).padStart(2, "0")}</span>
                        <span className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#14231c] ${meta.accent}`}>
                          {meta.type}
                        </span>
                      </div>
                      <div className="my-auto py-12">
                        <h3 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{project.name}</h3>
                        <p className="mt-5 max-w-md text-base leading-7 text-white/55">{project.description}</p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <div className="flex flex-wrap gap-2">
                          {project.languages.map((language) => (
                            <span key={language} className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/50">
                              {language}
                            </span>
                          ))}
                          {project.isDeployed && project.links.deployed && (
                            <a
                              href={project.links.deployed}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-[#d9ff5b]/40 px-3 py-1.5 text-[11px] text-[#d9ff5b]"
                            >
                              {liveLabel(project.links.deployed)}
                            </a>
                          )}
                          {project.links.github.link && primary !== project.links.github.link && (
                            <a
                              href={project.links.github.link}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/70"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                        <a
                          href={primary}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${project.name}`}
                          className="grid size-11 place-items-center rounded-full bg-white text-[#14231c] transition-transform duration-300 group-hover:rotate-45"
                        >
                          <ArrowUpRight className="size-5" />
                        </a>
                      </div>
                    </div>
                    <div className="project-art m-2 min-h-[360px] overflow-hidden rounded-[1.55rem] lg:min-h-0">
                      <ProjectArt project={project} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[.7fr_1.3fr] lg:px-16">
          <div data-reveal className="reveal">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14231c]/50">02 / What I do</p>
            <div className="mt-10 hidden size-48 place-items-center rounded-full border border-[#14231c]/10 lg:grid">
              <div className="grid size-28 place-items-center rounded-full bg-[#d9ff5b]">
                <span className="text-center font-mono text-[9px] font-bold uppercase leading-4 tracking-widest">
                  Build
                  <br />
                  teach
                  <br />
                  ship
                </span>
              </div>
            </div>
            <ul className="mt-8 flex max-w-sm flex-wrap gap-2">
              {skillArr.map((skill) => (
                <li key={skill.id} className="rounded-full border border-[#14231c]/10 px-3 py-1.5 text-[11px] text-[#14231c]/60">
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal data-delay="1" className="reveal">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl">
              I work across the full stack, then turn what I learn into{" "}
              <span className="font-serif font-normal italic text-[#14231c]/45">knowledge others can use.</span>
            </h2>
            <div className="mt-14 border-t border-[#14231c]/10">
              {PRACTICES.map((practice, index) => (
                <div key={practice} className="group flex items-center justify-between border-b border-[#14231c]/10 py-5 md:py-7">
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[10px] text-[#14231c]/35">0{index + 1}</span>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{practice}</h3>
                  </div>
                  <ArrowUpRight className="size-5 text-[#14231c]/25 transition-transform group-hover:rotate-45 group-hover:text-[#14231c]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-[#14231c]/10 bg-white/40">
          <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 lg:px-16">
            <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
              <div data-reveal className="reveal">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14231c]/50">03 / Experience</p>
                <h2 className="mt-5 text-5xl font-semibold tracking-[-0.055em]">
                  A decade
                  <br />
                  <span className="font-serif font-normal italic text-[#14231c]/40">in the craft.</span>
                </h2>
              </div>
              <div data-reveal data-delay="1" className="reveal">
                {experienceArr.map((job) => {
                  const companyHref = withProtocol(job.links.companyUrl ?? "");
                  return (
                    <div key={job.id} className="grid gap-3 border-t border-[#14231c]/10 py-7 sm:grid-cols-[.65fr_1.35fr]">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#14231c]/40">
                        {formatSpan(job.startDate, job.endDate)}
                      </span>
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold">{job.role}</h3>
                            {companyHref ? (
                              <a href={companyHref} target="_blank" rel="noreferrer" className="mt-1 block text-sm text-[#14231c]/50 hover:text-[#14231c]">
                                {job.companyName}
                              </a>
                            ) : (
                              <p className="mt-1 text-sm text-[#14231c]/50">{job.companyName}</p>
                            )}
                          </div>
                          <span className="mt-2 size-2 shrink-0 rounded-full bg-[#d9ff5b] ring-4 ring-[#d9ff5b]/25" />
                        </div>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-[#14231c]/55">{job.achievement}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#d9ff5b] text-[#14231c]">
        <div data-reveal className="reveal mx-auto max-w-[1440px] px-5 py-20 md:px-10 md:py-28 lg:px-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#14231c]/55">
            Build a product, teach a team, or tell a better story
          </p>
          <div className="mt-8 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              Let’s make the
              <br />
              <span className="font-serif font-normal italic">complex click.</span>
            </h2>
            <a
              href="#contact-form"
              className="grid size-28 shrink-0 place-items-center rounded-full bg-[#14231c] text-center text-sm font-semibold text-white transition-transform hover:rotate-6 md:size-36"
            >
              Start a
              <br />
              conversation
            </a>
          </div>
          <div className="mt-16">
            <ContactForm />
          </div>
          <div className="mt-20 flex flex-col justify-between gap-5 border-t border-[#14231c]/20 pt-6 text-xs font-medium sm:flex-row">
            <span>© {new Date().getFullYear()} Abudu Abiodun. Built with care.</span>
            <div className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : { download: "abi-resume.pdf" })}
                  className="hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
