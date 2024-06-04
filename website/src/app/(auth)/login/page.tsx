import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import LoginForm from "@/components/login/login-form";

export const metadata: Metadata = {
  title: "Anmeldung",
};

export default function Login({
  searchParams,
}: {
  searchParams: { error: string };
}) {
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
        <LoginForm error={searchParams.error} />
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
