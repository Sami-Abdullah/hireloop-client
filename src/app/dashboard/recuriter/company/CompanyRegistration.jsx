'use client'
import { CompanyCard } from "./CompanyCard";
import { RegisterModal } from "./RegisterModal";
import { EmptyState } from "./EmptyState";
import { useState } from "react";
import { createCompany } from "@/lib/actions/companies";
import { toast } from "react-toastify";

export default function CompanyRegistration({recruiterId,companyDetails}) {
  
  const [company, setCompany] = useState(companyDetails);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit =async (data) => {
    const newCompany = {...data,recruiterId}
    setCompany(newCompany);
    setModalOpen(false);
    setEditMode(false);
    const res =await createCompany(newCompany)
    if (res.insertedId){
      toast.success("Registered Company")
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <span className="text-[26px] font-extrabold tracking-tight bg-gradient-to-r from-[#3b6ff5] to-[#6b3cf5] bg-clip-text text-transparent">
            HireLoop
          </span>
          <p className="text-sm text-[#5a6a8a] mt-1.5">Company Dashboard</p>
        </div>

        {company
          ? <CompanyCard company={company} onEdit={() => { setEditMode(true); setModalOpen(true); }} />
          : <EmptyState onOpen={() => { setEditMode(false); setModalOpen(true); }} />}
      </div>

      {modalOpen && (
        <RegisterModal
          
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          defaultValues={editMode ? company : null}
        />
      )}
    </div>
  );
}