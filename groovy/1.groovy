import geb.Browser

// открываем страницу сайта по ее адресу

Browser.drive {
    // открываем в браузере страницу сайта по ее адресу
    go "http://193.168.49.66:33777/"
    // пишем в консоль сообщение о том, что выполнение команд скрипта завершено
    println "finished"
}