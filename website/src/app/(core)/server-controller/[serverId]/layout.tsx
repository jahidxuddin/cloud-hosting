import ControllerSidebar from "@/components/server-controller/controller-sidebar";
import { Button } from "@/components/ui/button";
import { StopCircleIcon } from "lucide-react";
import { notFound } from "next/navigation";

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
        <div className="absolute right-0 flex-1 text-white w-4/5 min-h-screen bg-gray-900">
          <div className="h-full border border-gray-800 p-4">
            <div className="flex h-full flex-col">
              <div className="h-[5.7vh] flex items-center justify-between border-b border-gray-800 pb-2 px-5">
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
