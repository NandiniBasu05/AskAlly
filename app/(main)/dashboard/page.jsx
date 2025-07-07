import { getUserOnboardingStatus } from '@/actions/user'
import React from 'react'
import { redirect } from 'next/navigation';
import { getIndustryInsights } from '@/actions/dashboard';
import DashboardView from './_components/dashboard-view';

const IndustryInsightsPage = async () => {
  const {isOnboarded} = await getUserOnboardingStatus();
  const insights = await getIndustryInsights();
  if(!isOnboarded){
    redirect("/onboarding");
  }
  return (
    <div>
        <div className="container mx-auto">
      <DashboardView insights={insights} />
    </div>
    </div>
  )
}

export default IndustryInsightsPage
