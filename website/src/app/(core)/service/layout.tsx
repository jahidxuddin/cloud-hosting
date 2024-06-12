import { Metadata } from "next";
import ServiceSidebar from "./service-sidebar";

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
    <main className="flex max-h-screen w-full">
      <ServiceSidebar />
      <div className="absolute right-0 min-h-screen w-full p-8 lg:w-4/5">
        {children}
      </div>
    </main>
  );
}
