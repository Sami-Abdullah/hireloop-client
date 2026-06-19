
import { uploadLogo } from "@/lib/actions/companies";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

// ─── Icons ────────────────────────────────────────────────────────────────────
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const UploadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const EditIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

// ─── Constants ────────────────────────────────────────────────────────────────
const INDUSTRIES = [
  "Technology", "Healthcare", "Finance", "Education", "Retail",
  "Manufacturing", "Consulting", "Marketing", "Real Estate", "Logistics",
  "Media & Entertainment", "Construction", "Apparel & Textiles", "Other",
];

const EMPLOYEE_RANGES = [
  "1–10 employees", "11–50 employees", "51–200 employees",
  "201–500 employees", "501–1000 employees", "1000+ employees",
];

const CHEVRON_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235a6a8a' stroke-width='2.5'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`;

// ─── Register Modal ───────────────────────────────────────────────────────────
export function RegisterModal({ onClose, onSubmit, defaultValues }) {

  const fileRef = useRef(null);
  const [logoPreview, setLogoPreview] = useState(defaultValues?.logoPreview || null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues || {
      companyName: "",
      industry: "Technology",
      website: "",
      location: "",
      employeeRange: "1–10 employees",
      description: "",
    },
  });

  const handleLogoChange =async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLogoPreview(URL.createObjectURL(file));
    setValue('logo',file)
  };
  
const onValid = async (data) => {
  let logo = defaultValues?.logo || null;

  if (data.logo instanceof File) {
    const res = await uploadLogo(data.logo);
    logo = res?.data?.url;
    console.log(logo);
  }

  onSubmit({ ...data, logo });
};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050812]/80 backdrop-blur-md"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      
      <div className="w-full max-w-2xl flex flex-col max-h-[90vh] bg-[#111827] rounded-2xl border border-[#6b3cf5]/20 shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-6">
          <div>
            <h2 className="text-xl font-bold text-[#c8d8ff]">
              {defaultValues ? "Edit Company" : "Register New Company"}
            </h2>
            <p className="text-sm text-[#5a6a8a] mt-1">
              {defaultValues
                ? "Update your business details."
                : "Enter your business details to start hiring on HireLoop."}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 text-[#7a8aaa] hover:bg-white/10 hover:text-[#c8d8ff] transition-colors cursor-pointer border-0"
          >
            <XIcon />
          </button>
        </div>

        <div className="h-px bg-white/[0.07] mx-7 mt-5" />

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-5">

          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#8a9bbb]">Company Name</label>
              <input
                className={`w-full px-3.5 py-2.5 rounded-xl bg-[#161f35] text-[#c8d8ff] text-sm placeholder:text-[#3a4a6a] outline-none border transition-colors ${errors.companyName ? "border-red-400" : "border-white/10 focus:border-[#3b6ff5]"}`}
                placeholder="e.g. Acme Corp"
                {...register("companyName", { required: "Company name is required" })}
              />
              {errors.companyName && <span className="text-xs text-red-400">{errors.companyName.message}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#8a9bbb]">Industry / Category</label>
              <select
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#161f35] text-[#c8d8ff] text-sm border border-white/10 outline-none cursor-pointer focus:border-[#3b6ff5] transition-colors appearance-none pr-9"
                style={{ backgroundImage: CHEVRON_SVG, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                {...register("industry")}
              >
                {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#8a9bbb]">Website URL</label>
              <div className="flex rounded-xl overflow-hidden border border-white/10 focus-within:border-[#3b6ff5] transition-colors">
                <span className="flex items-center px-3 bg-[#1e2d4a] text-[#5a6a8a] text-[13px] font-semibold border-r border-white/10 whitespace-nowrap">
                  https://
                </span>
                <input
                  className="flex-1 px-3.5 py-2.5 bg-[#161f35] text-[#c8d8ff] text-sm placeholder:text-[#3a4a6a] outline-none"
                  placeholder="www.company.com"
                  {...register("website")}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#8a9bbb]">Location</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a6a8a] pointer-events-none">
                  <MapPinIcon />
                </span>
                <input
                  className={`w-full pl-8 pr-3.5 py-2.5 rounded-xl bg-[#161f35] text-[#c8d8ff] text-sm placeholder:text-[#3a4a6a] outline-none border transition-colors ${errors.location ? "border-red-400" : "border-white/10 focus:border-[#3b6ff5]"}`}
                  placeholder="City, Country"
                  {...register("location", { required: "Location is required" })}
                />
              </div>
              {errors.location && <span className="text-xs text-red-400">{errors.location.message}</span>}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#8a9bbb]">Employee Count Range</label>
              <select
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#161f35] text-[#c8d8ff] text-sm border border-white/10 outline-none cursor-pointer focus:border-[#3b6ff5] transition-colors appearance-none pr-9"
                style={{ backgroundImage: CHEVRON_SVG, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                {...register("employeeRange")}
              >
                {EMPLOYEE_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#8a9bbb]">Company Logo</label>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
              <div
                onClick={() => fileRef.current?.click()}
                className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl bg-[#161f35] border border-dashed border-[#6b3cf5]/30 cursor-pointer hover:border-[#6b3cf5] transition-colors"
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#3b6ff5]/10 border border-[#3b6ff5]/20 flex items-center justify-center text-[#6b3cf5] overflow-hidden">
                  {logoPreview
                    ? <img src={logoPreview} className="w-full h-full object-cover" alt="preview" />
                    : <UploadIcon />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#c8d8ff]">{logoPreview ? "Change image" : "Upload image"}</p>
                  <p className="text-xs text-[#5a6a8a] mt-0.5">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#8a9bbb]">Brief Description</label>
            <textarea
              className="w-full px-3.5 py-3 rounded-xl bg-[#161f35] text-[#c8d8ff] text-sm placeholder:text-[#3a4a6a] border border-white/10 outline-none focus:border-[#3b6ff5] transition-colors resize-y min-h-[100px] leading-relaxed"
              placeholder="Tell us about your company's mission and culture..."
              {...register("description")}
            />
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2.5 px-7 py-4 bg-[#0d1424] border-t border-white/[0.07]">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-[#7a8aaa] text-sm font-semibold bg-transparent hover:bg-white/5 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit(onValid)}
            disabled={isSubmitting}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3b6ff5] to-[#6b3cf5] text-white text-sm font-bold shadow-lg shadow-[#6b3cf5]/25 hover:opacity-90 disabled:opacity-60 transition-opacity cursor-pointer border-0"
          >
            {defaultValues ? "Save Changes" : "Register Company"}
          </button>
        </div>

      </div>
    </div>
  );
}