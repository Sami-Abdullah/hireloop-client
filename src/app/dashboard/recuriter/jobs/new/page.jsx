'use client'

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createJob } from "@/lib/actions/jobs";

const JOB_TYPES = [
  "Field Mission",
  "Contract Mission",
  "Full-Time Assignment",
  "Freelance Operation",
  "Bounty Hunt",
  "Assassination Contract",
  "Escort / Protection Duty",
  "Infiltration Mission",
  "Espionage Operation",
  "Reconnaissance Mission",
  "Research Expedition",
  "Experimental / Trial Mission"
];
const CATEGORIES = [
  "Combat / Extermination",
  "Bounty Hunting",
  "Assassination",
  "Bodyguard / Escort Protection",
  "Espionage / Intelligence",
  "Infiltration / Undercover Ops",
  "Security / Defense",
  "Exploration / Expedition",
  "Archaeology / Ruins Recovery",
  "Beast Hunting",
  "Biological Research",
  "Nen Training / Special Development",
  "Law Enforcement (Hunter Division)",
  "Treasure Hunting",
  "Game / Simulation Testing",
  "Surveillance / Reconnaissance",
  "Other"
];
const CURRENCIES = ["USD", "EUR", "GBP", "BDT", "AED", "CAD", "AUD"];

const NewJob = () => {
  const [isRemote, setIsRemote] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      jobType: "Full-time",
      currency: "BDT",
      
    },
  });
  
  const onSubmit = async (data) => {
    try {
      const payload = { ...data, status: "active",companyId:'company_123' };
      console.log("Job payload:", payload);
      const res = await createJob(payload)
     
      if (res.insertedId) {

        toast.success("Job posted successfully");
        reset()
        router.push("/dashboard/recuriter/jobs");
      }
    } catch (err) {
      toast.error("Failed to post job");
      console.error(err);
    }
  };

  const inputClass = (hasError) => `
    w-full bg-[#111827] text-[#c8d8ff] placeholder:text-[#3d5270] text-sm
    px-4 py-3 rounded-xl outline-none transition-colors border
    ${hasError
      ? "border-red-500/60"
      : "border-white/[0.08] hover:border-[#3b6ff5]/40 focus:border-[#3b6ff5]/60"
    }
  `;

  const labelClass = "text-xs font-medium text-[#7a8cad]";
  const errorClass = "text-xs text-red-400 mt-0.5";
  const sectionClass = "bg-[#0d1220] border border-white/[0.07] rounded-2xl p-6";

  return (
    <div
      className="min-h-screen px-4 py-10"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-4"
            style={{
              background: "rgba(59,111,245,0.10)",
              border: "1px solid rgba(59,111,245,0.20)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b6ff5]" />
            <span className="text-xs text-[#8faeff] font-medium">New listing</span>
          </div>
          <h1 className="text-3xl font-bold text-[#e8eeff] tracking-tight">Post a job</h1>
          <p className="text-sm text-[#5c738f] mt-1">Fill in the details below to publish your listing.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-6">

            {/* ── Section 1: Job Info ── */}
            <div className={sectionClass}>
              <h2 className="text-sm font-semibold text-[#c8d8ff] mb-5 pb-3 border-b border-white/[0.06]">
                Job info
              </h2>

              <div className="flex flex-col gap-4">

                {/* Job Title */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Job title</label>
                  <input
                    type="text"
                    placeholder="e.g. Senior Frontend Engineer"
                    className={inputClass(errors.jobTitle)}
                    {...register("jobTitle", { required: "Job title is required" })}
                  />
                  {errors.jobTitle && <p className={errorClass}>{errors.jobTitle.message}</p>}
                </div>

                {/* Category + Job Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Category</label>
                    <select
                      className={inputClass(errors.category)}
                      {...register("category", { required: "Category is required" })}
                    >
                      <option value="" disabled>Select a category</option>
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.category && <p className={errorClass}>{errors.category.message}</p>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass}>Job type</label>
                    <select
                      className={inputClass(errors.jobType)}
                      {...register("jobType", { required: "Job type is required" })}
                    >
                      {JOB_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.jobType && <p className={errorClass}>{errors.jobType.message}</p>}
                  </div>
                </div>

                {/* Salary */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Salary range</label>
                  <div className="grid grid-cols-3 gap-3">
                    <select
                      className={inputClass(false)}
                      {...register("currency")}
                    >
                      {CURRENCIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      placeholder="Min"
                      className={inputClass(errors.salaryMin)}
                      {...register("salaryMin", {
                        required: "Required",
                        min: { value: 0, message: "Must be positive" },
                      })}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className={inputClass(errors.salaryMax)}
                      {...register("salaryMax", {
                        required: "Required",
                        min: { value: 0, message: "Must be positive" },
                        validate: (val) =>
                          Number(val) >= Number(watch("salaryMin")) || "Max must be ≥ min",
                      })}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div />
                    {errors.salaryMin && <p className={errorClass}>{errors.salaryMin.message}</p>}
                    {errors.salaryMax && <p className={errorClass}>{errors.salaryMax.message}</p>}
                  </div>
                </div>

                {/* Location / Remote */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label className={labelClass}>Location</label>
                    <button
                      type="button"
                      onClick={() => setIsRemote(!isRemote)}
                      className="flex items-center gap-2 text-xs transition-colors"
                      style={{ color: isRemote ? "#8faeff" : "#5c738f" }}
                    >
                      <span
                        className="relative inline-flex w-8 h-4 rounded-full transition-colors duration-200"
                        style={{
                          background: isRemote ? "rgba(59,111,245,0.6)" : "rgba(255,255,255,0.1)",
                        }}
                      >
                        <span
                          className="absolute top-0.5 w-3 h-3 rounded-full bg-white transition-all duration-200"
                          style={{ left: isRemote ? "18px" : "2px" }}
                        />
                      </span>
                      Remote only
                    </button>
                  </div>

                  {!isRemote && (
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        className={inputClass(errors.city)}
                        {...register("city", { required: !isRemote && "City is required" })}
                      />
                      <input
                        type="text"
                        placeholder="Country"
                        className={inputClass(errors.country)}
                        {...register("country", { required: !isRemote && "Country is required" })}
                      />
                    </div>
                  )}
                  {!isRemote && (
                    <div className="grid grid-cols-2 gap-3">
                      {errors.city && <p className={errorClass}>{errors.city.message}</p>}
                      {errors.country && <p className={errorClass}>{errors.country.message}</p>}
                    </div>
                  )}
                </div>

                {/* Deadline */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Application deadline</label>
                  <input
                    type="date"
                    className={inputClass(errors.deadline)}
                    {...register("deadline", { required: "Deadline is required" })}
                  />
                  {errors.deadline && <p className={errorClass}>{errors.deadline.message}</p>}
                </div>

              </div>
            </div>

            {/* ── Section 2: Job Description ── */}
            <div className={sectionClass}>
              <h2 className="text-sm font-semibold text-[#c8d8ff] mb-5 pb-3 border-b border-white/[0.06]">
                Job description
              </h2>

              <div className="flex flex-col gap-4">

                {/* Responsibilities */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Responsibilities</label>
                  <textarea
                    rows={5}
                    placeholder="Describe the day-to-day responsibilities..."
                    className={inputClass(errors.responsibilities)}
                    style={{ resize: "vertical" }}
                    {...register("responsibilities", { required: "Responsibilities are required" })}
                  />
                  {errors.responsibilities && (
                    <p className={errorClass}>{errors.responsibilities.message}</p>
                  )}
                </div>

                {/* Requirements */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Requirements</label>
                  <textarea
                    rows={5}
                    placeholder="List the skills, experience, and qualifications needed..."
                    className={inputClass(errors.requirements)}
                    style={{ resize: "vertical" }}
                    {...register("requirements", { required: "Requirements are required" })}
                  />
                  {errors.requirements && (
                    <p className={errorClass}>{errors.requirements.message}</p>
                  )}
                </div>

                {/* Benefits */}
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>
                    Benefits{" "}
                    <span className="text-[#3d5270] font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Health insurance, equity, remote work, flexible hours..."
                    className={inputClass(false)}
                    style={{ resize: "vertical" }}
                    {...register("benefits")}
                  />
                </div>

              </div>
            </div>

            {/* ── Section 3: Company (auto-filled) ── */}
            <div className={sectionClass}>
              <h2 className="text-sm font-semibold text-[#c8d8ff] mb-5 pb-3 border-b border-white/[0.06]">
                Company
              </h2>

              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(59,111,245,0.06)",
                  border: "1px solid rgba(59,111,245,0.15)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-sm font-semibold shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #3b6ff5 0%, #6b3cf5 100%)",
                  }}
                >
                  A
                </div>
                <div>
                  <p className="text-sm font-medium text-[#c8d8ff]">Acme Corp</p>
                  <p className="text-xs text-[#5c738f] mt-0.5">Auto-filled from your company profile · Free plan · 2 of 3 jobs used</p>
                </div>
                <div
                  className="ml-auto text-xs px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(29,158,117,0.12)",
                    color: "#1d9e75",
                  }}
                >
                  Approved
                </div>
              </div>
            </div>

            {/* ── Submit ── */}
            <div className="flex items-center justify-between gap-4 pb-6">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-3 rounded-xl text-sm transition-all duration-150"
                style={{
                  color: "#7a8cad",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.08)",
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
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #3b6ff5, #5b3cf5)",
                  boxShadow: "0 0 20px rgba(59,111,245,0.25)",
                }}
              >
                {isSubmitting ? "Publishing..." : "Publish job"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default NewJob;