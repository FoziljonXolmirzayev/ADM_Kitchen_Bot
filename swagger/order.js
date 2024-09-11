/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Operations related to Orders
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders information
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                  type: integer
 *                  example: id of order
 *                 menuId:
 *                   type: integer
 *                   example: id of order
 *                 userId:
 *                  type: integer
 *                  example: id of order
 *                 isCanceled:
 *                  type: boolean
 *                  default: false
 *                 createdAt:
 *                  type: Date
 *                  example: Created time of menu
 *                 updatedAt:
 *                  type: Date
 *                  example: Updated time of menu
 */

/**
 * @swagger
 * /order/delete/:id:
 *   delete:
 *     summary: Delete order
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedOrder:
 *                  type: integer
 *                  example: index of delete
 */
