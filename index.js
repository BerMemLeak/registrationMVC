import express from 'express'
import mongoose from 'mongoose';
import { registerValidation, loginValidation, postCreateValidation } from './validations/validations.js';
import *as UserController from './controllers/UserController.js';
import *as PostController from './controllers/PostController.js';
import checkAuth from './utils/checkAuth.js';
import multer from "multer";
import handleValidationErrors from './utils/handleValidationErrors.js';

const app = express();
app.use(express.json())// чтоб в реквесте не было андефаинд
app.use('/uploads', express.static('uploads'));// гет запрос на получение статичного файла

//создадим хранилище
const storage = multer.diskStorage({
    destination: (_,__, cb)=>{
        cb(null, "uploads");
    },
    filename:(_,file, cb)=>{
        cb(null, file.originalname);
    },
});
const upload = multer({storage});




// коннект к бд 
mongoose.connect('mongodb+srv://admin:1898@atlascluster.uqze4xe.mongodb.net/blog?retryWrites=true&w=majority')
.then(()=>{
    console.log("db ok")})
.catch((err)=>{
    console.log("db err", err);
});

// авторизация
app.post('/auth/login',loginValidation ,handleValidationErrors,UserController.login)

// регистрация
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)

// получаем инфу о себе с расшифровкой токена через мидлвейр в папке утилс
app.get('/auth/me', checkAuth, UserController.getMe)

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation,handleValidationErrors, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth,postCreateValidation,handleValidationErrors, PostController.update);
app.post('/upload', checkAuth, upload.single('image'), (req, res)=>{
    console.log(req)
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

// запуск сервака
app.listen(3333,(err)=>{
    if(err){
        console.log('err')
    }
    console.log('ok')
})