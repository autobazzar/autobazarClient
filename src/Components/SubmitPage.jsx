import SubmitAds from "./SubmitAds";
import SubmitMenu from "./SubmitMenu";

export default function SubmitPage() {
  return (
    <div className="flex flex-row w-full p-5 gap-[3rem]" dir="rtl">
      <SubmitMenu />
      <SubmitAds />
    </div>
  );
}
