/**
 * 校验规则类
 */

/**
 * 邮箱
 * @param {*} email
 */
const isEmail = (email) => {
  return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    email
  )
}

/**
 * 手机号码
 * @param {*} mobile
 */
const isMobile = (mobile) => {
  return /^1[0-9]{10}$/.test(mobile)
}

/**
 * 电话号码
 * @param {*} phone
 */
const isPhone = (phone) => {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone)
}

/**
 * URL地址
 * @param {*} url
 */
const isURL = (url) => {
  return /^https?:\/\/.*/.test(url)
}

// 校验手机号或固定号码
const validatePhTelNumber = (str) => {
  const reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/
  return reg.test(str)
}

export { isEmail, isMobile, isPhone, isURL, validatePhTelNumber }
