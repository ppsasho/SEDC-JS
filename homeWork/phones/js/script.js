let phone = 119.95;
let tax = 0.05;
let taxedPhone = Math.round(tax * phone) + phone;
result = taxedPhone * 30;
console.log('The price of 30 phones is: ',result,'(including tax)');