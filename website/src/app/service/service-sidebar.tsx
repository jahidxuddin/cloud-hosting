"use client";

import Link from "next/link";
import { LayoutDashboardIcon, ServerIcon, SettingsIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import logo from "@/../public/logo.png";

export default function ServiceSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 hidden h-screen w-1/5 space-y-2 border-r-2 pb-28 pt-2 lg:block">
      <div className="p-2 text-center flex items-center">
        <Image src={logo} alt="Logo" width={70} height={70} />
        <h1
          className="cursor-pointer text-xl font-bold lg:text-xl 2xl:text-3xl"
          onClick={() => window.location.reload()}
        >
          CloudHosting
        </h1>
      </div>
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-2 px-7">
          <Link
            href="/service/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-gray-900 dark:hover:text-gray-50",
              pathname === "/service/dashboard"
                ? "text-gray-900 dark:text-gray-50"
                : "text-gray-500 dark:text-gray-400",
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
                : "text-gray-500 dark:text-gray-400",
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
                : "text-gray-500 dark:text-gray-400",
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
