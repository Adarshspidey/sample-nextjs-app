import React from "react";
// import { useNavigate } from "react-router-dom";

interface PropsType {
  time: string;
  content: string;
}

const OverviewCard = ({ time, content }: PropsType) => {
  // const router = useNavigate();
  return (
    <div
      className="md:flex gap-4 border-b-2 py-4"
      // onClick={() => {
      //   router("task/1");
      // }}
    >
      <div className="text-gray-600">{time}</div>
      <div className="font-bold">{content}</div>
    </div>
  );
};

export default OverviewCard;
