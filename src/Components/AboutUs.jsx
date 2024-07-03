import contactImage from '../assets/image/about-us.png';

export default function AboutUs() {
  return (
    <div dir="rtl" className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="p-6 rounded-lg shadow-lg w-full max-w-4xl bg-white">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 p-4 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">درباری اتوبازار</h2>
            <p className="mb-4">
              اتوبازار از اسفند ماه 1400 با هدف ایجاد سهولت در خرید و فروش ماشین آغاز به کار کرد.
            </p>
          </div>
        </div>
        <div className="hidden med:flex md:w-1/4 p-4 flex justify-start order-1 md:order-2">
            <img src={contactImage} alt="About Us" className="rounded-lg shadow-lg w-90 h-44 object-cover" />
          </div>
        <div className="mt-4 justify-center items-center pl-10">
          <p>
            اگر قصد خرید یا فروش ماشین خود را دارید، یافتن یک پلتفورم مناسب برای ایجاد آگهی به منظور فروش ماشین و جستجو برای خرید ماشین مورد نظر باید جزو اقدامات اولیه شما باشد.
          </p>
          <br />
          <p>
            اتوبازار یک پلتفورم معتبر و راحت است که می‌توانید اطلاعات مورد نظر درباره ماشین‌های فروشی را در آن بررسی کنید و همچنین اگر ماشینی برای فروش دارید، آگهی ایجاد کنید و به راحتی مشتری بیابید!
          </p>
        </div>
      </div>
    </div>
  );
}
