import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function Settings() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Einstellungen</h1>
      </div>
      <section className="grid gap-6">
        <Card className="text-text">
          <CardHeader>
            <CardTitle>Benutzerkonto</CardTitle>
            <CardDescription>
              Verwalten Sie Ihre Kontoinformationen.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstname">Vorname</Label>
              <input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                id="firstname"
                placeholder="Max"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastname">Nachname</Label>
              <input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                id="lastname"
                placeholder="Mustermann"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-Mail Adresse</Label>
              <input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                id="email"
                placeholder="maxmustermann@example.com"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Passwort</Label>
              <input
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
                id="password"
                placeholder="Neues Passwort"
                type="password"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="text-text">
          <CardHeader>
            <CardTitle>Benachrichtigungen</CardTitle>
            <CardDescription>
              Verwalten Sie Ihre Benachrichtigungseinstellungen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between space-x-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium">E-Mail-Benachrichtigungen</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Erhalten Sie wichtige Informationen per E-Mail.
                </p>
              </div>
              <Switch id="email-notifications" />
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
