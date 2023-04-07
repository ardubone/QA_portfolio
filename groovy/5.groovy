import geb.Browser

// кликаем по кнопке на странице и проверяем реакцию веб-приложения на это действие

Browser.drive {
    // открываем в браузере страницу сайта по ее адресу
    go "https://demoqa.com/buttons"
    // кликаем по кнопке "Click Me"
    find("button", text: "Right Click Me").click()
    // проверяем, что на странице появилось сообщение "You have done a dynamic click"
    assert find("p", text: "You have done a dynamic click").size() == 1
    // пишем в консоль сообщение о том, что тест прошел успешно
    println "test passed"
}
