"use server";

import { messageSchema, tokenSchema } from "@/lib/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function loginUser(formData: FormData) {
  let formValidation;
  try {
    formValidation = loginRequestSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (formValidation.error) redirect("/login?error=Valdierungsfehler");
  } catch (error) {
    redirect("/login?error=Valdierungsfehler");
  }

  let data;
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formValidation.data.email,
        password: formValidation.data.password,
      }),
    });

    data = await res.json();

    const messageValidation = messageSchema.safeParse(data);
    if (messageValidation.success) {
      redirect("/login?error=" + messageValidation.data.message);
    }
  } catch (error) {
    const messageValidation = messageSchema.safeParse(data);
    if (messageValidation.success) {
      redirect("/login?error=" + messageValidation.data.message);
    }
  }

  let responseValidation;
  try {
    responseValidation = tokenSchema.safeParse(data);
  } catch (error) {
    redirect("/login?error=E-Mail oder Passwort ungültig.");
  }

  if (responseValidation.error) {
    redirect("/login?error=E-Mail oder Passwort ungültig.");
  }

  const token = responseValidation.data.token;

  if (formData.get("remember-me") === "on") {
    const thirtyDaysExpiration = 30 * 24 * 60 * 60 * 1000;
    cookies().set("token", token, {
      expires: new Date(Date.now() + thirtyDaysExpiration),
      sameSite: true,
    });
  } else {
    cookies().set("token", token, {
      sameSite: true,
    });
  }

  redirect("/service/dashboard");
}
