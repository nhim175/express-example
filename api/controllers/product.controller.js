var Product = require('../../models/product.model');

module.exports.index = async function(req, res) {
  var products = await Product.find();
  res.json(products);
};
