import OverviewCard from "@/components/OverviewCard";
import arrow from "../../assets/icons/right-arrow.svg";
import Image from "next/image";

const Task = () => {
  return (
    <div>
      <div className="grid gap-4 md:place-items-center mb-2">
        <div className="text-3xl font-bold">Schedule</div>
        <div className="text-blue-600 flex">
          Learn more about our agenda{" "}
          <Image src={arrow} alt="" width={20} height={20} />
        </div>
      </div>
      <OverviewCard time="08:00 - 09:00" content="Opening Remark" />
      <OverviewCard
        time="09:00 - 10:00"
        content="Bergside LLC: Controlling the video traffic flows"
      />
      <OverviewCard
        time="10:00 - 11:00"
        content="Flowbite - An Open Framework for forensic watermarking"
      />
      <OverviewCard time="11:00 - 12:00" content="Cofee Break" />
      <OverviewCard
        time="12:00 - 13:00"
        content="Scaling your brand from 0 to multimillion euros"
      />
      <OverviewCard
        time="13:00 - 14:00"
        content="Updates from the Open Source Multimedia community"
      />
      <OverviewCard
        time="14:00 - 15:00"
        content="Exploring the balance between customer acquistion and retention"
      />
      <OverviewCard
        time="15:00 - 16:00"
        content="Flowbite - An Open Framework for forensic watermarking"
      />
      <OverviewCard
        time="16:00 - 17:00"
        content="Scaling your brand from 0 to multimillion euros"
      />
      <OverviewCard time="17:00 - 18:00" content="Drinks & " />
    </div>
  );
};

export default Task;
