"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
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
import {useUserStore} from "@/lib/store";
import {useRouter} from "next/navigation";
import {getCookie} from "cookies-next";
import {userSchema} from "@/lib/schema";
import {useState} from "react";


export default function ServerManager() {
    const router = useRouter();
    const {uuid} = useUserStore();
    const [count, setCount] = useState<number | null>();
    const [countOnline, setCountOnline] = useState<number | null>();

    const fetchData = async () => {
        try {
            const token = getCookie("token");
            if (!token) {
                router.push("/login");
                return;
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/server/${uuid}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();
            const userRequestValidation = userSchema.safeParse(data);
            if (userRequestValidation.error) {
                router.push("/login");
                return;
            }
            setCount(Object.keys(data).length);

        } catch (error) {
            router.push("/login");
        }
    }
    const fetchDataAvailable = async () => {
        try {
            const token = getCookie("token");
            if (!token) {
                router.push("/login");
                return;
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/server/${uuid}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await res.json();
            setCountOnline(Object.keys(data.filter((data: { status: boolean; }) => data.status)).length);

        } catch (error) {
            router.push("/login");
        }
    }


    return (
        <main className="space-y-8">
            <h1 className="font-bold text-3xl sm:text-4xl ml-2">Serververwaltung</h1>
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="text-text">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Gesamtzahl an Servern
                        </CardTitle>
                        <ServerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{count}</div>
                    </CardContent>
                </Card>
                <Card className="text-text">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">
                            Laufende Server
                        </CardTitle>
                        <PowerIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{countOnline}</div>
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
                                    <Progress color="#fffff" value={75}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={68}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={24}/>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost">
                                            <PowerIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TerminalIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <SettingsIcon className="w-4 h-4"/>
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
                                    <Progress value={62}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={74}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={24}/>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost">
                                            <PowerIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TerminalIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <SettingsIcon className="w-4 h-4"/>
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
                                    <Progress value={0}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={0}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={0}/>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost">
                                            <PowerIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TerminalIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <SettingsIcon className="w-4 h-4"/>
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
                                    <Progress value={82}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={76}/>
                                </TableCell>
                                <TableCell>
                                    <Progress value={69}/>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button size="icon" variant="ghost">
                                            <PowerIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <TerminalIcon className="w-4 h-4"/>
                                        </Button>
                                        <Button size="icon" variant="ghost">
                                            <SettingsIcon className="w-4 h-4"/>
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