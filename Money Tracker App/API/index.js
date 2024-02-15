const express = require("express");
const cors = require("cors");
const mongooes = require("mongoose");
const Transaction = require("./Models/transaction.js");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json("test ok")
})

// console.log(process.env.MONGODB_URL);
app.post('/api/transaction', async (req, res) => {
    await mongooes.connect(process.env.MONGODB_URL);
    const { price, name, description, date } = req.body;
    const transaction = await Transaction.create({ price, name, description, date });
    res.json(transaction);
})

app.get('/api/trasactions', async (req, res) => {
    await mongooes.connect(process.env.MONGODB_URL);
    const trasaction = await Transaction.find();
    res.json(trasaction);
})

app.listen(4000)
// 