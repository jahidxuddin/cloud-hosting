"use client";

import { userSchema } from "@/lib/schema";
import { useUserStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default function useUser() {
  const { setUser, notifications } = useUserStore();
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

  return { fetchUserData };
}
