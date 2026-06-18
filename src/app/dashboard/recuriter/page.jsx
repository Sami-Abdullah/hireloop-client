'use client'
import AchievementsSection from '@/components/dashboard/AchievementsSection';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecuriterHomePage = () => {
  const { data: session, isPending } = useSession()
  if (isPending) {
    return <h1> Loading....</h1>
  }
  const user = session?.user
  return (
    <div>
      {<h1 className='text-5xl'>Welcome {user?.name}</h1>}
      <AchievementsSection />
    </div>
  );
};

export default RecuriterHomePage;