import geb.Browser

// ������� �� ������ �� �������� � ���������, ��� ��������� ������� �� �������� � ���������� ���������

Browser.drive {
    // ��������� � �������� �������� ����� �� �� ������
    go "https://javajunior.ru/tat/"
    // ���������, ��� �������� �������� ����� �������� "UI Test Automation Sandbox - �������"
    assert title == "UI Test Automation Sandbox - �������"
    
    // ������� �� ������ "������"
    find("a", text: "������").click()
   // ���������, ��� �������� �������� ����� �������� "������"
    assert title == "������"
    assert find("a", text: "������").size() == 3

    // ����� � ������� ��������� � ���, ��� ���� ������ �������
    println "test passed"
}