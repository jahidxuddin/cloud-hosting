"use client";

import { Button } from "@/components/ui/button";
import useServer from "@/hooks/useServer";
import { TrashIcon } from "lucide-react";

export default function DeleteButton({ serverId }: { serverId: string }) {
  const { deleteServer } = useServer();

  return (
    <Button
      onClick={() => deleteServer(serverId)}
      size="icon"
      variant="destructive"
    >
      <TrashIcon className="h-4 w-4" />
    </Button>
  );
}
