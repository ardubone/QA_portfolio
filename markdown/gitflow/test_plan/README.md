

# План тестирования
# сайт

<picture>
 <img alt="YOUR-ALT-TEXT" src="path_to_img">
</picture>

## Основная информация

| Продукт       |            |   
| ------------- |:-------------:| 
| Автор      | Арсентьев Константин | 
|Дата |03.04.23 |  
|Версия |1.1 |  
|Статус |В работе |  
       



 Содержание: 
### 1. Введение
#### 1.1. Основная информация
#### 1.2. Цель
### 2. Цели и задачи
### 3. Область тестирования проекта
### 4. Cтратегия тестирования
#### 4.1. Подход к тестированию
#### 4.2. Уровни тестирования
#### 4.3. Цикл тестирования
#### 4.4. Группы тестов используемые на проекте
#### 4.5. Отчеты об ошибках
### 5. Ресурсы 
#### 5.1. Инструменты 
#### 5.2. Список браузеров 
#### 5.3. Список устройств
#### 5.4. Список разрешений
### 6. Риски процесса тестирования
	

### 1. Введение
	
#### 1.1. Основная информация
Документ представляет собой описание методов и подходов, которые используются отделом QA для проведения тестирования сайта. Он также содержит общие условия, касающиеся уровня качества выпускаемого программного продукта, которые учитываются тестировщиками.
План тестирования используется как тестировщиками, так и менеджерами и разработчиками.
#### 1.2. Цель
Тест-план проекта преследует следующие цели:
- Анализирует существующую информацию о проекте и декомпозирует программные компоненты, подлежащие тестированию
- Описывает стратегии тестирования, которые будут использоваться.
- Определяет критерии готовности взятия в работу продукта
- Определяет критерии готовности продукта.
- Описывает зоны ответственности участников команды

### 2. Цели и задачи
Цель: Убедиться, что разработанный продукт удовлетворяет потребностям бизнеса
 - Задачи: 
    - Внедрить 
        - PR-Review
        - Re-Testing
        - BUG-Tracking
        - BUG-Analysis
        - BUG-Management 
        - Status Dashboard

| Зоны ответственности | Ответственный |
| :---:              |     :---:      |
| PR-Review          | Senior Dev     |
| Re-Testing         | отдел QA       |
| BUG-Tracking       | Senior Dev, QA Manager, PM |
| BUG-Analysis       | Senior Dev, QA Manager, Team-/Tech-lead |
| BUG-Management     | Senior Dev, QA Manager, PM |
| Status Dashboard   | QA Engineer, PO, PM |


### 3.Область тестирования сайта

Объект тестирования - web – приложение [TODO] находящееся по адресу
http://www.[TODO].ru

Компоненты делятся на следующие группы:
|Сокращение|Группа           |
|:---:     |:---:            |
|[**DB**]  |**D**ata-**B**ase|
|[**BE**]  |**B**ack-**E**nd |
|[**FE**]  |**F**ront-**E**nd|

Компоненты приложения:

1. Главная страница:
    1. [TODO]
    2. [TODO]
    3. [TODO]

2. Личный кабинет пользователя:
    1. функция Регистрация [FE/BE/DB] 
    2. функция Авторизация и аутентификация [FE/BE/DB]
    3. функция Изменение данных учетной записи [FE/BE/DB]

3. [TODO]
    1. [TODO]

### 4. Стратегия тестирования

#### 4.1. Подход к тестированию

1. ###### Unit Tests
- Объекты тестирования: кодовая база
- Уровни тестирования: Unit Tests [UT], Component-Integration Tests [CIT]
- Вид тестирования: White Box, Functional, Change-Related
- Техники тестирования: White-Box
- Степень автоматизации: Full auto
- Анализ: статический - Lint, Code Review

2. ###### [DB] – Data Base
- Объекты тестирования: База данных
- Уровни тестирования: System Integration Tests [SIT]
- Вид тестирования: White Box, Structural Database Testing, Functional, Non-Functional, Change-Related
- Техники тестирования: White-Box, Grey Box
- Степень автоматизации: Manual/semi-automated
- Анализ: Динамический

