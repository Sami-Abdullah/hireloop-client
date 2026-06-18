'use client';

import { useState } from 'react';
import { Table } from '@heroui/react';
import RecruiterJobCard from './RecruiterJobCard';
import { deleteJob } from '@/lib/actions/jobs';
import { X } from 'lucide-react';

export default function RecruiterJobsTable({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
    <div className='text-3xl'> 
      ALL Jobs
    </div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content aria-label="Posted jobs" className="min-w-[600px]">
            <Table.Header>
              <Table.Column isRowHeader>Job Title</Table.Column>
              <Table.Column>Category</Table.Column>
              <Table.Column>Location</Table.Column>
              <Table.Column>Deadline</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              {jobs.map((job) => (
                <Table.Row key={job._id}>
                  <Table.Cell>{job.jobTitle}</Table.Cell>
                  <Table.Cell>{job.category}</Table.Cell>
                  <Table.Cell>{job.city}, {job.country}</Table.Cell>
                  <Table.Cell>
                    {new Date(job.deadline).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', year: 'numeric',
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    <span className="text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="text-sm px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      View details
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>

      {/* Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-white text-sm font-medium">Job Details</p>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <RecruiterJobCard
              job={selectedJob}
              onEdit={(job) => console.log('edit', job)}
              onDelete={deleteJob}
            />
          </div>
        </div>
      )}
    </>
  );
}