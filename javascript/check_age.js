let age = prompt('Укажите свой возраст'); // вывод окна с запросом
let ageNormalized = Number(age); // присвоения введженным данным значения число
if (ageNormalized >= 18 && ageNormalized <= 50) {   
    alert('Всё в порядке') }    // вывод информации при условии
  if (ageNormalized < 18 || ageNormalized > 50) {
    alert('Ты не пройдёшь!');  // вывод информации при условии
  }
