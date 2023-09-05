const express = require('express')
const router = express.Router();
const TermsAndConditionscontroller = require('../controllers/termsAndConditions.controller');

// create trems and conditions route

/**
 * @swagger
 * /api/TermsAndConditions/create:
 *   post:
 *     tags:
 *       - TermsAndConditions
 *     summary: Create TermsAndConditions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
  *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               time:
 *                 type: number
 *             required:
 *               - title
 *               - content
 *               - time
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
router.post('/TermsAndConditions/create', TermsAndConditionscontroller.createTermsAndConditions );

// get category route

/**
 * @swagger
 * /api/TermsAndConditions/{id}:
 *   get:
 *     tags:
 *       -  TermsAndConditions
 *     summary: Find by ID
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
router.get('/TermsAndConditions/:id', TermsAndConditionscontroller.findTermsAndConditions);

// getall category route

/**
 * @swagger
 * /api/TermsAndConditions:
 *   get:
 *     tags:
 *       -  TermsAndConditions
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

router.get('/TermsAndConditions', TermsAndConditionscontroller.findAllTermsAndConditions);

// update category route

/**
 * @swagger
 * /api/TermsAndConditions/update/:
 *   put:
 *     tags:
 *       - TermsAndConditions
 *     summary: 'Update TermsAndConditions'
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
 *               title:
 *                 type: string
 *                 example: "Category Name"
 *               content:
 *                 type: string
 *               time:
 *                 type: number
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

router.put('/TermsAndConditions/update', TermsAndConditionscontroller.updateTermsAndConditions);

// delete category route

/**
 * @swagger
 * /api/TermsAndConditions/delete:
 *   delete:
 *     tags:
 *       -  TermsAndConditions
 *     summary: 'Delete TermsAndConditions'
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
router.delete('/TermsAndConditions/delete', TermsAndConditionscontroller.destroyTermsAndConditions);

module.exports = router
