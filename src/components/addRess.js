export const isMobileNumber = function (phone) {
  const myreg = /^1\d{10}$/
  const flag = myreg.test(phone)
  console.log(flag)
  if (!flag) {
    return false
  }
  return flag
}
