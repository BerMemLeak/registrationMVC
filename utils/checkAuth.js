import jwt from 'jsonwebtoken';

// тут парсим токен и расшифровываем
export default (req, res, next) => {// next  разрешает перейти в сл функцию колбека в гет ми
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");// регулярное выражения удаления слова
    if(token){
        try {
            const decoded = jwt.verify(token, 'secret123');// расшифровка токена
            req.userId = decoded._id;
            next();
        } catch (error) {
            return res.status(403).json({
                message: 'Нет доступа'
            })
        }
    } else{
       return res.status(403).json({
            message: 'Нет доступа'
        })
    }
}// почему-то  токен у нас андефаинд,(пиши без ошибок поля)