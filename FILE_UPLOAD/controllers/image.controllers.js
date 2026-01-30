const Image = require("../models/image.model")
const fs = require("fs")
const path = require("path")

class ImageController{
    static async uploadSingle(req,res){
        const image = await Image.create({
            filename:req.file.filename,
            path:req.file.path,
            size:req.file.size,
            mimetype:req.file.mimetype
        });
        res.status(201).json(image);
    }

    static async uploaMultiple(req,res){
        const image = req.files.map(file=>({
            filename:req.file.filename,
            path:file.path,
            size:file.size,
            mimetype:file.mimetype
        }));
        await Image .insertMany(images)
        res.ststus(201).json(images);
    }
    static async getAll(req,res){
        const images = await Images.find()
        if (images){
            return res.ststus(404).json({message:"Images not found"})
        }
        res.status(200).json(images)

    }
     static async removeImage(req,res){
const image = await Image.findById(req.params.id);
 if (!image){
    return res.status(404).json({message:"Images not found"})
 }
 //uplods/papkasidan o'chirish
 const filePath = path.join(__dirname,"../../"+image.path);
 if(fs.existsSync(filePath)){
    fs.unlinkSync(filePath);
 }
 //DB dan o'chirish
 await image .deleteOne()
 res.status(200).json({message:"Image deleted"})
     }

}

module.exports =  controllers