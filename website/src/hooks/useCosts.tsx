"use client";

import { costsArraySchema } from "@/lib/schema";
import { useUserStore } from "@/lib/store";
import { getCookie } from "cookies-next";
import { format, setMonth } from "date-fns";
import { de } from "date-fns/locale";
import { useRouter } from "next/navigation";

function getMonthNameInGerman(monthNumber: number) {
  const date = setMonth(new Date(), monthNumber - 1);

  return format(date, "LLLL", { locale: de });
}

export default function useCosts() {
  const router = useRouter();
  const { uuid } = useUserStore();

  const fetchMonthlyCosts = async () => {
    const token = getCookie("token");
    if (!token) router.push("/login");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bill/monthly-costs/${uuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await res.json();

      const monthlyCostResponseValidation = costsArraySchema.safeParse(data);
      if (monthlyCostResponseValidation.error) return [];

      return monthlyCostResponseValidation.data.map((weekDay) => ({
        Wochentag: weekDay.date,
        Kosten: weekDay.costs,
      }));
    } catch (error) {
      return [];
    }
  };

  const fetchTotalCosts = async () => {
    const token = getCookie("token");
    if (!token) router.push("/login");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bill/total-costs/${uuid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await res.json();

      const totalCostResponseValidation = costsArraySchema.safeParse(data);
      if (totalCostResponseValidation.error) return [];

      return totalCostResponseValidation.data.map((month) => ({
        Monat: getMonthNameInGerman(parseInt(month.date)),
        Kosten: month.costs,
      }));
    } catch (error) {
      return [];
    }
  };

  return { fetchMonthlyCosts, fetchTotalCosts };
}
