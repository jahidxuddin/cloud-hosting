"use client";

import { useUserStore } from "@/lib/store";

export default function DashboardTitle() {
  const { firstName } = useUserStore();

  return <h1 className="font-bold text-4xl ml-2">Hallo, {firstName}!</h1>;
}