3. ###### [BE] – Back-end
- Объекты тестирования:  API
- Уровни тестирования: Component-Integration Tests [CIT], System Integration Tests [SIT]
- Вид тестирования: White Box, Functional, Change-Related, Non-Functional
- Техники тестирования: Grey Box
- Степень автоматизации: Hybrid/semi-automated (Swagger, Postman)
- Анализ: Динамический

4. ###### [FE] – Front-end
- Объекты тестирования: GUI
- Уровни тестирования: Component Tests [CT], System Tests [ST], E2E-testing
- Вид тестирования: Functional, Non-Functional, Change-Related
- Техники тестирования: Black-box, Experience-Based
- Степень автоматизации: Manual/semi-automated
- Анализ: Динамический

#### 4.2. Уровни тестирования	

##### 1. Компонентное Тестирование
|Цели|Тип|Базис тестирования|Объекты тестирования|Зоны ответственности|Степень автоматизации|
|:---|:---:|:---:|:---:|:---:|:---:|
|Снижение риска |Функциональные|Детальный дизайн|Компоненты, модули|Выполняется разработчиком, который написал код|Full-Auto|
|Проверку, соответствует ли функциональное и нефункциональное поведение компонентов установленным проектным требованиям|Нефункциональные|Код|Код и структуры данных|
|Укрепление уверенности в качестве компонента|Структурные свойства|Модель данных|Классы|
|Обнаружение дефектов в компоненте||Спецификации компонента|Модули БД|
|Предотвращение пропуска дефектов на более высокие уровни тестирования||||

##### 2.Интеграционное тестирование
|Цели|Тип|Базис тестирования|Объекты тестирования|Зоны ответственности|Степень автоматизации|
|:---|:---:|:---:|:---:|:---:|:---:|
|Снижение риска|Функциональные|Дизайн продукта и системы|Подсистемы|Компонентное интеграционное тестирование является обязанностью разработчиков|FullAuto|
|Проверка, соответствует ли функциональное и нефункциональное поведение интерфейсов установленным проектным требованиям|Нефункциональные|Диаграммы последовательности|Базы данных|Системное интеграционного тестирование, как правило, обязанность тестировщиков|Semi-auto|
|Повышение уверенности в качестве интерфейсов|Структурные свойства|Спецификации интерфейса и протокола связи|Инфраструктура|
|Обнаружение дефектов|Компонентное интеграционное тестирование фокусируется на взаимодействиях и интерфейсах между интегрированными компонентами|Сценарии использования системы|Интерфейсы|
|Предотвращение пропуска дефектов на более высокие уровни тестирования|Системное интеграционное тестирование фокусируется на взаимодействиях и интерфейсах между системами, пакетами и микросервисами|Архитектура на уровне компонентов или системы|Программные интерфейсы приложения (API)|
|||Рабочие процессы|Микросервисы|
|||Спецификации, описывающие внешние интерфейсы||


##### 3.Системное тестирование

|Цели|Тип|Базис тестирования|Объекты тестирования|Зоны ответственности|Степень автоматизации|
|:---|:---:|:---:|:---:|:---:|:---:|
|Снижение риска|Функциональные|Системные требования и требования к продукту|Приложения|Независимая группа тестировщиков|Semi-auto|
|Проверка, соответствует ли функциональное и нефункциональное поведение системы установленным проектным требованиям, дизайну и спецификациям|Нефункциональные|Отчеты об анализе рисков|Аппаратные/программные системы||Manual|
|Проверка, что система реализована полностью и будет работать, как ожидалось|Структурные свойства|Сценарии использования|Тестируемая система|
|Повышение уверенности в качестве системы в целом||Бизнес-потребности и пользовательские истории|Операционные системы|
|Обнаружение дефектов||Модели поведения системы|Конфигурация системы и конфигурация данных|
|Предотвращение попадания дефектов на более высокие уровни тестирования или в среду эксплуатации||Диаграммы состояний||
|||Системные и пользовательские руководства||

