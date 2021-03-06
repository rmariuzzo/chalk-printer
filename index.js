const util = require('util')
const chalk = require('chalk')

/**
 * Right pad a text.
 * @param  {String} str The text to pad.
 * @param  {Number} n The max number of resulting characters.
 * @return {String} The padded text.
 */
function rightPad(str, n) {
  if (str.length > n) {
    return str.substr(str.length - n)
  }
  while (str.length < n) {
      str += ' '
  }
  return str
}

let lastPrint = 0

module.exports = {

  /**
   * Prints an OK message.
   * @param {...Object} params - Parameters to print.
   */
  ok(...params) {
    this.withLabel('OK', chalk.green, ...params)
  },

  /**
   * Prints a warning message.
   * @param {...Object} params Parameters to print.
   */
  warn(...params) {
    this.withLabel('WARN', chalk.yellow, ...params)
  },

  /**
   * Prints an error message.
   * @param {...Object} params Parameters to print.
   */
  error(...params) {
    this.withLabel('ERROR', chalk.red, ...params)
  },

  /**
   * Prints a trace message.
   * @param {...Object} params Parameters to print.
   */
  trace(...params) {
    this.withLabel('TRACE', chalk.dim, ...params)
  },

  /**
   * Prints a log message.
   * @param {...Object} params Parameters to print.
   */
  log(...params) {
    this.withLabel('LOG', chalk.white, ...params)
  },

  /**
   * Prints a colored message with a label.
   * @param {...Object} params Parameters to print.
   */
  withLabel(label, color, ...params) {
    // Format the label.
    color = color || chalk
    label = color.bold(rightPad(`[${label}]`, 7))

    // Format the timestamp.
    const now = new Date()
    const diff = (now - lastPrint) / 1000
    const date = now.toISOString()
    const secs = diff.toPrecision(3).substr(0, 4)
    const timestamp =  color(rightPad(`${date} +${secs}s`, 31))

    // Format parameters.
    params = color(util.format.apply(null, params))

    // Print messages.
    console.log('  ', label, `${timestamp} ${params}` )
    lastPrint = now
  },
}
