const achievements = [
  {
    icon: "💼",
    value: "50K+",
    label: "Jobs posted this month",
    delta: "+18% vs last month",
    deltaType: "up",
    accent: "linear-gradient(90deg,#3b6ff5,#6b3cf5)",
  },
  {
    icon: "👥",
    value: "2.4M",
    label: "Active job seekers",
    delta: "+31% year on year",
    deltaType: "up",
    accent: "linear-gradient(90deg,#1d9e75,#3b6ff5)",
  },
  {
    icon: "🏢",
    value: "12K",
    label: "Companies hiring",
    delta: "+9% this quarter",
    deltaType: "up",
    accent: "linear-gradient(90deg,#6b3cf5,#d4537e)",
  },
  {
    icon: "⚡",
    value: "4 days",
    label: "Average time to hire",
    delta: "2x faster than industry",
    deltaType: "neutral",
    accent: "linear-gradient(90deg,#ef9f27,#d85a30)",
  },
  {
    icon: "✅",
    value: "89%",
    label: "Successful placements",
    delta: "Industry-leading rate",
    deltaType: "neutral",
    accent: "linear-gradient(90deg,#3b6ff5,#1d9e75)",
  },
  {
    icon: "⭐",
    value: "4.9",
    label: "Average employer rating",
    delta: "From 18K+ reviews",
    deltaType: "neutral",
    accent: "linear-gradient(90deg,#d4537e,#6b3cf5)",
  },
];

const categories = [
  { label: "Engineering", percent: 34, accent: "linear-gradient(90deg,#3b6ff5,#6b3cf5)" },
  { label: "Design", percent: 21, accent: "linear-gradient(90deg,#6b3cf5,#d4537e)" },
  { label: "Marketing", percent: 18, accent: "linear-gradient(90deg,#1d9e75,#3b6ff5)" },
  { label: "Product", percent: 15, accent: "linear-gradient(90deg,#ef9f27,#d85a30)" },
  { label: "Operations", percent: 12, accent: "linear-gradient(90deg,#d4537e,#6b3cf5)" },
];

export default function AchievementsSection() {
  return (
    <section
      className="w-full  py-24"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{
            background: "rgba(59,111,245,0.10)",
            border: "1px solid rgba(59,111,245,0.20)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#3b6ff5" }}
          />
          <span
            className="text-xs font-medium tracking-wide"
            style={{ color: "#8faeff" }}
          >
            By the numbers
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl font-bold leading-tight mb-3"
          style={{ color: "inherit" }}
        >
          Trusted by thousands,<br />growing every day
        </h2>
        <p
          className="text-base mb-12 max-w-lg"
          style={{ color: "#6b7a99", lineHeight: "1.7" }}
        >
          HireLoop connects the right people to the right roles — faster, smarter, and at scale.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="relative rounded-2xl p-5 overflow-hidden"
              style={{
                background: "rgba(128,128,128,0.08)",
                border: "1px solid rgba(128,128,128,0.12)",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: item.accent }}
              />

              <div className="text-2xl mb-3">{item.icon}</div>

              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "inherit" }}
              >
                {item.value}
              </div>

              <div
                className="text-sm mb-3"
                style={{ color: "#6b7a99" }}
              >
                {item.label}
              </div>

              <div
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                style={
                  item.deltaType === "up"
                    ? { background: "rgba(29,158,117,0.12)", color: "#1d9e75" }
                    : { background: "rgba(59,111,245,0.10)", color: "#8faeff" }
                }
              >
                {item.deltaType === "up" ? "↑" : "→"} {item.delta}
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
}