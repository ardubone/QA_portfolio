let power = Number(prompt('Укажи степень'));
let result = 1;

for (let i = 1; i <= power; i++) {
 if (i > power) { 
   continue;
}
  result = result * 2;
}
alert (result);