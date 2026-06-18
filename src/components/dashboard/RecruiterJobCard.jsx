'use client';

import { Pencil, Trash2, Users } from 'lucide-react';

export default function RecruiterJobCard({ job, onEdit, onDelete }) {
  const {
    _id, jobTitle, category, jobType,
    salaryMin, salaryMax, currency,
    city, country, deadline,
    responsibilities, requirements,
  } = job;

  const formattedDeadline = new Date(deadline).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  const formatSalary = (n) => Number(n).toLocaleString('en-US');

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-900">{jobTitle}</h3>
          <p className="text-sm text-gray-500">{category} · {jobType}</p>
        </div>
        <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Salary range</p>
          <p className="text-sm font-medium text-gray-800">
            ${formatSalary(salaryMin)} – ${formatSalary(salaryMax)}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Location</p>
          <p className="text-sm font-medium text-gray-800">{city}, {country}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Deadline</p>
          <p className="text-sm font-medium text-gray-800">{formattedDeadline}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Responsibilities</p>
          <p className="text-sm text-gray-700">{responsibilities}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Requirements</p>
          <p className="text-sm text-gray-700">{requirements}</p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="flex items-center gap-1.5 text-sm text-gray-500">
          <Users size={14} /> 24 applicants
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(job)}
            className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Pencil size={13} /> Edit
          </button>
          <button
            onClick={() => onDelete(_id)}
            className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-lg border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <Trash2 size={13} /> Delete
          </button>
        </div>
      </div>

    </div>
  );
}