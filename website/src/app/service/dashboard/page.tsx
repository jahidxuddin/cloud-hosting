import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="h-full space-y-8">
      <h1 className="font-bold text-4xl ml-2">Hallo, Jahid!</h1>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card>
            <CardHeader className="text-2xl font-bold text-text">
              Guthaben: 100,00€
            </CardHeader>
            <CardFooter>
              <Button className="bg-primary hover:bg-blue-600 text-white py-3 w-full rounded-md uppercase font-bold">
                Jetzt aufladen
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
          <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
