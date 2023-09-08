import express from 'express'

import { signin, signup, getUser } from '../Controller/authController'

// ========================================================================================================

const router = express.Router()

// Authentication
router.route('/api/v1/signin').post(signin)
router.route('/api/v1/signup').post(signup)

// User
router.route('/api/v1/user').get(getUser)

export default router
