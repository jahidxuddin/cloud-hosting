import { messageSchema } from "@/lib/schema";
import revalidateServers from "@/revalidators/revalidateServers";
import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";

export default function useServer() {
  const toggleServer = async (serverId: string, currentStatus: boolean) => {
    const token = getCookie("token");
    if (!token) redirect("/login");

    let data;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/server/status/${serverId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}}`,
          },
          body: JSON.stringify({
            status: !currentStatus,
          }),
        },
      );

      data = await res.json();
    } catch (error) {
      return;
    }

    const messageResponseValidation = messageSchema.safeParse(data);
    if (messageResponseValidation.error) return;

    revalidateServers();
  };

  return { toggleServer };
}
