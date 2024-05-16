import { node, string } from "prop-types"

export default function DashboardCard({title,subtitle,Icon}) {
  return (
    <div className="flex flex-col w-fit p-10 bg-white rounded-xl font-dast pointer-events-none">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-bold pr-6">{title}</h1>
        <Icon className="text-[2rem] text-[#ccc]" />
      </div>
      <h1 className="text-[#858585] font-bold">{subtitle}</h1>
    </div>
  );
}

DashboardCard.propTypes={
    title:string,
    subtitle:string,
    Icon:node,
}