"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface PropsType {
  time: string;
  content: string;
}

const OverviewCard = ({ time, content }: PropsType) => {
  const id = 1;
  const router = useRouter();
  return (
    <div
      className="md:flex gap-4 border-b-2 py-4"
      onClick={() => {
        router.push(`task/${id}`);
      }}
    >
      <div className="text-gray-600">{time}</div>
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default OverviewCard;
