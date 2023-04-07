let power = Number(prompt('Укажи степень')); // вывод окна ввода даных
let result = 1;
let i = 1;
while (i <= power && i <= 8  ) { // запуск цикла, пока степень не превышает 8 и не равна степени
  i = i + 1;
  result = result * 2;
};
alert(result);