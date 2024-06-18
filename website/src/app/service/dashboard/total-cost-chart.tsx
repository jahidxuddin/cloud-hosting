"use client";

import useCosts from "@/hooks/useCosts";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function TotalCostChart() {
  const { fetchTotalCosts } = useCosts();
  const [data, setData] = useState<{ Monat: string; Kosten: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const totalCosts = await fetchTotalCosts();

      setData(totalCosts);
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Monat" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="Kosten"
          stroke="#3B82F6"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
