import { Dashboardsidebar } from '@/components/dashboard/Dashboardsidebar';
import React from 'react';

const DashBoardLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <Dashboardsidebar />
      <div className='flex-1 p-10'>

        {
          children
        }
      </div>
    </div>
  );
};

export default DashBoardLayout;