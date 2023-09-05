const express = require('express')
const router = express.Router();
const Categorycontroller = require('../controllers/category.controller');

// create category route

/**
 * @swagger
 * /api/category/create:
 *   post:
 *     tags:
 *       - category
 *     summary: Create category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               category:
 *                 type: string
 *               isStatus:
 *                 type: boolean
 *             required:
 *               - category
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
router.post('/category/create', Categorycontroller.createCategory );

// get category route

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     tags:
 *       -  category
 *     summary: Find a category by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the category
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
router.get('/category/:id', Categorycontroller.findCategory);

// getall category route

/**
 * @swagger
 * /api/category:
 *   get:
 *     tags:
 *       -  category
 *     summary: 'Get all Category'
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

router.get('/category', Categorycontroller.findAllCategory);

// update category route

/**
 * @swagger
 * /api/category/update/:
 *   put:
 *     tags:
 *       - category
 *     summary: 'Update category'
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
 *               category:
 *                 type: string
 *                 example: "Category Name"
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

router.put('/category/update', Categorycontroller.updateCategory);

// delete category route

/**
 * @swagger
 * /api/category/delete:
 *   delete:
 *     tags:
 *       -  category
 *     summary: 'Delete category'
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
router.delete('/category/delete', Categorycontroller.destroyCategory);

module.exports = router
