/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to Users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users information
 *     tags: [Users]
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
 *                  example: id of user
 *                 name:
 *                   type: string
 *                   example: name of user
 *                 tableId:
 *                  type: string
 *                  example: tableId of user
 *                 role:
 *                  type: string
 *                  default: USER
 *                 telegramId:
 *                  type: integer
 *                  example: telegramId of user
 *                 createdAt:
 *                  type: Date
 *                  example: Created time of menu
 *                 updatedAt:
 *                  type: Date
 *                  example: Updated time of menu
 */

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create user
 *     tags: [Users]
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
 *                  example: id of user
 *                 name:
 *                   type: string
 *                   example: name of user
 *                 tableId:
 *                  type: string
 *                  example: tableId of user
 *                 role:
 *                  type: string
 *                  default: USER
 *                 telegramId:
 *                  type: integer
 *                  example: telegramId of user
 *                 createdAt:
 *                  type: Date
 *                  example: Created time of menu
 *                 updatedAt:
 *                  type: Date
 *                  example: Updated time of menu
 */

/**
 * @swagger
 * /user/update/:id:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedUser:
 *                  type: integer
 *                  example: index of update
 *
 */

/**
 * @swagger
 * /user/delete/:id:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedUser:
 *                  type: integer
 *                  example: index of delete
 */

/**
 * @swagger
 * /send:
 *   post:
 *     summary: Send menu to all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 description:
 *                   type: string
 *                   example: description of menu
 *                 weekday:
 *                  type: string
 *                  example: day of week
 */
