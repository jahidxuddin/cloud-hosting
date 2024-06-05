"use client";

import BuyCreditsBanner from "@/components/core/service/dashboard/buy-credits-banner";
import DashboardTitle from "@/components/core/service/dashboard/dashboard-title";
import NotificationBanner from "@/components/core/service/dashboard/notification-banner";
import RentServerBanner from "@/components/core/service/dashboard/rent-server-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useUser from "@/hooks/useUser";
import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";

const MonthlyCostChart = dynamic(
  () => import("@/components/core/service/dashboard/monthly-cost-chart"),
  { ssr: false }
);
const TotalCostChart = dynamic(
  () => import("@/components/core/service/dashboard/total-cost-chart"),
  { ssr: false }
);

export default function Dashboard() {
  const { fetchUserData } = useUser();

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="h-full space-y-8">
      <DashboardTitle />
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <NotificationBanner />
          <RentServerBanner />
          <BuyCreditsBanner />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Suspense fallback={<span className="text-4xl font-bold">Loading...</span>}>
            <Card>
              <CardHeader>
                <CardTitle className="font-bold text-text">
                  Gesamtkosten
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3">
                <TotalCostChart />
              </CardContent>
            </Card>
          </Suspense>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-text">
                Monatliche Kosten
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <MonthlyCostChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
