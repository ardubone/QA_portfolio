let age = prompt('Укажите свой возраст'); // вывод окна ввода данных
let education = confirm('Есть ли у вас высшее образование?'); // вывод окна подтверждения
let ageNormalized = Number(age);
if (ageNormalized >= 18 && ageNormalized <= 50) {  // условия
    alert('Всё в порядке');
} else if (education) {
    alert('Добро пожаловать');
} else {
  alert('Ты не пройдёшь!');
}
