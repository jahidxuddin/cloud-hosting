"use client";

import { useUserStore } from "@/lib/store";

export default function DashboardTitle() {
  const { firstName } = useUserStore();

  return <h1 className="ml-2 text-4xl font-bold">Hallo, {firstName}!</h1>;
}
