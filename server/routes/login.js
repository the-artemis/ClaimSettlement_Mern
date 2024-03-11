import express from 'express';
import { authenticateToken } from '../middlewares/login.js';
import { createUser, getUsers, getUserById, updateUser, deleteUser, loginUser, getUserPolicies, getUserClaims} from '../controllers/login.js';
// import {validate} from '../models/login.js';
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       username:
 *         type: string
 *       email:
 *         type: string
 */

/**
 * @swagger
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */


/**
 * @swagger
 * /login/post:
 *   post:
 *     summary: Create a new user
 *     description: Insert data into MongoDB
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/User' # Reference to the User definition
 *     responses:
 *       '200':
 *         description: Successfully created user
 *       '400':
 *         description: Bad request
 */

router.route('/post').post(createUser);


router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

/**
 * @swagger
 * /login/get:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: [] # Requires authentication token
 *     responses:
 *       '200':
 *         description: Successfully retrieved users
 *       '404':
 *         description: No users found
 */

router.route('/get').get(authenticateToken, getUsers);
/**
 * @swagger
 * /login/get/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: [] # Requires authentication token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved user
 *       '404':
 *         description: User not found
 */
router.route('/get/:id').get(authenticateToken, getUserById);
/**
 * @swagger
 * /login/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: [] # Requires authentication token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted user
 *       '404':
 *         description: User not found
 */
router.route('/delete/:id').delete(authenticateToken, deleteUser);
/**
 * @swagger
 * /login/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: [] # Requires authentication token
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/User' # Reference to the User definition
 *     responses:
 *       '200':
 *         description: Successfully updated user
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: User not found
 */
router.route('/update/:id').put(authenticateToken, updateUser);
/**
 * @swagger
 * /login/post/login:
 *   post:
 *     summary: Login user
 *     description: Authenticate user and generate token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - password
 *     responses:
 *       '200':
 *         description: Successfully logged in
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */

router.route('/post/login').post(loginUser);

router.route('/get/userpol/:username').get(getUserPolicies);

router.route('/get/userclaim/:username').get(getUserClaims);

export default router;

