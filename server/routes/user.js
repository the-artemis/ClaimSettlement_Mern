import express from 'express';

import {createClaim, deleteClaim, getClaimById, getUser, updateClaim, updateClaimStatus, updateTpaClaimStatus} from '../controllers/user.js'


const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Claims
 *   description: API endpoints for managing claims
 */

/**
 * @swagger
 * definitions:
 *   Claim:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 */

/**
 * @swagger
 * /user/post/claim:
 *   post:
 *     summary: Create a new claim
 *     description: Insert data into MongoDB
 *     tags: [Claims]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Claim' # Reference to the Claim definition
 *     responses:
 *       '200':
 *         description: Successfully created claim
 *       '400':
 *         description: Bad request
 */
router.route('/post/claim').post(createClaim);
/**
 * @swagger
 * /user/get/claim:
 *   get:
 *     summary: Get all claims
 *     tags: [Claims]
 *     responses:
 *       '200':
 *         description: Successfully retrieved claims
 *       '404':
 *         description: No claims found
 */
router.route('/get/claim').get(getUser);

/**
 * @swagger
 * /user/get/claim/{id}:
 *   get:
 *     summary: Get a claim by ID
 *     tags: [Claims]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the claim to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully retrieved claim
 *       '404':
 *         description: Claim not found
 */
router.route('/get/claim/:id').get(getClaimById);
/**
 * @swagger
 * /user/delete/claim/{id}:
 *   delete:
 *     summary: Delete a claim by ID
 *     tags: [Claims]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the claim to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted claim
 *       '404':
 *         description: Claim not found
 */
router.route('/delete/claim/:id').delete(deleteClaim);

/**
 * @swagger
 * /user/update/claim/{id}:
 *   put:
 *     summary: Update a claim by ID
 *     tags: [Claims]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the claim to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Claim' # Reference to the Claim definition
 *     responses:
 *       '200':
 *         description: Successfully updated claim
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Claim not found
 */
router.route('/update/claim/:id').put(updateClaim);

router.route('/update/claimstatus/:id').put(updateClaimStatus);
router.route('/update/tpaclaimstatus/:id').put(updateTpaClaimStatus);


export default router;
