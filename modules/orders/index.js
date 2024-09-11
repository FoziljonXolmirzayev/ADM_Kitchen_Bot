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
    throw new Error(error);
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id, 10);

    if (!orderId || orderId == ":id" || orderId <= 0) {
      res.sends("Incorrect data !");
      return;
    }

    const deletedOrder = await Order.destroy({ where: { id: orderId } });
    res.json({ deletedOrder });
  } catch (error) {
    throw new Error(error);
  }
};
