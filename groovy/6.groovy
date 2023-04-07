import geb.Browser

// ��������� ��������� ���� � ���������, ��� ������� � ��������� ����

Browser.drive {
    // ��������� � �������� �������� ����� �� �� ������
    go "http://uitestingplayground.com/textinput"
    // ������ �������� � ���� "foo"
    find("input", placeholder: "MyButton") << "foo"
    // ���������, ��� � ���� ������� �������� "foo"
    assert find("input", placeholder: "MyButton").value() == "foo"
    // ����� � ������� ��������� � ���, ��� ���� ������ �������
    println "test passed"
}