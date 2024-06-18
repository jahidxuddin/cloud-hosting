"use client";

import { Button } from "@/components/ui/button";
import useServer from "@/hooks/useServer";
import { PowerIcon } from "lucide-react";

export default function PowerButton({
  serverId,
  currentStatus,
}: {
  serverId: string;
  currentStatus: boolean;
}) {
  const { toggleServer } = useServer();

  return (
    <Button
      onClick={() => toggleServer(serverId, currentStatus)}
      size="icon"
      variant="ghost"
    >
      <PowerIcon className="h-4 w-4" />
    </Button>
  );
}
