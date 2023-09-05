const express = require('express')
const router = express.Router();
const Citycontroller = require('../controllers/city.controller');

// create city route

/**
 * @swagger
 * /api/city/create:
 *   post:
 *     tags:
 *       - city
 *     summary: Create city
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               cityname:
 *                 type: string
 *               isStatus:
 *                 type: boolean
 *             required:
 *               - cityname
 *               - isStatus
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
router.post('/city/create', Citycontroller.createCity );

// get a city route

/**
 * @swagger
 * /api/city/{id}:
 *   get:
 *     tags:
 *       -  city
 *     summary: Find a city by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the city
 *         required: true
 *         schema:
 *           type: string
 *         example: hs-no-35-mohali-address
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Bad Request
 *       '404':
 *         description: Blog post not found
 *       '500':
 *         description: Internal Server Error
 */
router.get('/city/:id', Citycontroller.findCity);

// Get all city route

/**
 * @swagger
 * /api/city:
 *   get:
 *     tags:
 *       -  city
 *     summary: 'Get all City'
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.get('/city', Citycontroller.findAllCity );

// update city route

/**
 * @swagger
 * /api/city/update/:
 *   put:
 *     tags:
 *       - city
 *     summary: 'Update city'
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *               cityname:
 *                 type: string
 *                 example: "City Name"
 *               isStatus:
 *                 type: boolean
 *                 example: "true"
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */

router.put('/city/update', Citycontroller.updateCity);


// delete city route

/**
 * @swagger
 * /api/city/delete:
 *   delete:
 *     tags:
 *       -  city
 *     summary: 'Delete city'
 *     requestBody:
 *       required: true
 *       content:
 *        application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: "642d0bb29daf22457f18685f"
 *     responses:
 *       '200':
 *         description: OK
 *       '400':
 *         description: Bad Request
 *       '401':
 *         description: Authorization Failure
 *       '422':
 *         description: Validation Error
 *       '500':
 *         description: Internal Server Error
 */
router.delete('/city/delete', Citycontroller.destroyCity);

module.exports = router
