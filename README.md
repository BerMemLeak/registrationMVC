Приветствую, в данном репозитории представлен веб блог(на данный момент только бэкенд часть).

В данном приложении схема разделения данный - MVC, осуществлена регистрацию по JWT, ODM - mongoose, MiddleWare для загрузки данных - multer.
Также осуществлено хеширование паролей с помощью bcrypt.

Использованные технологии:

<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=black"/><img src="https://img.shields.io/badge/Node.js-red?style=for-the-badge&logo=Node.js&logoColor=green"/><img src="https://img.shields.io/badge/Express-gray?style=for-the-badge&logo=express&logoColor=green"/><img src="https://img.shields.io/badge/mongoDb-yellow?style=for-the-badge&logo=MongpDb&logoColor=green"/><img src="https://img.shields.io/badge/bcrypt-white?style=for-the-badge&logo=bcrypt&logoColor=green"/><img src="https://img.shields.io/badge/multer-green?style=for-the-badge&logo=MongpDb&logoColor=black"/>

Инструкция:
склонируйте проект:
git clone https://github.com/babymama111/site.git
перейдите в скачанную папку и установите зависимости:
cd site
npm i
запустите локальный сервер:
npm run dev

Далее вам понадобится любая платформа для тестирования API (я исполльзую Postman):

выбираем метод, который хотим использовать(CRUD)
вводим request url 
http://localhost:3333/...

Для примера продемонстрирую регистрацию:
1.Выбираем метод POST 
2. Вводим: http://localhost:3333/auth/register
3. Добавляем Json, например :
{
    "email": "slava@icloud.com",
    "password": "18981111",
    "fullName": "Kirill"
}
(добавляйте другого пользователя, одного пользователя несколько раз нельзя зарегистрировать)


Также в проекте имеется возможность добавлять посты с картинками(реализовано с помощью multer)
