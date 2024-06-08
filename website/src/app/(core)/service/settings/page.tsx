import UserAccountCard from "./user-account-card";
import LogoutButton from "./logout-button";

export default function Settings() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Einstellungen</h1>
        <LogoutButton />
      </div>
      <UserAccountCard />
    </main>
  );
}
