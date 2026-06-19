import React from 'react';
import CompanyRegistration from './CompanyRegistration';
import { getUserSession } from '@/lib/core/session';
import { getCompanies } from '@/lib/api/companies';

const CompanyProfilepage =async () => {
  const user =await getUserSession();

  const company = await getCompanies(user?.id);
  console.log(company,'company here nakii ');
  return (
    <div>
      <CompanyRegistration recruiterId={user?.id} companyDetails={company}></CompanyRegistration>
    </div>
  );
};

export default CompanyProfilepage;