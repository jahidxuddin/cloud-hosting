import { Notification } from "@/lib/store";
import { differenceInDays } from "date-fns";
import React from "react";

export default function NotificationText({
  notification,
}: {
  notification: Notification;
}) {
  const calcDistanceFromCreatedAt = () => {
    const isoTimestamp = notification.createdAt.split(".")[0].replace(" ", "T");
    const notificationDate = new Date(isoTimestamp);
    const now = new Date();

    return differenceInDays(now, notificationDate);
  };

  const distanceFromCreatedAt = calcDistanceFromCreatedAt();

  const createDateString = () => {
    if (distanceFromCreatedAt === 0) return "Heute";
    if (distanceFromCreatedAt === 1) return `Vor einem Tag`;

    return `Vor ${distanceFromCreatedAt} Tagen`;
  };

  return (
    <div key={notification.id} className="flex flex-col">
      <span>{notification.content}</span>
      <span className="font-semibold">{createDateString()}</span>
    </div>
  );
}
