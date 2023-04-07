import geb.Browser
Browser.drive {
    go "https://javajunior.ru/tat/links"
    assert title == "Ссылки"
    find("a", text: "Вторая").click()
    assert title == "Вторая"
    Thread.sleep(5000)
    println "finished"
}