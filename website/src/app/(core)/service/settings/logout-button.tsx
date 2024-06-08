"use client";

import { Button } from "@/components/ui/button";
import { deleteCookie } from "cookies-next";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleClick = () => {
    deleteCookie("token");
    router.push("/login");
  };

  return (
    <Button
      variant="outline"
      className="flex items-center gap-2"
      onClick={handleClick}
    >
      <LogOutIcon />
      Abmelden
    </Button>
  );
}
