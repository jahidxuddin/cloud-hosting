import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Button className="bg-primary hover:bg-blue-600 text-white py-3 w-full rounded-md uppercase font-bold">
          Jetzt mieten
        </Button>
      </CardFooter>
    </Card>
  );
}
