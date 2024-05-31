"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const registerRequestSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

const registerResponseSchema = z.object({
  token: z.string(),
});

const messageSchema = z.object({
  message: z.string(),
  statusCode: z.number(),
});

export async function registerUser(formData: FormData) {
  let formValidation;
  try {
    formValidation = registerRequestSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (formValidation.error) redirect("/register?error=Validierungsfehler");
  } catch (error) {
    redirect("/register?error=Validierungsfehler");
  }

  let data;
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formValidation.data.firstName,
        lastName: formValidation.data.lastName,
        email: formValidation.data.email,
        password: formValidation.data.password,
        roles: "USER",
      }),
    });

    data = await res.json();

    const messageValidation = messageSchema.safeParse(data);
    if (messageValidation.success) {
      redirect("/register?error=" + messageValidation.data.message);
    }
  } catch (error) {
    const messageValidation = messageSchema.safeParse(data);
    if (messageValidation.success) {
      redirect("/register?error=" + messageValidation.data.message);
    }
  }

  let responseValidation;
  try {
    responseValidation = registerResponseSchema.safeParse(data);
  } catch (error) {
    redirect("/register?error=Serverfehler");
  }

  if (responseValidation.error) {
    redirect("/register?error=Serverfehler");
  }

  const token = responseValidation.data.token;
  const thirtyDaysExpiration = 30 * 24 * 60 * 60 * 1000;
  cookies().set("token", token, {
    expires: new Date(Date.now() + thirtyDaysExpiration),
  });

  redirect("/service/dashboard");
}
