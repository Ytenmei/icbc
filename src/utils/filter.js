const DateFilters = (timestamp, formats) => {
  if (timestamp) {
    let zero = function (time) {
      let arr = time < 10 ? '0' + time : time
      return arr
    }
    let myDate = timestamp ? new Date(timestamp) : new Date()
    let year = myDate.getFullYear()
    let month = zero(myDate.getMonth() + 1)
    let day = zero(myDate.getDate())
    let hour = zero(myDate.getHours())
    let minite = zero(myDate.getMinutes())
    let second = zero(myDate.getSeconds())
    let val = formats || 'Y-m-d H:i:s'
    return val.replace(/Y|m|d|H|i|s/ig, function (matches) {
      return ({
        Y: year,
        m: month,
        d: day,
        H: hour,
        i: minite,
        s: second
      })[matches]
    })
  }
}
export default DateFilters
