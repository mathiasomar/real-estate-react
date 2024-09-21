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
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(new createError("User already exists!", 404))

        const hashedPassword = await bcrypt.hash(req.body.password, 12)
        await User.create({...req.body, password: hashedPassword})

        res.status(201).json({message: "Admin saved Successfully"})
    } catch (error) {
        next(error)
    }
}