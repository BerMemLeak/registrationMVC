import {body} from "express-validator";

export const loginValidation = [
    body('email', 'Введите валидную почту').isEmail(),
    body('password', "Не меньше 5 символов").isLength({min: 5}),
];

export const registerValidation = [
    body('email', 'Введите валидную почту').isEmail(),
    body('password', "Не меньше 5 символов").isLength({min: 5}),
    body('fullName',"Не меньше 2 символов").isLength({min: 2}),
    body('avatarUrl', "Неверная ссылка ").optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({min: 3}).isString(),
    body('text', "Введите текст статьи").isLength({min: 10}).isString(),
    body('tags',"Введите формат тегов(укажите массив)").optional().isString(),
    body('imageUrl', "Неверная ссылка на изображение ").optional().isString(),
];