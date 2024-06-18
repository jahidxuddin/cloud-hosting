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
import { differenceInDays } from "date-fns";
import NotificationText from "./notification-text";
import NotificationModal from "./notification-modal";

export default function NotificationBanner() {
  const { fetchNotificationsFromUser } = useNotification();
  const { notifications } = useUserStore();

  useEffect(() => {
    fetchNotificationsFromUser();
  }, []);

  const limitedNotifications = notifications.slice(0, 2);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="font-bold text-text">Benachrichtungen</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 space-y-3 text-sm text-text">
        {notifications.length > 0 ? (
          limitedNotifications.map((notification) => (
            <NotificationText
              key={notification.id}
              notification={notification}
            />
          ))
        ) : (
          <span className="text-center">
            Zurzeit hast du keine Benachrichtungen.
          </span>
        )}
      </CardContent>
      {notifications.length > 2 && (
        <CardFooter>
          <NotificationModal notifications={notifications} />
        </CardFooter>
      )}
    </Card>
  );
}
