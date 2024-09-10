const Menu = require("./model");
const { validateMenu } = require("./validator");

module.exports.createMenu = async (req, res) => {
  try {
    const { value, error } = validateMenu(req.body);
    if (error) {
      res.send("Incorrect data !!! " + error);
      return;
    }
    const createdMenu = await Menu.create(value);
    res.send(createdMenu);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    if (menus === null) {
      res.send("There isn't any menu !!!");
      return;
    }
    res.send(menus);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.deleteMenu = async (req, res) => {
  try {
    const menuId = parseInt(req.params.id, 10);
    if (!menuId || menuId == ":id" || menuId <= 0) {
      res.sends("Incorrect data !");
      return;
    }
    const deletedMenu = await Menu.destroy({ where: { id: menuId } });
    res.status(200).json({ deletedMenu });
  } catch (error) {
    throw new Error(error);
  }
};
module.exports.updateMenu = async (req, res) => {
  try {
    const { description, weekday } = req.body;
    const updatedMenu = await Menu.update(
      { description, weekday },
      { where: { id: req.params.id } }
    );
    res.send(updatedMenu);
  } catch (error) {
    throw new Error(error);
  }
};
