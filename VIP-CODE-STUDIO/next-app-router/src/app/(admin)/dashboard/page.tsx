"use client";
import { useSession } from "next-auth/react";

export default function DasboardPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  console.log(session, status);
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1 className="text-3xl font-bold">Dashboard Page</h1>
    </div>
  );
}
