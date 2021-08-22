import { closeMask, showMask } from './utils'

function createLoading(msg) {
  if (document.body.querySelectorAll('.nil-toast-loading').length === 0) {
    const div = document.createElement('div')
    div.classList.add('nil-toast-loading')
    div.innerHTML = `<div class="nil-toast-loading__inner animated">
  <svg class="animated animate__changeright" viewBox="0 0 1024 1024" version="1.1"
   xmlns="http://www.w3.org/2000/svg" p-id="3173" width="32" height="32"><path d="M431.633655 87.958069a80.366345 80.366345 0 1 0 160.697379 0 80.366345 80.366345 0 1 0-160.732689 0h0.03531zM119.966897 220.689655a78.035862 78.035862 0 1 0 156.071724 0 78.035862 78.035862 0 1 0-156.071724 0zM1.182897 514.153931a71.044414 71.044414 0 0 0 142.088827 0 71.044414 71.044414 0 0 0-142.088827 0z m125.775448 320.211862a61.722483 61.722483 0 0 0 123.444965 0 61.722483 61.722483 0 0 0-123.444965 0z m333.806345 133.755586a53.707034 53.707034 0 0 0 107.414069 0 53.707034 53.707034 0 0 0-107.414069 0z m345.829517-123.233103a38.488276 38.488276 0 1 0 76.976552 0 38.488276 38.488276 0 1 0-76.976552 0z m160.114759-332.199724a27.277241 27.277241 0 1 0 54.554482 0 27.277241 27.277241 0 1 0-54.554482 0z m-81.937656-286.102069a19.473655 19.473655 0 0 0 38.964966 0 19.473655 19.473655 0 0 0-38.964966 0z" p-id="3174" fill="#ffffff"></path></svg>
   <div class="nil-toast-loading__inner-msg">${msg}</div>
   </div>`
    return div
  } else {
    return null
  }
}

export default {
  /**
   * @typedef {Object} Config - 显示loading
   * @property {string} msg - 显示的文字内容
   * @property {Boolean} mask - 是否显示遮罩层
   */
  /**
   *
   * @param {Config} config
   */
  show(config) {
    const _config = {
      msg: '加载中',
      mask: true,
    }
    if (!config) {
      _config.msg = '加载中'
      _config.mask = true
    }

    if (typeof config === 'string') {
      _config.msg = config || '加载中'
    } else if (typeof config === 'object') {
      _config.msg = config.msg || '加载中'
      _config.mask = config.mask || true
    }

    const loadingDiv = createLoading(_config.msg)
    if (!loadingDiv) {
      return
    }
    if (_config.mask) showMask()
    document.body.appendChild(loadingDiv)
    const msgInnerDiv = loadingDiv.querySelector('.nil-toast-loading__inner')

    msgInnerDiv.classList.add('animate__bounceIn')
    setTimeout(function () {
      msgInnerDiv.classList.remove('animate__bounceIn')
    }, 500)
  },

  close() {
    if (document.body.querySelectorAll('.nil-toast-loading').length > 0) {
      const loadingDiv = document.body.querySelector('.nil-toast-loading')
      const msgInnerDiv = loadingDiv.querySelector('.nil-toast-loading__inner')
      msgInnerDiv.classList.add('animate__bounceOut')
      closeMask()
      setTimeout(function () {
        loadingDiv.remove()
      }, 500)
    }

  },
}
