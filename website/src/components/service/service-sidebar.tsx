"use client";

import { ServerIcon } from "../icons";
import Link from "next/link";
import { LayoutDashboardIcon, SettingsIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 w-1/5 h-screen border-r-2 space-y-2 pt-4 pb-20">
      <div className="p-2 text-center">
        <h1
          className="font-bold text-3xl cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Hosting Anbieter
        </h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-2 px-7">
          <Link
            href="/service/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50",
              pathname === "/service/dashboard"
                ? "text-gray-900 dark:text-gray-50"
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            <LayoutDashboardIcon />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/service/server-manager"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50",
              pathname === "/service/server-manager"
                ? "text-gray-900 dark:text-gray-50"
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            <ServerIcon />
            <span>Server Verwaltung</span>
          </Link>
        </div>
        <div className="space-y-3">
          <Separator />
          <Link
            href="/service/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-10 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50",
              pathname === "/service/settings"
                ? "text-gray-900 dark:text-gray-50"
                : "text-gray-500 dark:text-gray-400"
            )}
          >
            <SettingsIcon />
            <span>Einstellungen</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
