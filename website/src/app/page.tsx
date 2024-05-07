import {
  AlignCenterHorizontalIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Einfaches und zuverlässiges Hosting
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Konzentrieren Sie sich auf Ihr Geschäft, während wir uns um Ihr
            Hosting kümmern.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md mb-12">
            Jetzt anmelden
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
              <BoltIcon className="text-blue-500 h-8 w-8 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Blitzschnell
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ihre Website lädt in Sekundenschnelle, egal wo Ihre Besucher
                sich befinden.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
              <ShieldCheckIcon className="text-blue-500 h-8 w-8 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                Sicher
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ihre Daten sind bei uns in den besten Händen. Wir bieten Ihnen
                höchste Sicherheit.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
              <AlignCenterHorizontalIcon className="text-blue-500 h-8 w-8 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
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