Ошибки в спецификациях могут привести к отсутствию понимания или разногласиям насчет ожидаемого поведения системы. Такие ситуации могут вызывать ложно позитивные или ложно негативные результаты тестирования, которые отнимают время и снижают эффективность обнаружения дефектов. Раннее вовлечение тестировщиков в разработку пользовательских историй или в активности статического тестирования, таких как рецензирование, помогает снизить частоту возникновения таких ситуаций.

##### 4. Приемочное тестирование

|Цели|Тип|Базис тестирования|Объекты тестирования|Зоны ответственности|Степень автоматизации|
|:---|:---:|:---:|:---:|:---:|:---:|
|Продемонстрировать уверенность в качестве системы в целом|Пользовательское приемочное тестирование|Бизнес-процессы|Тестируемая система|Клиенты|Manual|
|Проверить, что система завершена и будет работать как ожидалось|Эксплуатационное приемочное тестирование|Пользовательские и бизнес-требования|Конфигурация системы и конфигурационные данные|Бизнес-пользователи||
|Проверить, соответствует ли функциональное и нефункциональное поведение системы установленным проектным требованиям||Сценарии использования системы|Бизнес-процессы для полностью интегрированной системы|Владелец продукта||
|||Системные требования|Восстановление системы и «горячего узла»|Операторы системы||
|||Системная или пользовательская документация|Операционные и эксплуатационные процессы|Другие заинтересованные стороны||
|||Процедуры восстановления после полного отказа системы|Формы|||
|||Процедуры резервного копирования и восстановления|Отчеты|||

#### 4.3. Цикл тестирования

##### 4.3.1. Планирование тестирования

Планирование тестирования - непрерывная деятельность, которая выполняется в течение всего жизненного цикла продукта

Цели: 
- Определить объем, цели и риски тестирования
- Определить общий подход к тестированию
- Координировать работы по тестированию и совмещать их с другими работами в рамках жизненного цикла программного обеспечения
- Принять решений о том, что тестировать, кто будет выполнять тестирование и как должны выполняться работы по тестированию
- Планирование анализа, проектирования, реализации и выполнения тестов, оценки результатов тестирования с указанием сроков (при последовательной разработке) либо итераций (при итеративной разработке)
- Выбрать метрики для мониторинга и контроля тестирования 
- Определить структуры и уровень детализации тестовой документации

**Входные критерии**: Доступные тестируемые требования, пользовательские истории и/или модели. Покрытие требований продукта и пользовательских историй 80%.
**Критерии выхода**: План тестирования содержащий информацию о базисе тестирования, с которым другие рабочие продукты тестирования будут связаны через информацию о трассируемости, а также критерии выхода, которые будут использоваться во время мониторинга и контроля тестирования. 

##### 4.3.2. Мониторинг и контроль тестирования
Мониторинг тестирования -  непрерывное сравнение фактического хода работы с планом тестирования, используя любые метрики мониторинга тестирования, определённые в плане тестирования.
Контроль тестирования - меры необходимые для достижения целей плана тестирования.

Метрики собираются во время и по завершении тестирования, чтобы оценить:
- Прогресс относительно запланированного графика
- Текущее качество объекта тестирования
- Адекватность подхода к тестированию
- Эффективность активностей тестирования по достижению целей тестирования

Метрики тестирования включают:
- Процент выполненных работ по подготовке тестовых сценариев
- Процент выполненных работ по подготовке тестовой среды
- Информацию о дефектах: плотность дефектов, количество обнаруженных и исправленных дефектов, частоту отказов и результаты подтверждающих тестов
- Покрытие тестами требований, пользовательских историй, критериев приемки, рисков или кода
- Информацию о выполнении задач, распределении и использовании ресурсов, трудозатратах

Контроль тестирования:
- Повторная приоритизация тестов при реализации риска
- Изменение графика тестирования из-за доступности или недоступности тестовой среды или других ресурсов
- Повторная проверка выполнения критериев входа или выхода для элемента тестирования, который дорабатывался

Отчет о ходе тестирования включает:
- Статус активностей тестирования и прогресс по сравнению с планом тестирования
- Факторы, препятствующие прогрессу
- Тестирование, запланированное на следующий отчетный период
- Качество объекта тестирования

