export const isMobileNumber = function (phone) {
  const myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/
  const flag = myreg.test(phone)
  if (!flag) {
    return false
  }
  return flag
}
