var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  cnpj: {
    type: String,
    index: true
  }
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = {
  Product
}