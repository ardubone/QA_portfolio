const puppeteer = require('puppeteer'); 

async function testTaxiResult(){
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
    });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto('https://qa-routes.praktikum-services.ru/');

    await page.screenshot({path: 'testTaxiResult.png'});

    // самого теста всё ещё нет

    console.log('Закрытие браузера');
    await browser.close();
}

testTaxiResult();