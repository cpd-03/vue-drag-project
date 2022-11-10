/**
 * information: 信息提示类
 */

import { notification } from 'ant-design-vue'
/**
 * 消息通知:
 *  type: 类型
 *  title:  标题
 *  content: 文本内容
 */
const inform = (type, content, title = '提示') => {
  notification[type]({
    message: title,
    description: content,
    duration: 4
  })
}

/**
 * timeFix: 问候语
 */
const timeFix = () => {
  const hour = new Date().getHours()
  return hour < 9
    ? '早上好'
    : hour <= 11
      ? '上午好'
      : hour <= 13
        ? '中午好'
        : hour < 20
          ? '下午好'
          : '晚上好'
}

/**
 * welcome: 欢迎语
 */
const welcome = () => {
  const arr = [
    '休息一会儿吧',
    '准备吃什么呢?',
    '要不要打一把 王者荣耀',
    '我猜你可能累了'
  ]
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

export { inform, timeFix, welcome }
