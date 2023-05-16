import React from "react";

interface PropsType {
  time: string;
  content: string;
}

const OverviewCard = ({ time, content }: PropsType) => {
  return (
    <div className="md:flex gap-4 border-b-2 py-4">
      <div className="text-gray-600">{time}</div>
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default OverviewCard;
