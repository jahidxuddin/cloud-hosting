import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anmeldung",
};

export default function Login() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="mt-6 text-center text-4xl md:text-6xl font-bold tracking-tight text-text dark:text-gray-50">
            Login
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 ">
            Bitte melden Sie sich an, um fortzufahren.
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
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
        <div className="text-center text-gray-600 dark:text-gray-400">
          Sie haben noch kein Konto?{" "}
          <Link
            className="font-medium text-primary hover:text-primary dark:text-accent dark:hover:text-accent dark:focus:text-accent"
            href="/register"
          >
            Jetzt registrieren
          </Link>
        </div>
      </div>
    </main>
  );
}
