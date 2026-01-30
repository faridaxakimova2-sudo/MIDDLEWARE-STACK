const logger = (req, res, next) => {
    const time = new Date().toLocaleString()
    const ip = req.ip;
    console.log(`[${time}]
         - [${ip}]
        -[${req.method}]
        - [${req.url}] `);
    next();

}
module.exports = logger