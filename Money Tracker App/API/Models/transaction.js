const mongooes = require("mongoose");
const {model, Schema} = mongooes;

const TransactionSchema = new Schema({
    price: {type: Number, require:true},
    name: {type: String, require:true},
    description: {type: String, require:true},
    date: {type: Date, require:true}
})

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;