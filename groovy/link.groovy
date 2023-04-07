import geb.Browser

// кликаем по ссылке на странице и проверяем, что произошел переход на страницу с правильным названием

Browser.drive {
    // открываем в браузере страницу сайта по ее адресу
    go "https://javajunior.ru/tat/"
    // проверяем, что открытая страница имеет название "UI Test Automation Sandbox - Главная"
    assert title == "UI Test Automation Sandbox - Главная"
    
    // кликаем по ссылке "Ссылки"
    find("a", text: "Ссылки").click()
   // проверяем, что открытая страница имеет название "Ссылки"
    assert title == "Ссылки"
    assert find("a", text: "Третья").size() == 3

    // пишем в консоль сообщение о том, что тест прошел успешно
    println "test passed"
}