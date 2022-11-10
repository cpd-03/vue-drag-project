/**
 * dateTime: 日期时间类
 */
import moment from 'moment'
import { inform } from './information'

/**
 * getAgeByBrithday: 根据生日换算年龄
 *  @param {*} birthday: 出生日期
 *  @returns 年龄
 */
const getAgeByBrithday = (birthday) => {
  let age = -1
  const today = new Date()
  const todayYear = today.getFullYear()
  const todayMonth = today.getMonth() + 1
  const todayDay = today.getDate()
  const birthdayYear = birthday.getFullYear()
  const birthdayMonth = birthday.getMonth()
  const birthdayDay = birthday.getDate()
  if (todayYear - birthdayYear < 0) {
    inform('error', '出生日期选择错误!')
  } else {
    if (todayMonth * 1 - birthdayMonth * 1 < 0) {
      age = todayYear * 1 - birthdayYear * 1 - 1
    } else {
      if (todayDay - birthdayDay >= 0) {
        age = todayYear * 1 - birthdayYear * 1
      } else {
        age = todayYear * 1 - birthdayYear * 1 - 1
      }
    }
  }
  if (age < 0) {
    age = 0
  }
  return age * 1
}

/**
 * currentMonthChange: 当前年月 加或减 一个月
 *  @param {*} month: 月份
 *  @param {*} year: 年份
 *  @param {*} type: 加减
 *  @returns 返回处理好的时间
 */
const currentMonthChange = (month, year, type) => {
  let time
  if (type === 2) {
    time =
      (month === 12 ? year + 1 : year) + '-' + (month === 12 ? 1 : month + 1)
    return moment(time).format('YYYY-MM')
  } else {
    time =
      (month === 1 ? year - 1 : year) + '-' + (month === 1 ? 12 : month - 1)
    return moment(time).format('YYYY-MM')
  }
}

export { getAgeByBrithday, currentMonthChange }
