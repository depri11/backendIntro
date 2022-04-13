const models = require("../models/products");
const response = require("../helpers/response");
const product = {};

product.getAll = async (req, res) => {
  try {
    const data = await models.getData();
    return response(res, 200, data);
  } catch (error) {
    return response(res, 500, error);
  }
};

product.Create = async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const data = await models.addData({ name, price, category });
    res.send({ data });
  } catch (error) {
    res.send("Maaf error terjadi");
  }
};

module.exports = product;
