var counter1 = require('./moduleA')(1);
var counter2 = require('./moduleA')(2);

console.log(counter1.count);
console.log(counter2.count);