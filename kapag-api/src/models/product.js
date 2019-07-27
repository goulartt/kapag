var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  price: mongoose.Decimal128,
  company: {
    type: String,
    index: true
  },
  enterPrice: mongoose.Decimal128
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = {
  Product
}