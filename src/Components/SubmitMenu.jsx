import MenuCard from "./MenuCard";
import { IoLocationOutline, IoCall } from "react-icons/io5";
import { GrPowerForceShutdown } from "react-icons/gr";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

export default function SubmitMenu() {
  return (
    <div className="hidden med:flex flex-col items-center bg-[#F1F5F6] h-fit w-fit p-10 rounded-xl">
      <h3 className="text-2xl font-bold text-nowrap font-dast mb-6">
        مراحل ثبت آگهی
      </h3>
      <div className="flex flex-col gap-5">
        <MenuCard
          className={'!bg-[#2B4E47] text-white'}
          title={"محل سکونت"}
          icon={<IoLocationOutline className="text-2xl" />}
        />
        <MenuCard
          title={"مشخصات ضروری"}
          icon={<GrPowerForceShutdown className="text-2xl" />}
        />
        <MenuCard
          title={"مشخصات تکمیلی"}
          icon={<AiOutlineAppstoreAdd className="text-2xl" />}
        />
        <MenuCard
          title={"مشخصات تماس"}
          icon={<IoCall className="text-2xl" />}
        />
      </div>
    </div>
  );
}
