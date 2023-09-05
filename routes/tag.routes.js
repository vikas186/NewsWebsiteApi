const express = require('express')
const router = express.Router();
const Tagcontroller = require('../controllers/tag.controller');

// create tag route

/**
 * @swagger
 * /api/tag/create:
 *   post:
 *     tags:
 *       - tag
 *     summary: Create tag
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tag:
 *                 type: string
 *               isStatus:
 *                 type: boolean
 *             required:
 *               - tag
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
router.post('/tag/create', Tagcontroller.createtag);

// get tag route

/**
 * @swagger
 * /api/tag/{id}:
 *   get:
 *     tags:
 *       -  tag
 *     summary: Find a tag by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the tag
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
router.get('/tag/:id', Tagcontroller.findTag);

// getall tag route

/**
 * @swagger
 * /api/tag:
 *   get:
 *     tags:
 *       -  tag
 *     summary: 'Get all tag'
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

router.get('/tag', Tagcontroller.findAllTag);

// update tag route

/**
 * @swagger
 * /api/tag/update/:
 *   put:
 *     tags:
 *       - tag
 *     summary: 'Update tag'
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
 *               tag:
 *                 type: string
 *                 example: "Tag Name"
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

router.put('/tag/update', Tagcontroller.updateTag);

// delete tag route

/**
 * @swagger
 * /api/tag/delete:
 *   delete:
 *     tags:
 *       -  tag
 *     summary: 'Delete tag'
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
router.delete('/tag/delete', Tagcontroller.destroyTag);

module.exports = router
