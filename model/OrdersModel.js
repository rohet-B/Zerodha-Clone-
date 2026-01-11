const {model} = require("mongoose");
const {OrdersSchema} = require('../schemas/OrdersSchema');

const OrdersSchemaModel = new model("order",OrdersSchema);

module.exports = {OrdersSchemaModel}