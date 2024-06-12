import { Metadata } from "next";
import RegisterForm from "./register-form";

export const metadata: Metadata = {
  title: "Registrierung",
};

export default function Register({
  searchParams,
}: {
  searchParams: { error: string };
}): JSX.Element {
  return (
    <main className="flex min-h-[100vh] items-center justify-center bg-background px-4 py-12 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-lg space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="mt-6 text-center text-4xl font-bold tracking-tight text-text dark:text-gray-50 md:text-6xl">
            Registrierung
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 md:text-xl">
            Bitte füllen Sie das Formular aus, um sich zu registrieren.
          </p>
        </div>
        <RegisterForm error={searchParams.error} />
      </div>
    </main>
  );
}
