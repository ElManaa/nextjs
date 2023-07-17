import React from "react";
import DashboardLayout from "@/app/components/DashboardLayout";

const withDashboardLayout = (WrappedComponent: React.FC) => {
    
  const WithDashboardLayout: React.FC = () => (
    <DashboardLayout>
      <WrappedComponent />
    </DashboardLayout>
  );

  return WithDashboardLayout;
};

export default withDashboardLayout;
