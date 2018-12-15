const cars = { BMW: 3, Tesla: 2, Toyota:1 };

//ES2015
//Instead of...
const vals = Object.keys(cars).map(key => cars[key]);
console.log(vals);

//ES2017 and onwards
//use ...
// blah blah
const values = Object.values(cars);
console.log(values);
