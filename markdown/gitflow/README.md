# [[TODO]](https://[TODO].ru/)

#### Заголовок

## Данный документ описывает структуру деплоя между ветками :

1. Окружение [devtest](https://devtest.[TODO].ru/api/)
Данное окружение работает с базой SQLlite и обновляется при каждом push в ветку frontend и backend. После каждого push в ветку backend база данных обнуляется.

    1.1.[Branch backend](https://github.com/[TODO]/web/backend) deploy to https://devtest.[TODO].ru/api/

    Deploy django приложения происходит с помощью GitHub и PM2, происходит переключение на ветку backend копирование папки backend и локальное развертывание приложения по пути http://localhost:[TODO] с Celery, который подключен к Redis - установленному и запущенному на сервере.

    - Перед деплоем производятся тесты в среде GitHub Action тестовые данные расположены [по ссылке](./web/backend/[TODO]/test_data/) .
    - Список тестов на данном этапе находится [по ссылке]([TODO])

    1.2. [Branch frontend](https://github.com/[TODO]/frontend) deploy to https://devtest.[TODO].ru/

    Deploy статичного React приложения происходит с помощью Docker контейнера:
    - Приложение устанавливает зависимости и собирает продуктовый build в контейнер с последующей отправкой контейнера на сервис DockerHub
    - С помощью Docker-Compose расположенному на сервере по пути ./devtestfront скачивается последний контейнер [TODO]_devtest_frontend
    - Содержимое контейнера, а именно папка build копируется по пути ./.[TODO]/frontend_devtest

    1.3. Локально установленный Nginx распределяет установленные и запущенные приложения


2. Окружение [preprod](https://preprod.[TODO].ru/)
Данное окружение работает с отдельной базой PostgresSQL и обновляется при каждом push в ветку preprod. 
Информация в базе данных и медиафайлы хранятся до удаления вручную.

    2.1. Backend [Branch preprod](https://github.com/[TODO]/preprod/web/backend) deploy to https://preprod.[TODO].ru/api/

    Deploy django приложения происходит с помощью Docker контейнера:
    - Приложение устанавливает зависимости и собирает всю информацию в контейнер с последующей отправкой контейнера на сервис DockerHub
    - С помощью Docker-Compose расположенному на сервере по пути ./preprod скачивается последний контейнер [TODO]_preprod_backend
    - С помощью Docker-Compose в контейнере происходит установка БД PostgresSQL V 13.0
    - Приложение собирает статику и делает миграции в БД 
    - Приложение Python запускается внутри контейнера по пути http://localhost:[TODO]
    - Celery и Redis запускаются отдельно в контейнерах

    - Перед деплоем производятся тесты в среде GitHub Action тестовые данные расположены [по ссылке](./web/backend/[TODO]/tests/test_data/)
    - Список тестов на данном этапе находится [по ссылке]([TODO])

    2.2. Frontend [Branch preprod](https://github.com/[TODO]/preprod/web/frontend) deploy to https://preprod.[TODO].ru/

    Deploy статичного React приложения происходит с помощью Docker контейнера:
    - Приложение устанавливает зависимости и собирает продуктовый build в контейнер с последующей отправкой контейнера на сервис DockerHub
    - С помощью Docker-Compose расположенному на сервере по пути ./devtestfront скачивается последний контейнер [TODO]_preprodt_frontend
    - Содержимое контейнера, а именно папка build копируется по пути ./.[TODO]/frontend_preprod

    2.3. Локально установленный Nginx распределяет установленные и запущенные приложения

3. Окружение [reliz](https://[TODO].ru/)
Данное окружение работает с отдельной базой PostgresSQL и обновляется при каждом push в ветку main. 
Информация в базе данных и медиафайлы хранятся до удаления вручную.

    3.1. Backend [Branch main](https://github.com/[TODO]/main/web/backend) deploy to https://[TODO].ru/api/

    Deploy django приложения происходит с помощью Docker контейнера:
    - Приложение устанавливает зависимости и собирает всю информацию в контейнер с последующей отправкой контейнера на сервис DockerHub
    - С помощью Docker-Compose расположенному на сервер по пути ./ скачивается последний контейнер [TODO]_backend
    - С помощью Docker-Compose в контейнере происходит установка БД PostgresSQL V 13.0
    - Приложение собирает статику и делает миграции в БД 
    - Приложение Python запускается внутри контейнера по пути http://localhost:[TODO]
    - Celery и Redis запускаются отдельно в контейнерах

    - В данном окружение проводить тесты не обязательно

    3.2. Frontend [Branch preprod](https://github.com/[TODO]/main/web/frontend) deploy to https://[TODO].ru/

    Deploy статичного React приложения происходит с помощью Docker контейнера:
    - Приложение устанавливает зависимости и собирает продуктовый build в контейнер с последующей отправкой контейнера на сервис DockerHub
    - С помощью Docker-Compose расположенному на сервере по пути ./ скачивается последний контейнер [TODO]_frontend
    - Содержимое контейнера, а именно папка build копируется по пути ./.[TODO]/frontend

    3.3. Локально установленный Nginx распределяет установленные и запущенные приложения


### Merge в ветки preprod и main допускается только по согласованию
- #### с отделом QA
или
- #### TeamLead
или
- #### TechLead
