import { Button } from "@/components/ui/button";
import { StopCircleIcon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ControllerSidebar from "./controller-sidebar";

export const metadata: Metadata = {
  title: {
    template: "%s | Servercontroller",
    default: "Servercontroller",
  },
};

export default function ControllerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) {
  if (!params.serverId || params.serverId === "") {
    notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-gray-900">
      <div className="flex">
        <ControllerSidebar serverId={params.serverId} />
        <div className="absolute right-0 min-h-screen w-4/5 flex-1 bg-gray-900 text-white">
          <div className="h-full border border-gray-800 p-4">
            <div className="flex h-full flex-col">
              <div className="flex h-[5.7vh] items-center justify-between border-b border-gray-800 px-5 pb-2">
                <span className="font-semibold">
                  IP Adresse: 192.168.178.43
                </span>
                <Button className="flex items-center gap-2 hover:bg-gray-300 hover:text-gray-600">
                  <StopCircleIcon />
                  Stoppe Server
                </Button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
