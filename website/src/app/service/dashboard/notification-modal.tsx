import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Notification } from "@/lib/store";
import NotificationText from "./notification-text";

export default function NotificationModal({
  notifications,
}: {
  notifications: Notification[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-md bg-primary py-3 font-bold uppercase text-white hover:bg-blue-600">
          Mehr anzeigen
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ihre Benachrichtungen</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm text-text">
          {notifications.map((notification) => (
            <NotificationText
              key={notification.id}
              notification={notification}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
