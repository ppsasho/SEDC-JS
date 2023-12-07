let year = prompt("Enter the year you were born in:");
year = parseInt(year);
year = (year - 4) % 12;

console.log(`Your zodiac number is ${year}.`);

let zodiac;
switch(year) {

case 11:
    zodiac = 'Pig';
    break;

case 10:
    zodiac = 'Dog';
    break;

case 9:
    zodiac = 'Rooster';
    break;

case 8:
    zodiac = 'Monkey';
    break;

case 7:
    zodiac = 'Goat';
    break;

case 6:
    zodiac = 'Horse';
    break;

case 5:
    zodiac = 'Snake';
    break;

case 4:
    zodiac = 'Dragon';
    break;

case 3:
    zodiac = 'Rabbit';
    break;

case 2:
    zodiac = 'Tiger';
    break;

case 1:
    zodiac = 'Ox';
    break;

case 0:
    zodiac = 'Rat';
    break;
    
    default:
        console.log("No year was entered.");
}
console.log(`Your Chinese Zodiac is ${zodiac}!`);