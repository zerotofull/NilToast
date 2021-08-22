import { exceptions, NilException } from './exception'
import { closeMask, showMask } from './utils'

function createAlertDialog(title, msg, confirmText, confirmStyle) {
  if (document.body.querySelectorAll('.nil-toast-dialog').length === 0) {
    const div = document.createElement('div')
    div.classList.add('nil-toast-dialog')

    div.innerHTML = `
  <div class="nil-toast-dialog__inner animated">
    <div class="nil-toast-dialog__inner-title">${title}</div>
    <div class="nil-toast-dialog__inner-msg">${msg}</div>
    <div class="nil-toast-dialog__inner-options">
      <div class="nil-toast-dialog__inner-confirm" style="${confirmStyle}">${confirmText}</div>
    </div>
  </div>
  `
    return div
  } else {
    return null
  }
}

function createConfirmDialog(
  title,
  msg,
  confirmText,
  confirmStyle,
  cancelText,
  cancelStyle
) {
  if (document.body.querySelectorAll('.nil-toast-dialog').length === 0) {
    const div = document.createElement('div')
    div.classList.add('nil-toast-dialog')

    div.innerHTML = `
  <div class="nil-toast-dialog__inner animated">
    <div class="nil-toast-dialog__inner-title">${title}</div>
    <div class="nil-toast-dialog__inner-msg">${msg}</div>
    <div class="nil-toast-dialog__inner-options">
      <div class="nil-toast-dialog__inner-cancel" style="${cancelStyle}">${cancelText}</div>
      <div class="nil-toast-dialog__inner-confirm" style="${confirmStyle}">${confirmText}</div>
    </div>
  </div>
  `
    return div
  } else {
    return null
  }
}

function done() {
  if (document.body.querySelectorAll('.nil-toast-dialog').length > 0) {
    const div = document.body.querySelector('.nil-toast-dialog')
    const innerDiv = div.querySelector('.nil-toast-dialog__inner')
    innerDiv.classList.add('animate__zoomOut')
    closeMask()
    setTimeout(function () {
      div.remove()
    }, 500)
  }
}

export default {
  /**
   * @typedef {Object} AlertConfig
   * @property {string} title
   * @property {string} msg
   * @property {string} confirmText
   * @property {string} confirmStyle
   * @property {Function} confirmClick
   */
  /**
   *
   * @param {AlertConfig} config
   */

  alert(config) {
    const _config = {
      title: '提示',
      msg: '这是一条消息',
      confirmText: '确认',
      confirmStyle: '',
      confirmClick: null,
    }
    if (!config) {
      throw new NilException(exceptions.WITHOUT_CONFIG)
    }

    if (typeof config === 'string') {
      _config.msg = config || ''
    } else if (typeof config === 'object') {
      _config.title = config.title || '提示'
      _config.msg = config.msg || '这是一条消息'
      _config.confirmText = config.confirmText || '确认'
      _config.confirmStyle = config.confirmStyle || ''
      _config.confirmClick = config.confirmClick || null
    }
    const dialogDiv = createAlertDialog(
      _config.title,
      _config.msg,
      _config.confirmText,
      _config.confirmStyle
    )
    if (!dialogDiv) {
      return
    }
    showMask()
    document.body.appendChild(dialogDiv)

    dialogDiv.querySelector('.nil-toast-dialog__inner-confirm').onclick = (
      e
    ) => {
      if (_config.confirmClick != null) {
        _config.confirmClick(e, done)
      } else {
        done()
      }
    }

    const innerDiv = dialogDiv.querySelector('.nil-toast-dialog__inner')

    innerDiv.classList.add('animate__zoomIn')
    setTimeout(function () {
      innerDiv.classList.remove('animate__zoomIn')
    }, 500)
  },

  confirm(config) {

    const _config = {
      title: '提示',
      msg: '这是一条消息',
      confirmText: '确认',
      confirmStyle: '',
      confirmClick: null,
      cancelText: '取消',
      cancelStyle: '',
      cancelClick: null,
    }
    if (!config) {
      throw new NilException(exceptions.WITHOUT_CONFIG)
    }

    if (typeof config === 'string') {
      _config.msg = config || ''
    } else if (typeof config === 'object') {
      _config.title = config.title || '提示'
      _config.msg = config.msg || '这是一条消息'
      _config.confirmText = config.confirmText || '确认'
      _config.confirmStyle = config.confirmStyle || ''
      _config.confirmClick = config.confirmClick || null
      _config.cancelText = config.cancelText || '取消'
      _config.cancelStyle = config.cancelStyle || ''
      _config.cancelClick = config.cancelClick || null
    }
    const dialogDiv = createConfirmDialog(
      _config.title,
      _config.msg,
      _config.confirmText,
      _config.confirmStyle,
      _config.cancelText,
      _config.cancelStyle
    )
    if (!dialogDiv) {
      return
    }
    showMask()
    document.body.appendChild(dialogDiv)

    dialogDiv.querySelector('.nil-toast-dialog__inner-confirm').onclick = (
      e
    ) => {
      if (_config.confirmClick != null) {
        _config.confirmClick(e, done)
      } else {
        done()
      }
    }

    dialogDiv.querySelector('.nil-toast-dialog__inner-cancel').onclick = (
      e
    ) => {
      if (_config.cancelClick != null) {
        _config.cancelClick(e, done)
      } else {
        done()
      }
    }

    const innerDiv = dialogDiv.querySelector('.nil-toast-dialog__inner')

    innerDiv.classList.add('animate__zoomIn')
    setTimeout(function () {
      innerDiv.classList.remove('animate__zoomIn')
    }, 500)



  },
}
