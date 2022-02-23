const Jwt = require('jsonwebtoken')

const generateAccessToken=({ _id, email, name }, secret, role)=>{
    const token=Jwt.sign({
        id: _id,
        email,
        role,
        name
    }, secret, {
        expiresIn: '24h'
    })
    return token
}

const validateToken=(token, secret)=>{
    try {
        const decodToken = jwt.verify(token, secret)
        return decodToken;
    } catch (error) {
        throw new Error("Token false")
    }
}

module.exports={
    generateAccessToken,
    validateToken
}