import {
  AlignCenterHorizontalIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Home() {
  const tokenCookie = cookies().get("token");
  if (tokenCookie && tokenCookie.value) {
    redirect("/service/dashboard");
  }

  return (
    <main className="h-screen w-full pt-24 sm:pt-12 md:pt-0">
      <div className="flex h-screen flex-col items-center justify-center pb-24 dark:bg-gray-900 sm:pb-12 md:pb-0">
        <div className="max-w-3xl px-4 text-center md:px-6">
          <h1 className="mb-4 text-4xl font-bold text-text dark:text-gray-100 md:text-6xl">
            Einfaches und zuverlässiges Hosting
          </h1>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400 md:text-xl">
            Konzentrieren Sie sich auf Ihr Geschäft, während wir uns um Ihr
            Hosting kümmern.
          </p>
          <Link href="/login">
            <Button className="mb-12 rounded-md bg-primary px-6 py-3 font-medium text-white hover:bg-blue-600">
              Jetzt anmelden
            </Button>
          </Link>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
              <BoltIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-medium text-text dark:text-gray-100">
                Blitzschnell
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ihre Website lädt in Sekundenschnelle, egal wo Ihre Besucher
                sich befinden.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
              <ShieldCheckIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-medium text-text dark:text-gray-100">
                Sicher
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ihre Daten sind bei uns in den besten Händen. Wir bieten Ihnen
                höchste Sicherheit.
              </p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-md dark:bg-gray-800">
              <AlignCenterHorizontalIcon className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-lg font-medium text-text dark:text-gray-100">
                Skalierbar
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Egal ob Sie klein anfangen oder groß werden, wir passen uns
                Ihren Bedürfnissen an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
