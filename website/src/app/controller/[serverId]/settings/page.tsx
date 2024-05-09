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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ServerSettings() {
  return (
    <div className="grid gap-6 p-6">
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>Servername</CardTitle>
          <CardDescription>Ändere den Namen deines Servers.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Input placeholder="Servername" />
          </form>
        </CardContent>
        <CardFooter className="border-t border-gray-800 p-6">
          <Button className="border border-gray-800">Speichern</Button>
        </CardFooter>
      </Card>
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>Upgrade Ressourcen</CardTitle>
          <CardDescription>
            Erhöhe die Ressourcen, die deinem Server zugewiesen sind.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <Select>
              <SelectTrigger className="text-gray-500 dark:text-gray-400">
                <SelectValue placeholder="Wähle einen Plan aus" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">
                  Starter - 1 vCPU, 1GB RAM
                </SelectItem>
                <SelectItem value="pro">Pro - 2 vCPU, 4GB RAM</SelectItem>
                <SelectItem value="enterprise">
                  Enterprise - 4 vCPU, 8GB RAM
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-2">
              <Checkbox className="border border-gray-800" defaultChecked id="backup" />
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="backup"
              >
                Tägliche Backups aktivieren
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t border-gray-800 p-6">
          <Button className="border border-gray-800">Upgrade</Button>
        </CardFooter>
      </Card>
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>Server kündigen</CardTitle>
          <CardDescription>
            Lösche deinen Server und alle dazugehörigen Daten endgültig.
          </CardDescription>
        </CardHeader>
        <CardContent>
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
          <Button className="border border-gray-800" variant="destructive">Server kündigen</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
