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
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { pricingArraySchema } from "@/lib/schema";
import { getCookie } from "cookies-next";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Pricing = {
  id: string;
  title: string;
  details: string;
  price: number;
  createdAt: string;
};

export default function RentServerModal() {
  const router = useRouter();
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
        <div>
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
                        key={index}
                        className="flex items-center gap-3 text-lg"
                      >
                        <CheckIcon /> {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-md bg-primary py-3 font-bold uppercase text-white hover:bg-blue-600">
                    Jetzt mieten
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <span>Zurzeit sind keine Preisgestaltungen verfügbar.</span>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
