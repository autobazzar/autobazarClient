const langs={
    name:'نام کاربری',
    comment:'دیدگاه',
    code:'کد کاربری',
    email:'ایمیل',
    'least-review':'کمترین امتیاز',
    creator:'شماره سازنده'
}

export function translateTitle(title) {
  return langs[title] || " ";
}