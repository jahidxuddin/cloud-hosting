"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { FormEvent, useState } from "react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Vorname:", firstName);
    console.log("Nachname:", lastName);
    console.log("E-Mail:", email);
    console.log("Passwort:", password);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-text dark:text-gray-300 mb-1"
          >
            Vorname
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
            placeholder="Max"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-text dark:text-gray-300 mb-1"
          >
            Nachname
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
            placeholder="Mustermann"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text dark:text-gray-300 mb-1"
          >
            E-Mail Adresse
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="max.mustermann@example.com"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-text dark:text-gray-300 mb-1"
          >
            Passwort
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="Passwort"
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
          />
        </div>
        <div>
          <Button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-primary hover:bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm"
          >
            Registrieren
          </Button>
        </div>
      </form>
      <div className="text-center text-gray-600 dark:text-gray-400">
        Sie haben bereits ein Konto?{" "}
        <Link
          className="font-medium text-primary hover:text-primary dark:text-accent dark:hover:text-accent dark:focus:text-accent"
          href="/login"
        >
          Jetzt anmelden
        </Link>
      </div>
    </>
  );
}
