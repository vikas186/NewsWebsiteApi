const express = require('express')
const router = express.Router();
const SignupController = require('../controllers/userlogin.controller');


/**
 * @swagger
 * /api/signup:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User signup
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: rahul
 *               email:
 *                 type: string
 *                 example: rahul@gmail.com
 *               iama:
 *                 type: Number
 *                 example: 1 or 2
 *               password:
 *                 type: string
 *                 example: 123456
 *               phone:
 *                 type: string
 *                 example: 78678568575
 *             required:
 *               - email
 *               - username
 *               - password
 *               - phone
 *               - iama
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.post('/signup', SignupController.Signup);

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - User Auth
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: rahul
 *               email:
 *                 type: string
 *                 example: rahul@gmail.com
 *               password:
 *                 type: string
 *                 example: 123456
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad Request
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.post('/login', SignupController.login);

module.exports = router