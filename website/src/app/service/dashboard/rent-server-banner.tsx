import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RentServerModal from "./rent-server-modal";

export default function RentServerBanner() {
  return (
    <Card className="flex flex-col justify-between text-text">
      <CardHeader>
        <CardTitle className="font-bold">Server mieten</CardTitle>
      </CardHeader>
      <CardContent>
        Profitieren Sie von erstklassiger Sicherheit, schneller Verarbeitung und
        zuverlässiger Verfügbarkeit, um eine reibungslose Benutzererfahrung zu
        gewährleisten.
      </CardContent>
      <CardFooter>
        <RentServerModal />
      </CardFooter>
    </Card>
  );
}