Итоговый отчет и отчет о ходе тестирования включает:
- Резюме проведенного тестирования
- Информацию о том, что произошло во время тестирования
- Информацию об отклонениях от плана, включая отклонения в расписании, длительности выполнения или затратах
- Информацию о качестве тестирования и качестве продукта с точки зрения критериев выхода или критериев завершения
- Информацию о факторах, которые блокировали или продолжают блокировать тестирование
- Метрики дефектов, тестовых сценариев, покрытия, прогресса тестирования и использования ресурсов
- Информацию об остаточных рисках
- Перечень тестовых артефактов, которые можно повторно использовать

**Входные критерии**: План тестирования
**Критерии выхода**: Отчеты о тестировании, включая отчеты о ходе тестирования (выпускаемые оперативно и/или на регулярной основе) и сводные отчеты о тестировании (выпускаемые на различных этапах
завершения). Все отчеты о тестировании должны обеспечить соответствующей аудитории подробные сведения о ходе тестирования на дату отчета, включая обобщение результатов выполнения тестирования после их получения.

##### 4.3.3. Анализ тестирования
Анализ тестирования проверяет, являются ли требования согласованными, сформулированными должным образом и полными, также проверяет, правильно ли требования отражают потребности клиентов, пользователей и других заинтересованных лиц. В процессе анализа тестирования анализируют базис тестирования для определения тестируемых функций и установление соответствующих тестовых условий. 

Цели: :
- Анализ базиса тестирования, применимого к рассматриваемому уровню тестирования. 
    Базисом тестирования являются:
        - Спецификации требований - бизнес-требования, функциональные требования, системные требования, пользовательские истории, бизнеспотребности, сценарии использования системы.
        - Информация о проектировании и реализации - документы архитектуры системы и программного обеспечения, спецификации проектирования, спецификации интерфейсов
        - Реализация самого компонента или системы, включая код, метаданные и запросы базы данных, а также интерфейсы
        - Отчеты анализа рисков, в которых рассмотрены функциональные, нефункциональные и структурные аспекты компонента или системы
- Оценка базиса тестирования и элементов тестирования для выявления дефектов различных типов, таких как:
        - Неоднозначность
        - Пропуски
        - Несоответствие
        - Неточность
        - Противоречивость
        - Избыточные утверждения
- Определить свойства и совокупность свойств для тестирования
- Установить и приоритизировать тестовые условия для каждого свойства на основе анализа базиса тестирования, с учетом функциональных, нефункциональных и структурных характеристик.
- Обеспечить двунаправленной трассируемости между каждым элементом базиса тестирования и соответствующими тестовыми условиями

**Входные критерии**: Базис тестирования
**Критерии выхода**: Определенные и приоритизированные тестовые условия, каждое из которых двунаправленно прослеживается до конкретного элемента (элементов) базиса тестирования, который они покрывают. Концепция тестирования. Отчет о дефектах в базисе тестирования.

##### 4.3.4. Проектирование тестов 
Во время проектирования тестов тестовые условия воплощаются в высокоуровневые тестовые сценарии, наборы высокоуровневых тестовых сценариев и тестовое обеспечение.
Проектирование тестов приводит к выявлению аналогичных типов дефектов в базисе тестирования. Выявление дефектов при проектировании тестов является важным потенциальным преимуществом.

Цели:
- Проектирование и приоритизация тестовых сценариев, и наборов тестовых сценариев
- Определение необходимых тестовых данных для поддержки тестовых условий и тестовых сценариев
- Проектирование тестового окружения, и определения необходимой инфраструктуры и инструментов
- Отражение двунаправленной трассируемости между базисом тестирования, тестовыми условиями, тестовыми сценариями и процедурами тестирования

**Входные критерии**: Отчет подтверждающий, что требования согласованны, сформулированны должным образом и полные. Концепция тестирования.
**Критерии выхода**: Тестовые сценарии и наборы тестовых сценариев для выполнения тестовых условий, определенных в анализе тестирования.

##### 4.3.5. Реализация тестов
Реализация тестов – это активность, во время которой процедуры или сценарии тестирования выстраиваются в определенном порядке, чтобы облегчить выполнение тестов.

