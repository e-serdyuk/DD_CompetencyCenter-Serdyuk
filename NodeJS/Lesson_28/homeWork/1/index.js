/* ###Задача 1 
Создайте EventEmitter, который каждую секунду будет генерировать событие 'tick'. Создайте функцию-обработчик события 'tick', которая будет выводить в консоль количество секунд, прошедшее со времени генерации первого события 'Tick'.  */
const EventEmmiter = require('events');
const emiter = new EventEmmiter();
let count=0;

emiter.on('tick', function () {
count++;
console.log('First tick was generated ' + count + ' seconds ago');
});

setInterval(()=>{emiter.emit('tick')},1000);





