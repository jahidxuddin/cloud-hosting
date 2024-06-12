import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function ServerSettings() {
  return (
    <div className="grid h-[90vh] gap-6 p-6">
      <Card className="flex flex-col border-gray-800 bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Servername</CardTitle>
          <CardDescription>Ändere den Namen deines Servers.</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <form>
            <Input placeholder="Servername" className=" text-gray-900"/>
          </form>
        </CardContent>
        <CardFooter className="border-t border-gray-800 p-6">
          <Button className="border border-gray-800">Speichern</Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col border-gray-800 bg-gray-900 text-white">
        <CardHeader>
          <CardTitle>Server kündigen</CardTitle>
          <CardDescription>
            Lösche deinen Server und alle dazugehörigen Daten endgültig.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 dark:text-gray-400">
              Bist du sicher, dass du deinen Server kündigen möchtest? Diese
              Aktion kann nicht rückgängig gemacht werden.
            </p>
            <div className="flex items-center space-x-2">
              <Checkbox className="border border-gray-800" id="confirm" />
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="confirm"
              >
                Ich verstehe und bestätige die Kündigung.
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-800 p-6">
          <Button className="border border-gray-800" variant="destructive">
            Server kündigen
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
