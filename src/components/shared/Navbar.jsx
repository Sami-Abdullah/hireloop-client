"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3"
        style={{
          background: "rgba(8, 12, 20, 0.75)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 1px 0 0 rgba(59,111,245,0.15), 0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 no-underline"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{
              background: "linear-gradient(135deg, #3b6ff5 0%, #6b3cf5 100%)",
              boxShadow: "0 0 12px rgba(59,111,245,0.35)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-white" aria-hidden="true">
              <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M8 12a4 4 0 0 1 8 0"
                stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <span
            className="text-xl font-bold tracking-tight"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: "linear-gradient(135deg, #e8eeff 0%, #8faeff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            hireloop
          </span>
        </Link>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative px-4 py-2 rounded-lg text-sm no-underline transition-all duration-150"
                style={{
                  color: "#7a8cad",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#c8d8ff";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#7a8cad";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop actions ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/signin"
            className="px-4 py-2 rounded-lg text-sm no-underline transition-all duration-150"
            style={{
              color: "#7a8cad",
              fontFamily: "'DM Sans', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c8d8ff";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#7a8cad";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Sign In
          </Link>

          <Button
            as="a"
            href="/signup"
            className="rounded-xl px-5 py-2 text-sm font-medium text-white transition-all duration-150 hover:opacity-90 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3b6ff5 0%, #6b3cf5 100%)",
              boxShadow: "0 0 16px rgba(59,111,245,0.3)",
              fontFamily: "'DM Sans', sans-serif",
              border: "none",
              minWidth: "unset",
              height: "unset",
            }}
          >
            Get Started
          </Button>
        </div>

        {/* ── Mobile menu toggle ── */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-150"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#7a8cad",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen
            ? <Xmark className="h-5 w-5" />
            : <Bars className="h-5 w-5" />
          }
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {isMenuOpen && (
        <div
          className="mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          style={{
            background: "rgba(8, 12, 20, 0.92)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex w-full items-center rounded-lg px-4 py-3 text-sm no-underline transition-all duration-150"
                  style={{
                    color: "#7a8cad",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#c8d8ff";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#7a8cad";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <div
                className="my-2 h-px w-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
                aria-hidden="true"
              />
            </li>

            <li>
              <Link
                href="/signin"
                className="flex w-full items-center rounded-lg px-4 py-3 text-sm no-underline"
                style={{ color: "#7a8cad", fontFamily: "'DM Sans', sans-serif" }}
              >
                Sign In
              </Link>
            </li>
            <li className="px-1 pb-1">
              <Button
                as="a"
                href="/signup"
                className="w-full rounded-xl py-3 text-sm font-medium text-white transition-all duration-150 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #3b6ff5 0%, #6b3cf5 100%)",
                  boxShadow: "0 0 16px rgba(59,111,245,0.25)",
                  fontFamily: "'DM Sans', sans-serif",
                  border: "none",
                  height: "unset",
                }}
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}