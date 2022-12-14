const jwt=require('jsonwebtoken')

const authentication = function (req, res, next) {
    try {
        const token = req.headers["a2d-key"]
        if (!token) {
            return res.status(400).send({ status: false, message: "token must be present" });
        }
        const decodedToken = jwt.verify(token, "THESECRETKEY");
        
        if (!decodedToken) {
            return res.status(401).send({ status: false, message: "token is invalid" });
        }
        next();
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}


module.exports.authentication=authentication;