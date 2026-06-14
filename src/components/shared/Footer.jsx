"use client";

import { Link } from "@heroui/react";
import { LogoGithub, LogoLinkedin, LogoStackOverflow } from "@gravity-ui/icons";

const footerLinks = {
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  jobSeekers: {
    title: "Job Seekers",
    links: [
      { label: "Browse Jobs", href: "/jobs" },
      { label: "Saved Jobs", href: "/saved" },
      { label: "Profile", href: "/profile" },
    ],
  },
  employers: {
    title: "Employers",
    links: [
      { label: "Post a Job", href: "/post-job" },
      { label: "Pricing", href: "/pricing" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
};

const socialLinks = [
  {
    icon: LogoGithub,
    href: "https://github.com",
    label: "GitHub",
    hoverColor: "hover:text-white",
  },
  {
    icon: LogoLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2]",
  },
  {
    icon: LogoStackOverflow,
    href: "https://twitter.com",
    label: "Twitter / X",
    hoverColor: "hover:text-[#1D9BF0]",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#080c14]">
      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3b6ff5]/60 to-transparent" />

      {/* Subtle background mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 10% 0%, rgba(59,111,245,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 90% 100%, rgba(99,60,245,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-10 lg:px-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* ── Brand column (spans 2 cols on lg) ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center gap-2 no-underline">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b6ff5] to-[#6b3cf5] shadow-lg shadow-[#3b6ff5]/25 transition-transform duration-300 group-hover:scale-110">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 12a4 4 0 0 1 8 0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </span>
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: "'DM Sans', 'Sora', sans-serif",
                  background: "linear-gradient(135deg, #e8eeff 0%, #8faeff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                hireloop
              </span>
            </Link>

            <p
              className="max-w-xs text-sm leading-relaxed text-[#7a8cad]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              The AI-native career platform built for people who take their work
              seriously. Discover roles that truly fit.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group flex h-9 w-9 items-center justify-center rounded-lg
                    border border-white/[0.07] bg-white/[0.04]
                    text-[#4e637d] transition-all duration-200
                    hover:border-white/15 hover:bg-white/[0.08] ${hoverColor}
                    hover:shadow-md hover:-translate-y-0.5
                  `}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Link columns ── */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-[#3b6ff5]"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em" }}
              >
                {section.title}
              </p>
              <ul className="flex flex-col gap-3">
                {section.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="
                        group relative inline-flex items-center gap-1.5
                        text-sm text-[#5c738f] no-underline
                        transition-colors duration-150 hover:text-[#c8d8ff]
                      "
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span
                        className="absolute -left-3 h-1 w-1 rounded-full bg-[#3b6ff5] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-left-2"
                        aria-hidden="true"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p
            className="text-xs text-[#3d5270]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} Hireloop Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
            ].map(({ label, href }, i, arr) => (
              <span key={label} className="flex items-center gap-5">
                <Link
                  href={href}
                  className="text-xs text-[#3d5270] no-underline transition-colors duration-150 hover:text-[#8faeff]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="h-3 w-px bg-white/10" aria-hidden="true" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
