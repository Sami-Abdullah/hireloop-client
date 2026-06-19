'use client'
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


export function CompanyCard({ company, onEdit }) {
  const initials = company.companyName
    .split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <div className="w-full max-w-xl bg-gradient-to-br from-[#0d1424] to-[#10162a] rounded-2xl border border-[#6b3cf5]/25 shadow-2xl overflow-hidden">
      <div className="h-20 bg-gradient-to-r from-[#1a2a5e] to-[#2a1060]" />

      <div className="px-7 pb-7">
        <div className="w-16 h-16 -mt-8 rounded-2xl bg-gradient-to-br from-[#3b6ff5] to-[#6b3cf5] border-[3px] border-[#0d1424] flex items-center justify-center text-2xl font-extrabold text-white overflow-hidden">
          {company.logo
            ? <img src={company.logo} className="w-full h-full object-cover p-1" alt="logo" />
            : initials}
        </div>

        <h3 className="text-xl font-bold text-[#c8d8ff] mt-3 mb-1">{company.companyName}</h3>

        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-[#a78bfa] bg-[#6b3cf5]/15 border border-[#6b3cf5]/30">
          {company.industry}
        </span>

        {company.description && (
          <p className="text-[13.5px] text-[#7a8aaa] mt-3 leading-relaxed">{company.description}</p>
        )}

        <div className="h-px bg-white/[0.07] my-4" />

        <div className="flex flex-wrap gap-4">
          {company.website && (
            <span className="flex items-center gap-1.5 text-[13px] text-[#7a8aaa]">
              <GlobeIcon />
              <span className="text-[#7aabff]">{company.website.replace(/^https?:\/\//, "")}</span>
            </span>
          )}
          {company.location && (
            <span className="flex items-center gap-1.5 text-[13px] text-[#7a8aaa]">
              <MapPinIcon /> {company.location}
            </span>
          )}
          {company.employeeRange && (
            <span className="flex items-center gap-1.5 text-[13px] text-[#7a8aaa]">
              <UsersIcon /> {company.employeeRange}
            </span>
          )}
        </div>

        <button
          onClick={onEdit}
          className="mt-5 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#3b6ff5]/10 border border-[#3b6ff5]/30 text-[#7aabff] text-[13px] font-semibold hover:bg-[#3b6ff5]/20 transition-colors cursor-pointer"
        >
          <EditIcon /> Edit Company
        </button>
      </div>
    </div>
  );
}