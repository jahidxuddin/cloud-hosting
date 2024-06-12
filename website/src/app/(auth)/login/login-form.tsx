"use client";

import Link from "next/link";
import { loginUser } from "./action";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

export default function LoginForm({ error }: { error: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await loginUser(new FormData(e.currentTarget));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      {error && <span className="font-semibold text-red-500">{error}</span>}
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
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
          Anmelden
        </Button>
      </div>
    </form>
  );
}
