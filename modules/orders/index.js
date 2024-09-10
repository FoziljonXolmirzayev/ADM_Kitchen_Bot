const { Op } = require("sequelize");
const Order = require("./model");

module.exports.getOrders = async (req, res) => {
  try {
    const today = new Date();

    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    const orders = await Order.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
        isCanceled: false,
      },
    });
    res.send(orders);
  } catch (error) {
    console.error("Error fetching orders: ", error);
    throw error;
  }
};
