const auth= (req,res,next) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            mesage:"You must login first"
        });
        //res.redirect("/login")
    }
    req.user = {id:1, role:"user"}
    next();
}
module.exports = auth;