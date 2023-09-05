const express = require('express')
const router = express.Router();
const Newscontroller = require('../controllers/news.controller');
const uploadImage = require('../middleware/fileupload');


// create News route


/**
 * @swagger
 * /api/news/create:
 *   post:
 *     tags:
 *       - news
 *     summary: Create a news post
 *     consumes:
 *       - multipart/form-data   # Make sure to include this for form-data uploads
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary  # This indicates a file upload
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               categoryID:
 *                 type: string
 *               userID:
 *                 type: string
 *               tags:
 *                 type: array
 *             required:
 *               - image
 *               - title
 *               - categoryID
 *               - userID
 *               - content
 *               - tags
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
router.post('/news/create', uploadImage.single("image"), Newscontroller.createNews );

// get news route

/**
 * @swagger
 * /api/news/{id}:
 *   get:
 *     tags:
 *       -  news
 *     summary: Find a news by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the news
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
router.get('/news/:id', Newscontroller.findNews );


// getall news route

/**
 * @swagger
 * /api/news:
 *   get:
 *     tags:
 *       -  news
 *     summary: 'Get all news'
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

router.get('/news', Newscontroller.findAllNews);

// update news route

/**
 * @swagger
 * /api/news/update:
 *   put:
 *     tags:
 *       - news
 *     summary: update a news post
 *     consumes:
 *       - multipart/form-data   # Make sure to include this for form-data uploads
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary  # This indicates a file upload
 *               id:
 *                 type: string
 *               categoryID:
 *                 type: string
 *               content:
 *                 type: string
 *               isStatus:
 *                 type: boolean
 *               title:
 *                 type: string
 *               tags:
 *                 type: array
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

router.put('/news/update', uploadImage.single("image"), Newscontroller.updateNews);

// delete news route

/**
 * @swagger
 * /api/news/delete:
 *   delete:
 *     tags:
 *       -  news
 *     summary: 'news'
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
router.delete('/news/delete', Newscontroller.destroyNews);

// like news routes
/**
 * @swagger
 * /api/news/like/:
 *   post:
 *     tags:
 *       - news
 *     summary: 'news'
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

router.post('/news/like', Newscontroller.likeNews);

// share news routes

/**
 * @swagger
 * /api/news/share/:
 *   post:
 *     tags:
 *       - news
 *     summary: 'news'
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

router.post('/news/share', Newscontroller.shareNews);
module.exports = router