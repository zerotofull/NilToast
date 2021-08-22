import { exceptions, NilException } from './exception'

/**
 * 创建 msg div
 */
function createMsg(msg, postionX, postionY) {
  const div = document.createElement('div')
  div.classList.add('nil-toast-msg')
  div.setAttribute('style',`top:${postionY}%;left:${postionX}%;`)
  div.innerHTML = `<div class="nil-toast-msg__inner animated">${msg}</div>`
  return div
}
/**
 * @typedef {Object} Config - 简单toast配置
 * @property {string} msg - 显示的文字内容
 * @prop {number} [time=2000] - 显示的时长
 * @prop {number} [postionX=50] - 显示的位置(百分比): 垂直
 * @prop {number} [postionY=50] - 显示的位置(百分比): 水平
 */
/**
 *
 * @param {Config} config
 */
export default function (config) {
  const _config = {
    msg: '',
    time: 2000,
    postionX: 50,
    postionY: 50,
  }
  if (!config) {
    throw new NilException(exceptions.WITHOUT_CONFIG)
  }

  if (typeof config === 'string') {
    _config.msg = config || ''
  } else if (typeof config === 'object') {
    _config.msg = config.msg || ''
    _config.time = config.time || 2000
    _config.postionX = config.postionX || 50
    _config.postionY = config.postionY || 50
  }

  // 创建 msg div
  const msgDiv = createMsg(_config.msg, _config.postionX, _config.postionY)
  document.body.appendChild(msgDiv)
  const msgInnerDiv = msgDiv.querySelector('.nil-toast-msg__inner')

  msgInnerDiv.classList.add('animate__bounceIn')
  setTimeout(function () {
    msgInnerDiv.classList.remove('animate__bounceIn')
  }, 500)

  setTimeout(function () {
    msgInnerDiv.classList.add('animate__bounceOut')
    setTimeout(function () {
      msgDiv.remove()
    }, 500)
  }, _config.time)

  console.log('[ config ] >', _config)
}
