const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJzdWV0aW5kYW5paWxAZ21haWwuY29tIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjgyMDE4NDQ3LCJleHAiOjE2ODIxMDQ4NDd9.gxfJ2jhrEzpB-a-jJQzH54s6SRJA1KI2eUNozuFyCOw
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
                return res.status(403).json({message: "403 Нет доступа"})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован catch"})
        }
    };
}



