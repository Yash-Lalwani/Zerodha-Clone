const { model, Model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = new model("Order", OrdersSchema);

module.exports = { OrdersModel };
