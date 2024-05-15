"use client";

import { cn } from "@/lib/utils";
import { FileBoxIcon, SettingsIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ControllerSidebar({ serverId }: { serverId: string }) {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 flex flex-col justify-between bg-gray-950 text-white w-1/5 h-screen pt-2 pb-4">
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-lg font-bold mb-3">Homepage Server</h1>
        <Link
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900",
            pathname === `/controller/${serverId}/console` && "bg-gray-900"
          )}
          href={`/controller/${serverId}/console`}
        >
          <TerminalIcon className="h-4 w-4" />
          Konsole
        </Link>
        <Link
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-900",
            pathname === `/controller/${serverId}/files` && "bg-gray-900"
          )}
          href={`/controller/${serverId}/files`}
        >
          <FileBoxIcon className="h-4 w-4" />
          Dateien
        </Link>
      </div>
      <div className="space-y-3">
        <div className="px-4">
          <Link
            className={cn(
              "flex items-center gap-2 rounded-md px-6 py-2 text-sm font-medium hover:bg-gray-900",
              pathname === `/controller/${serverId}/settings` && "bg-gray-900"
            )}
            href={`/controller/${serverId}/settings`}
          >
            <SettingsIcon className="h-4 w-4" />
            Einstellungen
          </Link>
        </div>
      </div>
    </nav>
  );
}
