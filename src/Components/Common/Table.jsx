import { string } from "prop-types";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { TiTick } from "react-icons/ti";
export default function Table({ title }) {
  return (
    <div className="w-full bg-white rounded-lg font-dast pb-4 ">
      <h1 className="text-[1.5rem] font-bold pt-5 pr-5 pb-3">{title}</h1>
      <table className="w-full  h-[4rem]">
        <thead className="text-[20px] text-center">
          <tr>
            <th>نام کاربری</th>
            <th>دیدگاه</th>
            <th>کد آگهی</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className=" text-center h-[1rem] overflow-scorll  text-gray-500">
          <tr>
            <td>محمد </td>
            <td>راضیم خوب بود....</td>
            <td>#123123</td>
            <td className="flex flex-row justify-center gap-3">
              <button>
                <MdOutlineCancelPresentation className="text-red-600" />
              </button>
              <button>
                <TiTick  className="text-green-600"/>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  title: string,
};