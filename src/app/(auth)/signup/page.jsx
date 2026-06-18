"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Link, Checkbox, RadioGroup, Radio } from "@heroui/react";
import {
  InputGroupRoot,
  InputGroupInput,
  InputGroupPrefix,
  InputGroupSuffix,
} from "@heroui/react";
import { PersonFill, Envelope, LockFill, Eye, EyeSlash } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("seeker");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (info) => {
    try {
      const { data, error } = await authClient.signUp.email({
        email: info.email,
        password: info.password,
        name: info.name,
        role: role,
      });
      if (!error) {
        toast.success("You Signed up");
        router.push("/");
      }
    } catch (err) {
      toast.error(err);
      console.error("Sign up error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">

      <div className="pointer-events-none absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,111,245,0.07) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,60,245,0.06) 0%, transparent 70%)" }} />

      {/* Logo */}
      <Link href="/" className="inline-flex items-center gap-2 mb-8 no-underline">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b6ff5] to-[#6b3cf5]">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
            <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 12a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        </span>
        <span className="text-2xl font-bold tracking-tight"
          style={{ fontFamily: "'DM Sans', sans-serif", background: "linear-gradient(135deg, #e8eeff 0%, #8faeff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          hireloop
        </span>
      </Link>

      <div className="w-full max-w-[420px] bg-[#0d1220] border border-white/[0.07] rounded-2xl p-8 relative">
        <div className="mb-7">
          <div className="inline-flex items-center gap-2 bg-[#3b6ff5]/10 border border-[#3b6ff5]/20 rounded-full px-3 py-1 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#3b6ff5]" />
            <span className="text-xs text-[#8faeff] font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Join 50,000+ job seekers
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#e8eeff] tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Create your account
          </h1>
          <p className="text-sm text-[#5c738f] mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Start finding roles that truly fit you.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-4">

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#7a8cad]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Full name
              </label>
              <InputGroupRoot className={`bg-[#111827] border rounded-xl transition-colors ${errors.name ? "border-red-500/60" : "border-white/[0.08] hover:border-[#3b6ff5]/40 focus-within:border-[#3b6ff5]/50"}`}>
                <InputGroupPrefix className="pl-3 text-[#3d5270] flex items-center">
                  <PersonFill className="w-4 h-4" />
                </InputGroupPrefix>
                <InputGroupInput
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  className="bg-transparent text-[#c8d8ff] placeholder:text-[#3d5270] px-2 py-3 text-sm outline-none w-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...register("name", {
                    required: "Full name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                  })}
                />
              </InputGroupRoot>
              {errors.name && (
                <p className="text-xs text-red-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#7a8cad]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Email address
              </label>
              <InputGroupRoot className={`bg-[#111827] border rounded-xl transition-colors ${errors.email ? "border-red-500/60" : "border-white/[0.08] hover:border-[#3b6ff5]/40 focus-within:border-[#3b6ff5]/50"}`}>
                <InputGroupPrefix className="pl-3 text-[#3d5270] flex items-center">
                  <Envelope className="w-4 h-4" />
                </InputGroupPrefix>
                <InputGroupInput
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  className="bg-transparent text-[#c8d8ff] placeholder:text-[#3d5270] px-2 py-3 text-sm outline-none w-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" },
                  })}
                />
              </InputGroupRoot>
              {errors.email && (
                <p className="text-xs text-red-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-[#7a8cad]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Password
              </label>
              <InputGroupRoot className={`bg-[#111827] border rounded-xl transition-colors ${errors.password ? "border-red-500/60" : "border-white/[0.08] hover:border-[#3b6ff5]/40 focus-within:border-[#3b6ff5]/50"}`}>
                <InputGroupPrefix className="pl-3 text-[#3d5270] flex items-center">
                  <LockFill className="w-4 h-4" />
                </InputGroupPrefix>
                <InputGroupInput
                  type={showPassword ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  autoComplete="new-password"
                  className="bg-transparent text-[#c8d8ff] placeholder:text-[#3d5270] px-2 py-3 text-sm outline-none w-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                  })}
                />
                <InputGroupSuffix className="pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#3d5270] hover:text-[#8faeff] transition-colors"
                  >
                    {showPassword ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </InputGroupSuffix>
              </InputGroupRoot>
              {errors.password && (
                <p className="text-xs text-red-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Role Selection */}
            {/* Role Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-[#7a8cad]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Role
              </label>
              <div className="flex gap-2">
                {[
                  { value: "seeker", label: "Job Seeker" },
                  { value: "recruiter", label: "Recruiter" },
                ].map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRole(value)}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-150"
                    style={{
                      background: role === value ? "rgba(59,111,245,0.08)" : "#111827",
                      borderColor: role === value ? "rgba(59,111,245,0.5)" : "rgba(255,255,255,0.08)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {/* Radio dot */}
                    <span
                      className="flex items-center justify-center w-4 h-4 rounded-full border-2 shrink-0 transition-all duration-150"
                      style={{ borderColor: role === value ? "#3b6ff5" : "#3d5270" }}
                    >
                      {role === value && (
                        <span className="w-2 h-2 rounded-full bg-[#3b6ff5] block" />
                      )}
                    </span>
                    <span
                      className="text-sm transition-colors duration-150"
                      style={{ color: role === value ? "#c8d8ff" : "#5c738f" }}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #3b6ff5, #5b3cf5)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>

            <p className="text-center text-xs text-[#5c738f]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Already have an account?{" "}
              <Link href="/signin" className="text-[#8faeff] text-xs font-medium">
                Sign in instead
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
}