import ControllerSidebar from "@/components/controller/controller-sidebar";
import { Button } from "@/components/ui/button";
import { StopCircleIcon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Controller",
    default: "Controller",
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
    <main className="flex h-screen w-full flex-col">
      <div className="flex h-full">
        <ControllerSidebar serverId={params.serverId} />
        <div className="flex-1 bg-gray-950  text-white w-4/5">
          <div className="h-full  border border-gray-800 bg-gray-900 p-4">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2 px-5">
                <span className="font-semibold">IP Adresse: 192.168.178.43</span>
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
