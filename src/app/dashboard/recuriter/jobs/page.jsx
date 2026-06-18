
import { getComapnyJobs } from '@/lib/api/jobs';

import RecruiterJobsTable from '@/components/dashboard/RecruiterJobsTable';


const RecruiterJobs = async () => {
  
const jobs = await getComapnyJobs('company_123','active');

  if (!jobs || jobs.length === 0) {
    return (
      <div style={{ background: '#0f0f14', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#6b7280' }}>No jobs posted yet.</p>
      </div>
    );
  }
  return (
    <div style={{ background: '#0f0f14', minHeight: '100vh', padding: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 900, margin: '0 auto' }}>
        <RecruiterJobsTable jobs={jobs}/>
      </div>
    </div>
  );
};

export default RecruiterJobs;