export const exceptions = {
  SIMPLE_MSG_WITHOUT_CONFIG: {
    message: 'Config 或者 msg 不存在',
    code: 12001,
  },
}

export class NilException extends Error {
  /**
   * @typedef {Object} NilException
   * @property {string} message - 错误消息
   * @property {number} code - 错误码
   */
  /**
   * @param {NilException} exception
   */
  constructor(exception) {
    super(exception.message + '-' + exception.code)
    this.name = 'NilException'
  }
}
