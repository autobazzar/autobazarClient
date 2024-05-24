import { node, string } from "prop-types";

export default function MenuCard({ title, icon, className }) {
  return (
    <div
      className={`flex flex-row bg-white text-nowrap p-3 px-10 font-dast content-center rounded-md min-w-[10rem] gap-5 items-center ${className}`}
    >
      {icon}
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}
MenuCard.propTypes = {
  title: string,
  icon: node,
  className: string,
};
