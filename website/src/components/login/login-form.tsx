import Link from "next/link";
import { Button } from "../ui/button";
import { loginUser } from "./action";

export default function LoginForm({ error }: { error: string }) {
  return (
    <form action={loginUser} method="POST" className="space-y-6">
      <div>
        <label
          className="block text-sm font-medium text-text dark:text-gray-300"
          htmlFor="email"
        >
          E-Mail Adresse
        </label>
        <div className="mt-1">
          <input
            autoComplete="email"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
            id="email"
            name="email"
            placeholder="max.mustermann@example.com"
            required
            type="email"
          />
        </div>
      </div>
      <div>
        <label
          className="block text-sm font-medium text-text dark:text-gray-300"
          htmlFor="password"
        >
          Passwort
        </label>
        <div className="mt-1">
          <input
            autoComplete="current-password"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
            id="password"
            name="password"
            placeholder="Passwort"
            required
            type="password"
          />
        </div>
      </div>
      {error && <span className="text-red-500 font-semibold">{error}</span>}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-800 dark:focus:ring-primary"
            id="remember-me"
            name="remember-me"
            type="checkbox"
          />
          <label
            className="ml-2 block text-sm text-text dark:text-gray-300"
            htmlFor="remember-me"
          >
            Angemeldet bleiben
          </label>
        </div>
        <div className="text-sm">
          <Link
            className="font-medium text-primary hover:text-primary dark:text-accent dark:hover:text-accent dark:focus:text-accent"
            href="#"
          >
            Passwort vergessen?
          </Link>
        </div>
      </div>
      <div>
        <Button
          className="flex w-full justify-center rounded-md border border-transparent bg-primary hover:bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm"
          type="submit"
        >
          Anmelden
        </Button>
      </div>
    </form>
  );
}
