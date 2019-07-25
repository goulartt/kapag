var mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  cnpj: {
    type: String,
    index: true
  }
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = {
  Company
}