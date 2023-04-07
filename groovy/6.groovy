import geb.Browser

// заполняем текстовое поле и проверяем, что введено в текстовом поле

Browser.drive {
    // открываем в браузере страницу сайта по ее адресу
    go "http://uitestingplayground.com/textinput"
    // вводим значение в поле "foo"
    find("input", placeholder: "MyButton") << "foo"
    // проверяем, что в поле введено значение "foo"
    assert find("input", placeholder: "MyButton").value() == "foo"
    // пишем в консоль сообщение о том, что тест прошел успешно
    println "test passed"
}