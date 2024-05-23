import { IoPersonOutline } from "react-icons/io5";
import IconButton from "./Common/IconButton";
import { ImStatsDots } from "react-icons/im";
import { BsChatLeftText } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { IoMdLogOut, IoIosPeople, IoMdStats } from "react-icons/io";
import DashboardCard from "./Common/Dashboard-card";
import { MdQueryStats, MdSignalWifiStatusbar1Bar } from "react-icons/md";
import Table from "./Common/Table";

export default function Admin() {
  return (
    <div dir="rtl" className="flex flex-row justify-between">
      <section className="flex flex-col w-full font-dast ">
        <div className="flex flex-row pt-3 pb-2 gap-3 px-10  items-center shadow-lg w-full">
          <IoPersonOutline className="text-2xl" />
          مدیر سایت
        </div>
        <div className="bg-[var(--admin-bg-color)] px-10">
          <h3 className="text-[1.5rem] font-bold my-4">گزارش کلی</h3>
          <div className="flex flex-row w-full justify-between mb-5">
            <DashboardCard
              key={0}
              subtitle={"آگهی های ثبت شده امروز"}
              // title={11}
              Icon={IoMdStats}
              url={"/admin/today-ads"}
            />
            <DashboardCard
              key={1}
              subtitle={"آگهی های ثبت شده کل"}
              // title={155}
              Icon={MdSignalWifiStatusbar1Bar}
              url={"/admin/ad-count"}
            />
            <DashboardCard
              key={2}
              subtitle={"تعداد کاربران ثبت نامی"}
              // title={121}
              url={"/admin/user-count"}
              Icon={MdQueryStats}
            />
          </div>
          <div className="flex flex-col gap-5 mb-10">
            <Table title={"بررسی دیدگاه ها"} />
            <Table title={"مدیریت کاربران"} />
            <Table title={"مدیریت آگهی ها"} />
          </div>
        </div>
      </section>
      {/* dashboard section */}
      <section className=" sticky top-0 flex flex-col w-fit text-nowrap h-fit bg-[var(--admin-dashboard-color)] rounded-r-xl text-[var(--text-white)] items-center font-dast">
        <h1 className="text-2xl mb-8 w-full text-center border-b-2 p-10">
          داشبورد
        </h1>
        <div className="flex flex-col font-dast gap-[3rem] mb-10 pl-[3rem] px-3">
          <IconButton
            title={"گزارش کلی"}
            Icon={ImStatsDots}
            className={"dashboard-iconbutton"}
          />
          <IconButton
            title={"بررسی دیدگاه ها"}
            Icon={BsChatLeftText}
            className={"dashboard-iconbutton"}
          />
          <IconButton
            title={"مدیریت کابران"}
            Icon={IoIosPeople}
            className={"dashboard-iconbutton"}
          />
          <IconButton
            title={"مدیریت آگهی ها"}
            Icon={LuFileSpreadsheet}
            className={"dashboard-iconbutton"}
          />
          <IconButton
            title={"خروچ"}
            Icon={IoMdLogOut}
            className={"dashboard-iconbutton"}
          />
        </div>
      </section>
    </div>
  );
}
