var mongoose = require('mongoose');

var StoresSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    itemName: String,
    itemPrice: String,
    category: String,
    description: String
});

module.exports = mongoose.model('Store', StoresSchema);