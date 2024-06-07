"use client";

import { Button } from "@/components/ui/button";
import { messageSchema } from "@/lib/schema";
import { getCookie } from "cookies-next";
import { PowerIcon } from "lucide-react";
import { redirect } from "next/navigation";
import revalidateServers from "./action";

export default function PowerButton({
  serverId,
  currentStatus,
}: {
  serverId: string;
  currentStatus: boolean;
}) {
  const handleClick = async () => {
    const token = getCookie("token");
    if (!token) redirect("/login");

    let data;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/server/status/${serverId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}}`,
          },
          body: JSON.stringify({
            status: !currentStatus,
          }),
        }
      );

      data = await res.json();
    } catch (error) {
      return;
    }

    const messageResponseValidation = messageSchema.safeParse(data);
    if (messageResponseValidation.error) return;

    revalidateServers();
  };

  return (
    <Button onClick={handleClick} size="icon" variant="ghost">
      <PowerIcon className="w-4 h-4" />
    </Button>
  );
}
