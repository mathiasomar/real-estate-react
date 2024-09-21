const express = require('express')
const adminController = require('../controllers/adminController')
const isAuth = require('../middleware/isAuth')

const router = express.Router()

router.get('/admin', isAuth, adminController.admin)
router.post('/admin', isAuth, adminController.addAdmin)

module.exports = router