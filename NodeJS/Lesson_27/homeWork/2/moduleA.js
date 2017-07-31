/*Дополните код модуля A таким образом, чтобы в результате запуска модуля B в консоль было выведено */

function Counter(count) {
    this.count = count;
};

module.exports = function (arg) {
    return new Counter(arg)
};