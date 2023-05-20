const { CustomAPIError } = require('../errors/custom-error')
const { customAPIError } = require ('../erros/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => { 
    if (err instanceof CustomAPIError) { 
        return res.status(arr.statusCode).json({ msg: err.message})
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again'})
}

module.exports = errorHandlerMiddleware