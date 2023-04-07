const puppeteer = require('puppeteer');

async function testYaRu(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({headless: false, slowMo: 100}); // создание константы browser и присвоение ей результата асинхронного (ожидания) вызова метода launch объекта puppeteer

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage(); // создание константы page и присвоение ей результата асинхронного вызова метода newPage объекта browser

    console.log('Переход на страницу ya.ru');
    await page.goto('https://ya.ru/');    //  команда перехода на страницу 'https://ya.ru/'

    console.log('Ввод текста "Автоматизация тестирования" в поисковую строку');
    const searchField = await page.$('#text'); // создание константы searchField и присвоение ей результат поиска элемента текстового поля
    await searchField.type('Автоматизация тестирования'); // команда ввода в поле текст 'Автоматизация тестирования'
  
    console.log('Клик в кнопку "Найти"');
    const searchButton = await page.$('.button[type=submit]'); // создание константы searchButton и присвоение ей результат поиска элемента кнопки "Найти"
    await searchButton.click(); // команда клика в кнопку поиска
    
    console.log('Закрытие браузера');
    await browser.close(); // команда асинхронного закрытия браузера
}

testYaRu();