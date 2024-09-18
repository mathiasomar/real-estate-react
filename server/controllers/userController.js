const User = require('../models/User')
const bcrypt = require('bcryptjs')
const createError = require('../utils/errorHandler')
const jwt = require('jsonwebtoken')

// Sign up user
exports.signup = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 12)

    try {
        const checkEmail = await User.findOne({ email: req.body.email })
        if (checkEmail) {
            return next(new createError("Email already exists!", 404))
        }
        await User.create({ ...req.body, password: hashedPassword })
        res.status(201).json({ message: "User created successfully" })
    } catch (error) {
        next(error)
    }
}

// exports.login = async (req, res, next) => {
//     try {
//         const { email, password } = req.body

//         const user = await User.findOne({ email })
//         // if (!user) return next(new createError("User not found", 404))
//         if (!user) {
//             res.status(404).json({ success: false, message: "User Not Found" })
//         }

//         const isMatch = await bcrypt.compare(password, user.password)
//         if (!isMatch) {
//             // return next(new createError("Wrong password", 404))
//             res.status(404).json({ success: false, message: "Wrong password" })
//         }

//         const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_KEY, { expiresIn: "10d" })

//         res.status(200).json({
//             success: true,
//             message: `Success. You are logged in as ${user.role}`,
//             token,
//             user: {
//                 _id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role
//             }
//         })
//     } catch (error) {
//         res.status(500).json({ success: false, error: error.message })
//     }
// }

// Login
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return next(new createError("User not found", 404))

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return next(new createError("Invalid password!", 401))
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
            expiresIn: '90d'
        })

        res.status(200).json({
            status: "success",
            message: `Success. You are logged in as ${user.role}`,
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        next(error)
    }
}