Цели:
- Разработать и расстановить приоритеты процедур тестирования и создать автоматизированные сценарии тестирования
- Создать набор тестов из процедур тестирования и автоматизированные сценарии тестирования
- Организовать набор тестов с расписанием выполнения тестов таким образом, чтобы тесты выполнялись эффективно
- Построить тестовое окружение и проверить правильности настройки всего необходимого
- Подготовить тестовые данные и правильность загрузки их в тестовое окружение
- Проверить и обновить двунаправленную трассируемость между базисом тестирования, тестовыми условиями, тестовыми сценариями, процедурами тестирования и наборами тестов

**Входные критерии**: Тестовые сценарии
**Критерии выхода**: 
- Процедуры тестирования и последовательности этих процедур тестирования
- Наборы тестов
- Расписание выполнения тестов
- Двунаправленная трассируемость между процедурами тестирования и конкретными элементами базиса тестирования, с помощью тестовых сценариев и тестовых условий.
- Рабочие продукты, использующие или используемые инструментами, такими как службы виртуализации и автоматизированные тестовые сценарии.
- Создание и проверка тестовых данных и тестового окружения.

##### 4.3.6. Выполнение тестов 
Во время выполнения тестов, наборы тестов запускаются в соответствии с расписанием выполнения тестов.

Цели:
- Запись идентификаторов и версий элемента (-ов) тестирования или объекта тестирования, инструмента (-ов) тестирования, и тестового обеспечения
- Выполнение тестов вручную или с помощью инструментов выполнения тестов
- Сравнение фактических и ожидаемых результатов
- Анализ отклонений для установления их вероятных причин 
- Составление отчетов о дефектах на основе наблюдаемых отказов 
- Протоколирование результатов выполнения тестов 
- Повторение тестовых действий, результаты которых привели к каждому из отклонений,либо в рамках запланированного тестирования 
- Проверить и обновить двунаправленную трассируемость между базисом тестирования, тестовыми условиями, тестовыми сценариями, процедурами тестирования и результатами тестирования

**Входные критерии**: Наборы тестов. Расписание выполнения тестов. Тестовые данные.
**Критерии выхода**: 
- Документация о состоянии отдельных тестовых сценариев или процедур тестирования
- Отчеты о дефектах
- Документация о том, какие элемент(ы) теста, объект(ы) тестирования, инструменты тестирования, и тестовое обеспечение были задействованы в тестировании.

##### 4.3.7. Завершение тестирования
Завершению тестирования собирает данные из выполненных активностей тестирования для обобщения опыта, тестового обеспечения и любой другой соответствующей информации.

Цели:
- Проверить закрытие всех отчетов о дефектах, входящих запросов на изменение или набора задач продукта для любых дефектов, которые остаются не реализованными в конце выполнения тестирования
- Создать сводный отчет по тестированию для передачи заинтересованным лицам
- Завершить и архивировать тестовое окружение, тестовые данные, инфраструктуры тестирования и другое тестовое обеспечение для последующего использования
- Передать тестовое обеспечение команде сопровождения
- Анализ полученных уроков для определения изменений, необходимых для будущих итераций, релизов и проектов
- Использовать собранную информацию для повышения зрелости процесса тестирования

**Входные критерии**: Отчеты о дефектах. Документация о том, какие элемент(ы) теста, объект(ы) тестирования, инструменты тестирования, и тестовое обеспечение были задействованы в тестировании.
Завершение выпуска релиза программного обеспечения системы, завершение (отмена) проекта тестирования, окончание итерации проекта с гибкой методологией, завершение уровня тестирования, или завершения сопровождения релиза.
**Критерии выхода**: Сводные отчеты тестирования. Мероприятия по улучшению последующих итераций. Запросы на изменение набора задач продукта или тестового обеспечения.

#### 4.4. Группы тестов используемые на проекте
В CI-фазе :
- Unit Tests — проверка отдельных компонентов
    - Smoke-тесты — проверка работы базовых функций
- Unit-Integration Tests — проверка внедренных компонентов
    - Smoke-тесты — проверка работы базовых функций
    - Регрессионные тесты

