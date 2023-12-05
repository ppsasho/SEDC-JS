let rectangleLength = prompt('Enter the length for your rectangle: ');
let rectangleWidth = prompt('Enter the width for your rectangle: ');

rectangleLength = parseFloat(rectangleLength);
rectangleWidth = parseFloat(rectangleWidth);

let rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
console.log('The perimeter for your rectangle is: ',rectanglePerimeter,'.');