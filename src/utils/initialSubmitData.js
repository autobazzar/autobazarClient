export const dataToTransfer = [
  //   { props:{placeholder:""},type: "input", name: "123" },
  {
    label: "مشخصات فنی",
    type: "input",
    name: "technicalInfo",
  },
  { label: "آدرس", type: "input", name: "address" },
  {
    label: "شماره تماس",
    type: "input",
    name: "mobileNum",
    props: {
      type: "number",
    },
  },
  { label: "شهر", type: "input", name: "city" },
  { label: "مدل ماشین", type: "input", name: "carName" },
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
      type: "number",
    },
  },
  { label: "سوخت مصرفی", type: "input", name: "fuel" },
  { label: "وضعیت", type: "input", name: "status" },
  { label: "مدل", type: "input", name: "model" },
  { label: "موتور", type: "input", name: "motor" },
  { label: "برند", type: "input", name: "brand" },
  { label: "رنگ", type: "input", name: "color" },
  {
    label: "فاصله",
    type: "input",
    name: "distance",
    props: {
      type: "number",
    },
  },
  { label: "تصادفی", type: "input", name: "accidental",
  props: {
    type: "checkbox",
  },
  valueConverter(e) {
    return e.target.checked;
  },
   },
  {
    label: "بیمه بدنه",
    type: "input",
    name: "insurance",
    props: {
      type: "checkbox",
    },
    valueConverter(e) {
      return e.target.checked ? 2 : 1;
    },
  },
  {
    label: "اطلاعات اضافه",
    type: "textarea",
    name: "additionalInfo",
    className: "resize-none",
  },

  //  props:{placeholder:""}, { type: "input", name: "picsUrl" },
  //  props:{placeholder:""}, { type: "input", name: "videoUrl" },
];