В CD-фазе :
- System-Integration Tests
    - Smoke-тесты — проверка работы базовых функций
    - Регрессионные тесты
    - Performance-тесты — проверка производительности

- E2E-тесты — проверка UI

В рамках тест-плана не будут выполняться группы тестов:
- Базовый линтинг — проверка кода на договоренности внутри команды
- Security-тесты — проверка на уязвимости
- Penetration-тесты — проверка устойчивости
- Статистический код-анализ — проверка уязвимости кода

#### 4.5. Сообщения об ошибках
Отчеты об ошибках имеют следующие цели:
- Предоставлять разработчикам и другим сторонам информацию о произошедших негативных событиях, чтобы они могли определить побочные эффекты, изолировать проблему с минимальными затратами на воспроизведение и исправить потенциальные дефекты по мере необходимости, или решать проблемы другими способами
- Обеспечить руководителей тестирования инструментами отслеживания качества продукта и влияния на тестирование
- Предоставлять команде общую картину текущего уровня качества программного обеспечения.

Степень критичности ошибок:

Серьезность (Severity) бага
Severity — это атрибут, характеризующий влияние бага на общую функциональность тестируемого продукта.

Степень серьезности бага больше касается функциональности, поэтому она присваивается тестировщиком. 

Пример классификации серьезности багов:
|Метка|Название|Описание|
|:---:|:---:|:---:|
|Blocker|Блокирующая ошибка|Она делает невозможной всю последующую работу с программой. Для возобновления работы нужно исправить Blocker. Баги, ведущие к бизнес потерям: критически большое уменьшение количества использования приложения; уменьшение доходов, понижение рейтинга приложения; расхождение реализованного и планов маркетологов|
|Critical|Критическая ошибка|Нарушает работу основного функционала. Баг проявляется постоянно и делает невозможным использование основных функций программы. Нарушения в логике работы бизнес-фич|
|Major|Существенный баг|Затрудняет работу основного функционала или делает невозможным использование дополнительных функций. Нарушения в логике работы бизнес-фич|
|Minor|Незначительный баг|На функционал системы влияет относительно мало, затрудняет использование  дополнительных функций. Для обхода этого бага могут быть очевидные пути. Относится к удобству работы команды и к бизнес-фичам, но не мешает их работе никаким образом|
|Trivial|Тривиальный баг|Не влияет на функционал проекта, но ухудшает общее впечатление от работы с продуктом. Относится к удобству работы команды и к бизнес-фичам, но не мешает их работе никаким образом|


Приоритет (Priority) бага
Приоритет — атрибут, определяющий скорость устранения бага.

Приоритет бага сперва определяет инициатор, но в дальнейшем он корректируется менеджером продукта. 

Виды приоритетов:
|Вид|Название|Описание|
|:---:|:---:|:---:|
|Top|Наивысший приоритет|Назначается экстренным ситуациям, которые очень отрицательно влияют на продукт или даже бизнес компании. Такие баги нужно устранять немедленно.|
|High|Высокий приоритет|Назначается багам, которые должны быть устранены в первую очередь.|
|Normal|Обычный приоритет|Назначается по умолчанию. Эти баги устраняются во вторую очередь, в штатном порядке.|
|Low|Низкий приоритет|Назначается багам, не влияющим на функционал. Исправление таких багов происходит в последнюю очередь, если есть время и ресурсы|

Каждый баг-репорт содержит следующую информацию о дефекте:
|Поле|Важность|
|---|:---:|
|ID|Обязательно|
|Название баг-репорта|Обязательно|
|Краткое описание|Опционально|
|Предусловия|Опционально|
|Шаги для воспроизведения ошибки|Обязательно|
|Ожидаемый результат|Обязательно|
|Фактический результат|Обязательно|
|Дополнительная информация/скриншоты/видеозаписи|Опционально|
|Браузер, в котором проводились тесты|Обязательно|
|OC/Платформа|Обязательно|
|Приоритет|Опционально|
|Серьезность|Обязательно|
|Метка принадлежности ошибки|Обязательно|

