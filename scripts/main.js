let arr = []; 
let n = 100;

for (let i = 0; i<=6; i++ ){
  arr.push(prompt("Введите число"));
};


arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
    
  }
});

console.log(arr);




check:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue check; 
  }
  console.log(i + " делится на " + i + " и 1");  
}