import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PowerIcon,
  SettingsIcon,
  ServerIcon,
  TerminalIcon,
} from "lucide-react";

export default function ServerManager() {
  return (
    <main className="space-y-8">
      <h1 className="font-bold text-3xl sm:text-4xl ml-2">Serververwaltung</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="text-text">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Gesamtzahl an Servern
            </CardTitle>
            <ServerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
          </CardContent>
        </Card>
        <Card className="text-text">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Laufende Server
            </CardTitle>
            <PowerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <Table className="text-text">
            <TableHeader>
              <TableRow>
                <TableHead>Server</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>CPU</TableHead>
                <TableHead>Speicher</TableHead>
                <TableHead>Arbeitsspeicher</TableHead>
                <TableHead>Aktionen</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">web-01</TableCell>
                <TableCell>
                  <Badge variant="default">Laufend</Badge>
                </TableCell>
                <TableCell>
                  <Progress color="#fffff" value={75} />
                </TableCell>
                <TableCell>
                  <Progress value={68} />
                </TableCell>
                <TableCell>
                  <Progress value={24} />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <PowerIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TerminalIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <SettingsIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">db-01</TableCell>
                <TableCell>
                  <Badge variant="default">Laufend</Badge>
                </TableCell>
                <TableCell>
                  <Progress value={62} />
                </TableCell>
                <TableCell>
                  <Progress value={74} />
                </TableCell>
                <TableCell>
                  <Progress value={24} />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <PowerIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TerminalIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <SettingsIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">app-01</TableCell>
                <TableCell>
                  <Badge variant="destructive">Gestoppt</Badge>
                </TableCell>
                <TableCell>
                  <Progress value={0} />
                </TableCell>
                <TableCell>
                  <Progress value={0} />
                </TableCell>
                <TableCell>
                  <Progress value={0} />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <PowerIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TerminalIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <SettingsIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">cache-01</TableCell>
                <TableCell>
                  <Badge variant="default">Laufend</Badge>
                </TableCell>
                <TableCell>
                  <Progress value={82} />
                </TableCell>
                <TableCell>
                  <Progress value={76} />
                </TableCell>
                <TableCell>
                  <Progress value={69} />
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                      <PowerIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <TerminalIcon className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <SettingsIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
}
