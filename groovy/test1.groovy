import geb.Browser
Browser.drive {
    go "https://javajunior.ru/tat/links"
    assert title == "������"
    find("a", text: "������").click()
    assert title == "������"
    Thread.sleep(5000)
    println "finished"
}