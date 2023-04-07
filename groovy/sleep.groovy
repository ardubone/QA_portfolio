import geb.Browser

// Приостанавливаем выполнение скрипта

Browser.drive {
    // открываем в браузере страницу сайта по ее адресу
    go "https://demoqa.com/progress-bar"
    
    // приостанавливаем выполнение скрипта на 7 секунд
    Thread.sleep(7000)
    
    // пишем в консоль сообщение о том, что выполнение команд скрипта завершено
    println "finished"
}