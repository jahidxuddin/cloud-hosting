import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dynamic from "next/dynamic";

const MonthlyCostGraph = dynamic(
  () => import("@/components/service/dashboard/monthly-cost-graph"),
  { ssr: false }
);
const TotalCostGraph = dynamic(
  () => import("@/components/service/dashboard/total-cost-graph"),
  { ssr: false }
);

export default function Dashboard() {
  return (
    <div className="h-full space-y-8">
      <h1 className="font-bold text-4xl ml-2">Hallo, Max!</h1>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-text">
                Benachrichtungen
              </CardTitle>
            </CardHeader>
            <CardContent className="text-text text-sm space-y-3">
              <div className="flex flex-col">
                <span>
                  Das Hosting für Server "Homepage" wird morgen ablaufen
                </span>
                <span className="font-semibold">{"Von:"} 8. Mai</span>
              </div>
              <div className="flex flex-col">
                <span>Server "Homepage" läuft auf höchster Auslastung</span>
                <span className="font-semibold">{"Von:"} 5. Mai</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-blue-600 text-white py-3 w-full rounded-md uppercase font-bold">
                Mehr anzeigen
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between text-text">
            <CardHeader>
              <CardTitle className="font-bold">Server mieten</CardTitle>
            </CardHeader>
            <CardContent>
              Profitieren Sie von erstklassiger Sicherheit, schneller
              Verarbeitung und zuverlässiger Verfügbarkeit, um eine reibungslose
              Benutzererfahrung zu gewährleisten.
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-blue-600 text-white py-3 w-full rounded-md uppercase font-bold">
                Jetzt mieten
              </Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col justify-between text-text">
            <CardHeader>
              <CardTitle className="font-bold">
                Guthaben: 100,00€
              </CardTitle>
            </CardHeader>
            <CardContent>
              Verwalten Sie Ihr Guthaben effizient und transparent über unser
              Dashboard, um Ihre Ausgaben im Blick zu behalten und Ihre Nutzung
              flexibel anzupassen.
            </CardContent>
            <CardFooter>
              <Button className="bg-primary hover:bg-blue-600 text-white py-3 w-full rounded-md uppercase font-bold">
                Jetzt aufladen
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-text">
                Gesamtkosten
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <TotalCostGraph />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-bold text-text">
                Monatliche Kosten
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <MonthlyCostGraph />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
