import PostModel from "../models/Post.js";

export const create = async (req, res) =>{
    try {
       const doc = new PostModel({
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags,
        user: req.userId,
       });
       const post = await doc.save();
       res.json(post)
    }  catch (error) {
        console.log(error)
        res.status(500).json(
            {message: " Не удалось создать статью"});
    }
}
export const getAll = async(req,res)=>{
    try {
        const posts = await PostModel.find().populate('user').exec();
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {message: " Не удалось найти статьи"});
    }
}
export const getOne = (req, res) =>{
    PostModel.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          $inc: { viewsCount: 1 }
        },
        {
          returnDocument: "after"
        }
      )
        .then((doc) => {
          try {
            if (!doc) {
              return res.status(404).json({
                message: "Статья не найдена"
              });
            }
            res.json(doc);
          } catch (error) {
            console.log(error);
            return res.status(500).json({
              message: " Не удалось получить статью"
            });
          }
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ message: " Не удалось найти статьи" });
        });
}
export const remove = (req, res) =>{
     PostModel.findByIdAndDelete({
       _id:  req.params.id,
    })
    .then((doc)=>{
        try {
            if (!doc) {
                return res.status(404).json({
                    message: "Статья не найдена"
                });
                }
                res.json({
                success: true,
                });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: " Не удалось удалить статью"
            });
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json({ message: " Не удалось найти статьи" });
    });
}
export const update = async (req,res)=>{
    try {
        await PostModel.updateOne({
            _id:  req.params.id,
         },
         {
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            user: req.userId,
            tags: req.body.tags,
         },
        );
        res.json({
            success: true,
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: " Не удалось обновить статью"
        });
    }
}