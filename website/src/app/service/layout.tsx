import ServiceSidebar from "@/components/service/service-sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Service",
    default: "Service",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="max-h-screen w-full flex">
      <ServiceSidebar />
      <div className="w-4/5 min-h-screen p-8 absolute right-0">{children}</div>
    </main>
  );
}
