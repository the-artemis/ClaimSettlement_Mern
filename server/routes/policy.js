import express from 'express';
import { createPolicy, getPolicies, getPolicyById, updatePolicy, deletePolicy } from '../controllers/policy.js';
 const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Policies
 *   description: API endpoints for managing policies
 */


/**
 * @swagger
 * definitions:
 *   Policy:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 */


/**
 * @swagger
 * /policy/post:
 *   post:
 *     summary: Create a new policy
 *     description: isert data into mongoDB
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Policy'
 *     responses:
 *       '201':
 *         description: Successfully created policy
 *       '400':
 *         description: Bad request
 */

router.route('/post').post(createPolicy);

/**
 * @swagger
 * /policy/get:
 *   get:
 *     summary: Get all policies
 *     tags:
 *       - Policies
 *     responses:
 *       '200':
 *         description: Successfully retrieved policies
 *       '404':
 *         description: No policies found
 */
router.route('/get').get(getPolicies);
/**
 * @swagger
 * /policy/get/{id}:
 *   get:
 *     summary: Get a policy by ID
 *     tags:
 *       - Policies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the policy to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved policy
 *       '404':
 *         description: Policy not found
 */
router.route('/get/:id').get(getPolicyById);
/**
 * @swagger
 * /policy/delete/{id}:
 *   delete:
 *     summary: Delete a policy by ID
 *     tags:
 *       - Policies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the policy to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted policy
 *       '404':
 *         description: Policy not found
 */
router.route('/delete/:id').delete(deletePolicy);
/**
 * @swagger
 * /policy/update/{id}:
 *   put:
 *     summary: Update a policy by ID
 *     tags:
 *       - Policies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the policy to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Policy' # Reference to the Policy definition
 *     responses:
 *       '200':
 *         description: Successfully updated policy
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Policy not found
 */
router.route('/update/:id').put(updatePolicy);

export default router;
