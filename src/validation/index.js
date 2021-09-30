//validation for required
export const required = (value,field="") => !!value ||   `پر کردن این فیلد ${field} الزامی است`;
//regex for email
export const checkEmail = value => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value) || 'ایمیل وارد شده درست نیست'
//regex for strong password 
export const strongPassword = value => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(value) || 'پسور باید 8 کاراکتر شامل حروف بزرگ و کوچک لاتین ،اعداد و یکی از کاراکتر #?!@$ %^&*- باشد '
//min 8 char
export const min8 = value => value.length > 8 || 'حداقل طول رمز باید 8 کاراکتر باشد'