Метки:
- front-end
- back-end
- other
- database

### 5. Ресурсы

##### 5.1. Инструменты
Будут использованы следующие инструменты:
| Наименование процесса        | Инструмент           |
| ------------- |:-------------:|
|   Баг-трекинговая система   |[TODO]  |
| Тест кейсы     |[TODO]  | 
|   Захват изображений   | Bandicam / яндекс.диск |

##### 5.2. Список браузеров
| Наименование браузера| Версия браузера|
| ------------- |:-------------:|
|  Chrome   | 110.0.5481 |
|  Firefox  | 110.0 |
|  Opera   | 95.0.4635 |
|  Safari  | 15.0 |


#### 5.3. Список устройств
|Устройство|Операционная система|Версия|
|:---:|:---:|:---:|
|ПК|Windows|10|
|ПК|MacOs|12|
|ПК|Ubuntu|22|

#### 5.4. Список разрешений
|Платформа|Разрешение|Разрешение|
|:---:|:---:|:---:|
|Desktop Win/MacOs/Ubuntu|1920*1080|1366*768|

#### 6. Риски процесса тестирования

Следующие проблемы могут повлиять на результаты тестирования:

|Риски|Тип|Степень|Меры|Ответственность|
|:---:|:---:|:---:|:---:|:---:|
|Задержки поставки, выполнения задач, выполнения критериев выхода или критериев готовности|Проектные|Высокий|Составление и утверждение плана разработки, корректировка плана разработки каждый спринт|PM, Senior Dev, Team-/Tech-lead|
|Поздние изменения могут привести к существенным доработкам|Проектные|Высокий|Утвержденные требования согласованные с разработчиками до следующего релиза|PM/PO|
|Недостаток навыков, обучения или численности персонала|Организационные|Высокий|Согласование требований и спецификаций с разработчиками на основе стэка, общедоступный стэк инструментов|PM, Team-/Tech-lead|
|Эксперты предметной области могут быть заняты другими работами|Организационные|Средний|Согласование сроков code-review с экспертами, либо отказ от code-review|Senior Dev, Team-/Tech-lead|
|Тестировщики не могут сообщать о своих потребностях и/или результатах тестирования|Коммуникационные|Высокий|Согласование и утверждение баг-трекинговой системы|QA Manager, PM|
|Разработчики и/или тестировщики не могут отслеживать информацию, полученную при тестировании и рецензировании |Коммуникационные|Высокий|Согласование и утверждение такс трекинговой системы, инструмента обмена отчетами|QA Manager, PM, Team-/Tech-lead|
|Может быть неправильное отношение или ожидания от тестирования (недооценивается важность обнаружения дефектов во время тестирования и т.д.)|Коммуникационные|Высокий|Согласование степени рисков и сроков их устранения|QA Manager, PM|
|Требования могут быть определены недостаточно хорошо|Технические|Средний|Предварительный анализ требований разработчиками и отделом QA, аутсорс|PM/PO|
|Требования могут быть невыполнимыми в текущих условиях|Технические|Высокий|Согласование требований и спецификаций с разработчиками|Senior Dev, Team-/Tech-lead|
|Тестовая среда может быть не готова вовремя|Технические|Средний|Инструкции по установке тестовой среды локально|Senior Dev, Team-/Tech-lead|
|Преобразование данных, планирование миграции и их инструментальная поддержка могут быть не готовы вовремя|Технические|Высокий|Согласование и утверждения стэка разработки до следующего релиза|Senior Dev, Team-/Tech-lead|
|Слабые стороны процесса разработки могут влиять на согласованность или качество артефактов проекта, таких как дизайн, код, конфигурация, тестовые данные и тестовые сценарии|Технические|Средний|Согласование дизайн и функциональности со всеми затрагиваемыми отделами до начала этапа разработки|PM, Senior Dev, Team-/Tech-lead, QA Manager|
|Проблемы управления дефектами могут привести к накоплению дефектов и росту технического долга|Технические|Средний|Согласование уровня выхода из спринта по степени готовности кода и покрытия уровня дефектов|Team-/Tech-lead, QA Manager|












