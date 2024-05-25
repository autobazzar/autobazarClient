
export const dataToTransfer = [
  //   { props:{placeholder:""},type: "input", name: "123" },
  { type: "h2", title: "محل سکونت" },
  {
    label: "آدرس",
    type: "input",
    name: "address",
    props: {
      placeholder: "خیابان کوچه",
    },
  },
  {
    type: "custom",
    customComponent: "DropDownMenu",
    props: {
      items: ["تهران", "مشهد", "شیراز", "کرج", "اصفهان", "رشت"],
      title: "شهر",
    },
    name: "city",
  },
  { type: "h2", title: "مشخصات ضروری" },
  {
    label: "مشخصات فنی",
    props: {
      placeholder: "تعداد شاسی...",
    },
    type: "input",
    name: "technicalInfo",
  },

  {
    label: "اسم ماشین",
    props: {
      placeholder: "دنا پلاس",
    },
    type: "input",
    name: "carName",
  },
  {
    label: "قیمت",
    type: "input",
    name: "price",
    props: {
      placeholder: "تومان",
      type: "number",
    },
  },
  //   { label: "تاریخ", type: "input", name: "date" },
  {
    label: "سال تولید",
    type: "input",
    name: "year",
    props: {
      placeholder: "1403",
      type: "number",
    },
  },
  {
    label: "سوخت مصرفی",
    type: "custom",
    customComponent: "DropDownMenu",
    props: {
      items: ["دوگانه سوز دستی", "دوگانه سوز شرکتی", "گازوییل", "بنزین"],
      title: "نوع سوخت",
    },
    name: "fuel",
  },
  // {
  //   label: "وضعیت",
  //   type: "input",
  //   name: "status",
  //   props: {
  //     placeholder: "وضعیت فنی",
  //   },
  // },
  {
    type: "custom",
    customComponent: "DropDownMenu",
    props: {
      items: ["سواری و وانت", "ماشین برقی", "اتوبوس ون", "ماشین سنگین"],
      title: "نوع خودرو",
    },
    name: "model",
  },
  {
    label: "موتور",
    type: "custom",
    customComponent: "DropDownMenu",
    props: {
      items: ["تعویض شده", "نیاز به تعمیر", "سالم"],
      title: "موتور",
    },
    name: "motor",
  },
  {
    label: "برند",
    type: "input",
    name: "brand",
    props: {
      placeholder: "سایپا",
    },
  },
  {
    type: "custom",
    customComponent: "DropDownMenu",
    props: {
      items: [
        "سفید",
        "مشکی",
        "نقره‌ای",
        "آبی",
        "قرمز",
        "زرد",
        "سبز",
        "خاکستری",
        "بنفش",
        "قهوه‌ای",
      ],
      title: "رنگ",
    },
    name: "color",
  },
  { type: "h2", title: "مشخصات تکمیلی" },
  {
    label: "مسافت",
    type: "input",
    name: "distance",
    props: {
      placeholder: "کیلومتر",
      type: "number",
    },
  },
  {
    label: "تصادفی",
    type: "input",
    name: "accidental",
    props: {
      type: "checkbox",
    },
    valueConverter(e) {
      return e.target.checked;
    },
  },
  {
    label: "مهلت بیمه بدنه",
    type: "input",
    name: "insurance",
    props: {
      placeholder:'ماه'
}
    // props: {
    //   type: "checkbox",
    // },
    // valueConverter(e) {
    //   return e.target.checked ? 2 : 1;
    // },
  },
  {
    label: "اطلاعات اضافه",
    type: "textarea",
    name: "additionalInfo",
    className: "resize-none",
  },
  { type: "h2", title: "مشخصات تماس" },
  {
    label: "شماره تماس",
    type: "input",
    name: "mobileNum",
    props: {
      placeholder:'0912121212',
      type: "number",
    },
  },
  //  props:{placeholder:""}, { type: "input", name: "picsUrl" },
  //  props:{placeholder:""}, { type: "input", name: "videoUrl" },
];
