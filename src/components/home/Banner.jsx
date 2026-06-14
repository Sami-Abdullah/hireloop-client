"use client";

import { useState } from "react";
import { Magnifier, MapPin } from "@gravity-ui/icons";

const trendingTags = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function Banner() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    console.log("Search:", { query, location });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(80,60,200,0.18) 0%, transparent 70%), #0a0a0f",
      }}
    >

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl w-full gap-6">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#a0a8c0",
            backdropFilter: "blur(8px)",
            fontFamily: "monospace",
            letterSpacing: "0.15em",
          }}
        >
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-base"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            💼
          </span>
          <span>
            <strong className="text-white font-semibold">50,000+</strong>{" "}
            NEW JOBS THIS MONTH
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Find Your Dream Job Today
        </h1>

        {/* Subheading */}
        <p
          className="text-base sm:text-lg max-w-xl"
          style={{ color: "#7a8cad", fontFamily: "'DM Sans', sans-serif", lineHeight: "1.7" }}
        >
          HireLoop connects top talent with world-class companies. Browse thousands of
          curated opportunities and land your next role — faster.
        </p>

        {/* Search Bar */}
        <div
          className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-0 mt-4 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Job input */}
          <div className="flex items-center gap-3 flex-1 px-5 py-4">
            <Magnifier className="w-5 h-5 flex-shrink-0" style={{ color: "#5a6a88" }} />
            <input
              type="text"
              placeholder="Job title, skill or company"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder:text-[#4a5a78] text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block w-px self-stretch"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-hidden="true"
          />
          <div
            className="block sm:hidden h-px w-full mx-5"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-hidden="true"
          />

          {/* Location input */}
          <div className="flex items-center gap-3 flex-1 px-5 py-4">
            <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: "#5a6a88" }} />
            <input
              type="text"
              placeholder="Location or Remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder:text-[#4a5a78] text-sm"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>

          {/* Search button */}
          <div className="px-2 py-2 flex-shrink-0">
            <button
              onClick={handleSearch}
              className="flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-150 hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #4f6ef7 0%, #6b3cf5 100%)",
              }}
              aria-label="Search jobs"
            >
              <Magnifier className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Trending tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          <span
            className="text-sm"
            style={{ color: "#5a6a88", fontFamily: "'DM Sans', sans-serif" }}
          >
            Trending Position
          </span>
          {trendingTags.map((tag) => (
            <button
              key={tag}
              className="px-4 py-1.5 rounded-full text-sm transition-all duration-150 hover:bg-white/10"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#c8d4f0",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}