/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Operations related to Authentication
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Logging in website
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                  type: string
 *                  example: Jwt token
 *
 */
