const express= require('express')
const { route } = require('express/lib/application')
const router = express.Router()
const {addNewUser} = require('../controllers/signUpcontroller')

router.route('/').post(addNewUser)



module.exports= router