import { array, string } from "prop-types";

import { translateTitle } from "./helper";
export default function Table({ title , headers,data , ActionComp1,ActionComp2,deleteHandler}) {
  // useEffect(()=>{
  //   // useEffect(()=>{})
  // },[]);
  return (
    <div className="w-full bg-white rounded-lg font-dast pb-4 ">
      <h1 className="text-[1.5rem] font-bold pt-5 pr-5 pb-3">{title}</h1>
      <div className="tableFixHead">
        <table className="w-full  h-[14rem]">
          <thead className="text-[20px] text-center">
            <tr className="border-[1px] border-gray-200 p-5">
              {headers.map((item, index) => (
                <th key={index}>{translateTitle(item)}</th>
              ))}
              <th key={-1}>{'عملیات'}</th>
            </tr>
          </thead>
          <tbody className=" text-center h-[1rem] overflow-scorll  text-gray-500">
            {data.map((item, id) => (
              <tr key={id++}>
                {headers.map((headerKey, index) => (
                  <td key={`${id}-${index}`}>{item[headerKey]}</td>
                ))}
                <td className="flex flex-row justify-center gap-3 h-full">
                  <button onClick={()=>deleteHandler(item.id)}>
                    <ActionComp1 className="text-red-600" />
                  </button>
                  <button>
                    <ActionComp2 className="text-gray-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Table.propTypes = {
  title: string,
  headers:array,
  data:array,
};