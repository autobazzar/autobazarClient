import { node, string } from "prop-types"
import { useEffect, useState } from "react";
import { getByUrl } from "../../api/api";

export default function DashboardCard({subtitle,Icon,url}) {
  const [data,setData]=useState(null);
  useEffect(()=>{
    const fetcher= async ()=>{
      const response =await getByUrl(url)
      setData(response.data)
    }
   fetcher();
  },[]);
  return (
    <div className="flex flex-col w-fit p-7 bg-white rounded-xl font-dast pointer-events-none">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[2rem] font-bold pr-6">{data}</h1>
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
    url:string,
}