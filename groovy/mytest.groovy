import geb.Browser

Browser.drive {
    go "http://193.168.49.66:44444/"
    find("a", text: "Войти").click()
    find("input", placeholder: "MyButton") << "foo"
    assert find("input", placeholder: "MyButton").value() == "foo"
    println "test passed"
}