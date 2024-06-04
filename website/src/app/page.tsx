import {
  AlignCenterHorizontalIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full pt-24 sm:pt-12 md:pt-0">
      <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 pb-24 sm:pb-12 md:pb-0">
        <div className="max-w-3xl px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-text dark:text-gray-100 mb-4">
            Einfaches und zuverlässiges Hosting
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Konzentrieren Sie sich auf Ihr Geschäft, während wir uns um Ihr
            Hosting kümmern.
          </p>
          <Link href="/login">
            <Button className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mb-12">
              Jetzt anmelden
            </Button>
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
              <BoltIcon className="text-primary h-8 w-8 mb-4" />
              <h3 className="text-lg font-medium text-text dark:text-gray-100 mb-2">
                Blitzschnell
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ihre Website lädt in Sekundenschnelle, egal wo Ihre Besucher
                sich befinden.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
              <ShieldCheckIcon className="text-primary h-8 w-8 mb-4" />
              <h3 className="text-lg font-medium text-text dark:text-gray-100 mb-2">
                Sicher
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ihre Daten sind bei uns in den besten Händen. Wir bieten Ihnen
                höchste Sicherheit.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
              <AlignCenterHorizontalIcon className="text-primary h-8 w-8 mb-4" />
              <h3 className="text-lg font-medium text-text dark:text-gray-100 mb-2">
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
