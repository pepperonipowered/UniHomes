import React from 'react'
import DashboardLayout from '../components/DashboardLayout'


const LessorDashboard = ({ children } : { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default LessorDashboard