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
import { messageSchema, serverArraySchema } from "@/lib/schema";
import { PowerIcon, ServerIcon, EditIcon } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PowerButton from "./power-button";
import DeleteButton from "./delete-button";

export default async function ServerManager() {
  const tokenCookie = cookies().get("token");
  if (!tokenCookie) redirect("/login");
  const token = tokenCookie.value;

  let data;
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/user-server/server-by-token`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        next: {
          revalidate: 10,
          tags: ["servers"],
        },
      },
    );

    data = await res.json();
  } catch (error) {
    redirect("/service/dashboard");
  }

  const messageResponseValidation = messageSchema.safeParse(data);
  if (messageResponseValidation.success) redirect("/service/dashboard");

  const serverResponseValidation = serverArraySchema.safeParse(data);
  if (serverResponseValidation.error) redirect("/service/dashboard");

  const servers = serverResponseValidation.data;

  const serverCount = servers.length;
  const onlineServerCount = servers.filter((server) => server.status).length;

  return (
    <main className="space-y-8">
      <h1 className="ml-2 text-3xl font-bold sm:text-4xl">Serververwaltung</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="text-text">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Gesamtzahl an Servern
            </CardTitle>
            <ServerIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{serverCount}</div>
          </CardContent>
        </Card>
        <Card className="text-text">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Laufende Server
            </CardTitle>
            <PowerIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{onlineServerCount}</div>
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
              {servers.length > 0 && (
                <>
                  {servers.map((server) => (
                    <TableRow key={server.id}>
                      <TableCell className="font-medium">
                        {server.name}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={server.status ? "default" : "destructive"}
                        >
                          {server.status ? "Laufend" : "Gestoppt"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Progress color="#fffff" value={server.cpu} />
                      </TableCell>
                      <TableCell>
                        <Progress value={server.storage} />
                      </TableCell>
                      <TableCell>
                        <Progress value={server.ram} />
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <PowerButton
                            serverId={server.id}
                            currentStatus={server.status}
                          />
                          <Button size="icon" variant="ghost">
                            <EditIcon className="h-4 w-4" />
                          </Button>
                          <DeleteButton serverId={server.id} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
}
