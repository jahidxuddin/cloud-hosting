"use client";

import useCosts from "@/hooks/useCosts";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function MonthlyCostChart() {
  const { fetchMonthlyCosts } = useCosts();
  const [data, setData] = useState<{ Wochentag: string; Kosten: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const monthlyCosts = await fetchMonthlyCosts();

      setData(monthlyCosts);
    };

    fetchData();
  }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Wochentag" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Kosten" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
