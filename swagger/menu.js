/**
 * @swagger
 * tags:
 *   name: Menu
 *   description: Operations related to Menu
 */

/**
 * @swagger
 * /menus:
 *   get:
 *     summary: Get all menus information
 *     tags: [Menu]
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
 *                  example: id of menu
 *                 description:
 *                   type: string
 *                   example: description of menu
 *                 weekday:
 *                  type: string
 *                  example: day of week
 *                 isDeleted:
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
 * /menu/create:
 *   post:
 *     summary: Create menu
 *     tags: [Menu]
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
 *                  example: id of menu
 *                 description:
 *                   type: string
 *                   example: description of menu
 *                 weekday:
 *                  type: string
 *                  example: day of week
 *                 isDeleted:
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
 * /menu/update/:id:
 *   put:
 *     summary: Update menu
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deletedMenu:
 *                  type: integer
 *                  example: index of delete
 */

/**
 * @swagger
 * /menu/delete/:id:
 *   delete:
 *     summary: Delete menu
 *     tags: [Menu]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 updatedMenu:
 *                  type: integer
 *                  example: index of update
 */
