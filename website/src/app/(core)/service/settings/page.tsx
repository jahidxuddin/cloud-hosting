import UserAccountCard from "@/components/core/service/settings/user-account-card";

export default function Settings() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Einstellungen</h1>
      </div>
      <UserAccountCard />
    </main>
  );
}
