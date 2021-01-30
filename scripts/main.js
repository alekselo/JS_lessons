let num = 266219;

num = num.toString().split('');

console.log(num);

let result = num.reduce(function(sum, current) {
  return sum * current;
}, );

console.log(result);

result = result ** 3;

console.log(result);

console.log(String(result).slice(0  ,2));


