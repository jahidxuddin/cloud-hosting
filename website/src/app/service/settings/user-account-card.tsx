"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import useUser from "@/hooks/useUser";
import { useUserStore } from "@/lib/store";
import { ChangeEventHandler, useEffect, useState } from "react";

export default function UserAccountCard() {
  const { fetchUserData, updateAccountData } = useUser();
  const { firstName, lastName, email } = useUserStore();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    setFormData({
      firstName,
      lastName,
      email,
      password: formData.password,
    });
  }, [firstName, lastName, email]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    updateAccountData(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password,
    );
    setFormData({
      ...formData,
      password: "",
    });
  };

  return (
    <Card className="text-text">
      <CardHeader>
        <CardTitle>Benutzerkonto</CardTitle>
        <CardDescription>
          Verwalten Sie Ihre Kontoinformationen.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="firstname">Vorname</Label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
            id="firstname"
            name="firstName"
            placeholder="Vorname"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="lastname">Nachname</Label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
            id="lastname"
            name="lastName"
            placeholder="Nachname"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">E-Mail Adresse</Label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
            id="email"
            name="email"
            placeholder="E-Mail Adresse"
            value={formData.email}
            onChange={handleChange}
            type="email"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Passwort</Label>
          <input
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400"
            id="password"
            placeholder="Neues Passwort"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </CardContent>
      {firstName !== formData.firstName ||
      lastName !== formData.lastName ||
      email !== formData.email ||
      formData.password.length > 0 ? (
        <CardFooter>
          <Button onClick={handleClick} className="w-full">
            Abschicken
          </Button>
        </CardFooter>
      ) : (
        <></>
      )}
    </Card>
  );
}
