var sizeOf = require('image-size');

var dimension = sizeOf('C:\\Users\\zeche\\Pictures\\cars.jpg');
console.log(dimension.width, dimension.height);