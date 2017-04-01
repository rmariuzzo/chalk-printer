const chalk = require('chalk')

/**
 * Right pad a text.
 * @param  {String} str - The text to pad.
 * @param  {integer} n - The max number of resulting characters.
 * @return {String} - The padded text.
 */
function rightPad(str, n) {
    while (str.length < n) {
        str += ' '
    }
    return str
}

module.exports = {

    /**
     * Prints an OK message.
     * @param {...Object} params - Parameters to print.
     */
    ok(...params) {
        this.withLabel('OK', chalk.green, ...params)
    },

    /**
     * Prints an warning message.
     * @param {...Object} params - Parameters to print.
     */
    warn(...params) {
        this.withLabel('WARN', chalk.yellow, ...params)
    },

    /**
     * Prints an error message.
     * @param {...Object} params - Parameters to print.
     */
    error(...params) {
        this.withLabel('ERROR', chalk.red, ...params)
    },

    /**
     * Prints an trace message.
     * @param {...Object} params - Parameters to print.
     */
    trace(...params) {
        this.withLabel('TRACE', chalk.dim, ...params)
    },

    /**
     * Prints a log message.
     * @param {...Object} params - Parameters to print.
     */
    log(...params) {
        this.withLabel('LOG', chalk.white, ...params)
    },

    /**
     * Prints a colored message with a label.
     * @param {...Object} params - Parameters to print.
     */
    withLabel(label, color, ...params) {
        color = color || chalk
        label = color.bold(rightPad(`[${label}]`, 7))
        console.log('  ', label, ...params.map(m => color(m)))
    },
}
