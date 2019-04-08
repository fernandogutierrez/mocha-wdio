let _ = require('lodash');
let moment = require('moment');

module.exports = {
    getRndInt: range => { return _.random(range.min ? range.min : 1,range.max ? range.max : 999999) },

    getRndStr: length => { return [...Array(length)].map(i => (~~(Math.random()*36)).toString(36)).join('') },

    getRndNumWithUnit: function (range, strArr) { return `${this.getRndInt(range)} ${_.sample(strArr)}` },

    getCurrDate: strFormat => { return moment().format(strFormat || 'YYYY-MM-DD') },

    getFirstDayOfYear: strFormat => { return moment().startOf('year').format('YYYY-MM-DD') }
};
