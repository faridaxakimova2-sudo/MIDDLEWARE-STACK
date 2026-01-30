const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
destionation:"uploads/",
filename:(req,file,callback)=>{
    callback(null,
        Date.now()+"-"+
        Math.random().toString(36).slice(2)+
        path.extname(file.orgonalname)
        );
}
});

const fileFilter = (req,file,callback) =>{
    if(file,mimetype.startwith("image/")){
        callback(null,true)
    }else{
        callback(new Error("Only images allowed"))
    }
}
module.exports = multer({
    storage,
    fileFilter,
    limits:{fileSize:5*1024*1024}
    

})