const chalk = require('chalk')

/**
 * Right pad a text.
 * @param  {String} str - The text to pad.
 * @param  {Number} n - The max number of resulting characters.
 * @return {String} - The padded text.
 */
function rightPad(str, n) {
    while (str.length < n) {
        str += ' '
    }
    return str
}

/**
 * Left pad a text.
 * @param {String} str - The text to pad.
 * @param {Number} n - The max number of resulting characters.
 * @return {String} - The padded text.
 */
function leftPad(str, n) {
    while (str.length < n) {
        str = str + ' '
    }
    return str
}

let lastPrint = 0;

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
        const now = new Date()
        const diff = (now - lastPrint) / 1000
        const time = now.toISOString()
        const secs = diff.toPrecision(3).substr(0, 4)
        color = color || chalk
        label = leftPad(label, 5)
        label = color.bold(rightPad(`[${label}] ${time} +${secs}s`, 40))
        lastPrint = now;
        console.log('  ', label, ...params.map(m => color(m)))
    },
}
