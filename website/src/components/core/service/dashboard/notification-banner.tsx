"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useNotification from "@/hooks/useNotification";
import { useUserStore } from "@/lib/store";
import { useEffect } from "react";

export default function NotificationBanner() {
  const { fetchNotificationsFromUser } = useNotification();
  const { notifications } = useUserStore();

  useEffect(() => {
    fetchNotificationsFromUser();
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-bold text-text">Benachrichtungen</CardTitle>
      </CardHeader>
      <CardContent className="text-text text-sm space-y-3 flex-1">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.uuid} className="flex flex-col">
              <span>{notification.content}</span>
              <span className="font-semibold">
                {"Von:"} {notification.createdAt.toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <span className="text-center">Zurzeit hast du keine Benachrichtungen.</span>
        )}
      </CardContent>
      {notifications.length > 2 && (
        <CardFooter>
          <Button className="bg-primary hover:bg-blue-600 text-white py-3 w-full rounded-md uppercase font-bold">
            Mehr anzeigen
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
