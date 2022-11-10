// 函数防抖
const antiShake = (() => {
  let timer = 0
  return function(callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()
export { antiShake }
