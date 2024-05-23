import contactImage from '../assets/image/about-us.png';

export default function AboutUs() {
  return (
    <div dir="rtl" className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-4xl bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-4">
            <h2 className="text-2xl font-bold mb-4">درباری اتوبازار</h2>
            <p className="mb-4">
              اتوبازار از اسفند ماه 1400 با هدف ایجاد سعولت در خرید و فروش ماشین آغار به کار کرد.
            </p>
          </div>
          <div className="md:w-1/4 p-4 flex justify-center border-8 border-green-750">
            <img src={contactImage} alt="About Us" className="rounded-lg shadow-lg max-h-96" />
          </div>
        </div>
        <div className="mt-4">
          <p>
            اگر قصد خرید یا فروش ماشین خود را دارید، یافتن یک پلتفرم مناسب برای ایجاد آگهی به منظور فروش ماشین و جستجو برای خرید ماشین مورد نظر باید جزو اقدامات اولیه شما باشد.
            </p>
            <br/>
            <p>
            اتوبازار یک پلتفرم معتبر و راحت است که می‌توانید اطلاعات مورد نظر درباره ماشین‌های فروشی را در آن بررسی کنید و همچنین اگر ماشینی برای فروش دارید، آگهی ایجاد کنید و به راحتی مشتری بیابید!
          </p>
        </div>
      </div>
    </div>
  );
}
