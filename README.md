# ***WEBBLOG***
## ***Приветствие***
Здравствуйте, в данном репозитории представлен веб блог(на данный момент только бэкенд часть).
___
## ***Использованные технологии***
+ Схема разделения данный - MVC
+   Регистрация по JWT
+   ODM - mongoose
+    MiddleWare для загрузки данных - multer.
+ Хеширование паролей с помощью bcrypt.

<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=black"/><img src="https://img.shields.io/badge/Node.js-red?style=for-the-badge&logo=Node.js&logoColor=green"/><img src="https://img.shields.io/badge/Express-gray?style=for-the-badge&logo=express&logoColor=green"/><img src="https://img.shields.io/badge/mongoDb-yellow?style=for-the-badge&logo=MongpDb&logoColor=green"/><img src="https://img.shields.io/badge/bcrypt-white?style=for-the-badge&logo=bcrypt&logoColor=green"/><img src="https://img.shields.io/badge/multer-green?style=for-the-badge&logo=MongpDb&logoColor=black"/>
____
## ***Инструкция:*** ##

+ ### **Склонируйте проект:** ###
> $ git clone https://github.com/babymama111/site.git
+ ### ***Перейдите в скачанную папку и установите зависимости:***
> $ cd site 
> 
> $ npm i
+ ### ***Запустите локальный сервер:*** ###
> $ npm run dev
 _____
## ***Тестирование*** ##
+ #### *Используем платформу для тестирования API (например, Postman):* ####
+ #### *Выбираем метод, который хотим использовать(CRUD);*
+ #### *Вводим request url:* ###
> http://localhost:3333/...

### *Для примера продемонстрирую регистрацию:* ###
+ ####  *Выбираем метод POST и  вводим:* ####
 >http://localhost:3333/auth/register
+ #### Добавляем Json, например :
 ```JSON
{
    "email": "slava@icloud.com",
    "password": "18981111",
    "fullName": "Kirill"
} 
```
P.S. добавляйте другого пользователя, одного пользователя несколько раз нельзя зарегистрировать

____
 ## **Далее представлены все запросы, реализуемые в приложении:**
 + ### *Используйте http://localhost:3333 и путь, содержащийся в методе*
 ``` javascript
 // Авторизация
app.post('/auth/login')

// Регистрация
app.post('/auth/register')

//Получение информации о себе с расшифровкой токена
app.get('/auth/me')

// Получение всех постов
app.get('/posts')

// Получение поста по ID
app.get('/posts/:id')

//Отправка поста в БД
app.post('/posts')

// Удаление поста
app.delete('/posts/:id')

// Изменеие поста
app.patch('/posts/:id')

// Загрузка картинки
app.post('/upload')

```
+ *Также предоставлю токен доступа:*
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA1ZDAxZDQ0OTMyZmZiMzUwMTQxMmMiLCJpYXQiOjE2NzgxOTMzNDgsImV4cCI6MTY4MDc4NTM0OH0.HvxKS9WFetRDC32_up-m3NdmbTfOtmp2IpUxt048akE
```
