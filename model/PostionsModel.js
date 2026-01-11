const {model} = require("mongoose");
const {PositionsSchema} = require('../schemas/PositionsSchema');

const PositionsModels = new model("position",PositionsSchema);

module.exports = {PositionsModels}