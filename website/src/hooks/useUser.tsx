"use client";

import {
  messageSchema,
  tokenSchema,
  updateAccountDataRequestSchema,
  userSchema,
} from "@/lib/schema";
import { useUserStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";

export default function useUser() {
  const { setUser, setAccount, notifications } = useUserStore();
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      const token = getCookie("token");
      if (!token) {
        router.push("/login");
        return;
      }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/token`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      const userRequestValidation = userSchema.safeParse(data);
      if (userRequestValidation.error) {
        router.push("/login");
        return;
      }

      setUser({
        uuid: userRequestValidation.data.uuid,
        firstName: userRequestValidation.data.firstName,
        lastName: userRequestValidation.data.lastName,
        email: userRequestValidation.data.email,
        roles: userRequestValidation.data.roles,
        credits: userRequestValidation.data.credits,
        notifications,
      });
    } catch (error) {
      router.push("/login");
    }
  };

  const updateAccountData = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    let res;
    let data;
    try {
      const accountDataRequestValidation =
        updateAccountDataRequestSchema.safeParse({
          firstName,
          lastName,
          email,
          password,
        });

      if (accountDataRequestValidation.error) return;

      const token = getCookie("token");
      if (!token) {
        router.push("/login");
        return;
      }

      res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/account`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        }
      );

      data = await res.json();

      const tokenResponseValidation = tokenSchema.safeParse(data);
      if (tokenResponseValidation.error) return;

      setCookie("token", tokenResponseValidation.data.token, {
        sameSite: true,
      });

      setAccount({
        firstName: accountDataRequestValidation.data.firstName,
        lastName: accountDataRequestValidation.data.lastName,
        email: accountDataRequestValidation.data.email,
      });
    } catch (error) {
      if (res?.status === 401) {
        const messageResponseValidation = messageSchema.safeParse(data);
        if (messageResponseValidation.error) return;
      }
      return;
    }
  };

  return { fetchUserData, updateAccountData };
}
