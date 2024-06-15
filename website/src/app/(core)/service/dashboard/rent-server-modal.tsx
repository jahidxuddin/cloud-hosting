"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  messageSchema,
  pricingArraySchema,
  serverRentSchema,
  tokenSchema,
} from "@/lib/schema";
import { useUserStore } from "@/lib/store";
import { getCookie, setCookie } from "cookies-next";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import revalidateServers from "../server-manager/action";

type Pricing = {
  id: string;
  title: string;
  details: string;
  price: number;
  createdAt: string;
};

const getRandomName = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export default function RentServerModal() {
  const router = useRouter();
  const { uuid, setCredits } = useUserStore();
  const [pricings, setPricings] = useState<Pricing[]>([]);

  const fetchPricings = async () => {
    try {
      const token = getCookie("token");
      if (!token) router.push("/login");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/pricing`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await res.json();
      const pricingResponseValidation = pricingArraySchema.safeParse(data);

      if (pricingResponseValidation.success) {
        setPricings(pricingResponseValidation.data);
      }
    } catch (error) {
      setPricings([]);
    }
  };

  useEffect(() => {
    fetchPricings();
  }, []);

  const handleClick = async (pricingId: string) => {
    let data;
    try {
      const token = getCookie("token");
      if (!token) router.push("/login");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/server/rent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: getRandomName(16),
            pricingId,
            userId: uuid,
          }),
        },
      );

      data = await res.json();
    } catch (error) {
      return;
    }
    

    const messageResponseValidation = messageSchema.safeParse(data);
    if (messageResponseValidation.success) return;
    
    const serverRentResponseValidation = serverRentSchema.safeParse(data);
    if (serverRentResponseValidation.error) return;

    setCredits(serverRentResponseValidation.data.credits);
    revalidateServers();
    setCookie("token", serverRentResponseValidation.data.token);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-md bg-primary py-3 font-bold uppercase text-white hover:bg-blue-600">
          Jetzt mieten
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Preisgestaltung</DialogTitle>
        </DialogHeader>
        <DialogClose>
          {pricings.length > 0 ? (
            pricings.map((pricing) => (
              <Card key={pricing.id}>
                <CardHeader className="text-center">
                  <span className="text-2xl font-semibold">
                    {pricing.title}
                  </span>
                  <span className="text-3xl font-bold">
                    {pricing.price}€ / Monat
                  </span>
                </CardHeader>
                <CardContent>
                  <ul>
                    {pricing.details.split(",").map((detail, index) => (
                      <li
                        key={pricing.id + detail}
                        className="flex items-center gap-3 text-lg"
                      >
                        <CheckIcon /> {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => handleClick(pricing.id)}
                    className="w-full rounded-md bg-primary py-3 font-bold uppercase text-white hover:bg-blue-600"
                  >
                    Jetzt mieten
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <span>Zurzeit sind keine Preisgestaltungen verfügbar.</span>
          )}
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
