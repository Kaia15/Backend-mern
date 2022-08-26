const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
    const token = req.header.token
    console.log(req.header.token)
    if (token) {
        try {
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY)
        } catch(err) {
            console.log(err)
            next(err)
        }
    } else {
        console.log("You are not authenticated")
    }
}

module.exports = {
    verifyToken
}