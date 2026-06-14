"use client";

import {
  Briefcase,
  ChartColumn,
  PersonMagnifier,
  Star,
} from "@gravity-ui/icons";
import globeImage from "@/assets/images/globe.png";
import Image from "next/image";
const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: ChartColumn,           value: "12K", label: "Companies" },
  { icon: PersonMagnifier,    value: "2M",  label: "Job Seekers" },
  { icon: Star,               value: "97%", label: "Satisfaction Rate" },
];

export default function StatsSection() {
  return (
   <section className="relative w-full overflow-hidden" style={{ minHeight: "700px" }}>
  {/* Globe background */}
  <div className="absolute inset-0" aria-hidden="true">
    <Image
      src={globeImage}
      alt=""
      fill
      className="object-cover object-top"
      priority
    />
  </div>


      {/* dark vignette overlay — fades edges to black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, transparent 40%, #08080f 85%)," +
            "linear-gradient(to bottom, rgba(8,8,15,0.35) 0%, rgba(8,8,15,0.0) 30%, rgba(8,8,15,0.55) 65%, #08080f 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-48 sm:pt-56 md:pt-64">

        {/* Headline */}
        <p
          className="mb-16 max-w-xl text-center text-2xl sm:text-3xl md:text-4xl leading-snug"
          style={{
            color: "rgba(255,255,255,0.88)",
            fontFamily: "'DM Sans', sans-serif",
            textShadow: "0 2px 24px rgba(0,0,0,0.6)",
          }}
        >
          Assisting over{" "}
          <strong className="text-white font-bold">15,000 job seekers</strong>{" "}
          find their dream positions.
        </p>

        {/* Stat cards */}
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="group flex flex-col justify-between rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "rgba(15, 15, 22, 0.82)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                minHeight: "180px",
              }}
            >
              {/* Icon */}
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                />
              </div>

              {/* Value + label */}
              <div className="mt-8">
                <p
                  className="text-5xl font-bold text-white"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {value}
                </p>
                <p
                  className="mt-2 text-sm"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}