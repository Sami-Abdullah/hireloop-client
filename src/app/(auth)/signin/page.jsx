"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Link, Checkbox } from "@heroui/react";
import {
  InputGroupRoot,
  InputGroupInput,
  InputGroupPrefix,
  InputGroupSuffix,
} from "@heroui/react";
import { Envelope, LockFill, Eye, EyeSlash } from "@gravity-ui/icons";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (info) => {
    try {
      const { data, error } = await authClient.signIn.email({
        /**
         * The user email
         */
        email:info.email,
        /**
         * The user password
         */
        password:info.password,
        
        rememberMe: false
      })
      if(!error) toast.success("Success")
      router.push("/");
    } catch (err) {
      toast.error(err)
      console.error("Sign in error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">

      <div className="pointer-events-none absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,111,245,0.07) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,60,245,0.06) 0%, transparent 70%)" }} />

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
              Welcome back
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#e8eeff] tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Sign in to your account
          </h1>
          <p className="text-sm text-[#5c738f] mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Continue your job search where you left off.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-4">

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
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
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
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="bg-transparent text-[#c8d8ff] placeholder:text-[#3d5270] px-2 py-3 text-sm outline-none w-full"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
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

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
              <Checkbox
                classNames={{ label: "text-[#5c738f] text-xs" }}
                {...register("rememberMe")}
              >
                Remember me
              </Checkbox>
              <Link href="/forgot-password" className="text-xs text-[#8faeff]">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "linear-gradient(135deg, #3b6ff5, #5b3cf5)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-center text-xs text-[#5c738f]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-[#8faeff] text-xs font-medium">
                Create a free account
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div>
  );
}