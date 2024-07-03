import SubmitMenu from "./SubmitMenu";
import EditAd from "./EditAd";
export default function EditAdPage() {
    return (
      <div className="flex flex-row w-full p-5 gap-[3rem]" dir="rtl">
        <SubmitMenu />
        <EditAd/>
      </div>
    );
  }
  