const bcrypt = require('bcryptjs')
const User = require('../models/User')
const createError = require('../utils/errorHandler')

// Get all admins
exports.admin = async (req, res, next) => {
    const users = User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
}

exports.addAdmin = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    try {
        const checkEmail = await User.findOne({ email: req.body.email })
        if (checkEmail) return next(new createError("User already exists!", 404))

        const user = await User.create({ ...req.body, role: "admin", password: hashedPassword })

        res.status(201).json({
            message: "Admin saved Successfully",
            user: {
                _id: user._id
            }
        })
    } catch (error) {
        next(error)
    }
}