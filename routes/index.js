const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require("bluebird");
mongoose.connect("mongodb:localhost:27017/snakekiller");

const carSchema = new Schema({
  name:{type: String, required: true, unique: true},
  make:{String},
  color:{String},
  model:[{
    name:{String},
    year: Number
  }],
});

router.get('/', function(req, res){
  res.send("Hello");
});

module.exports = router;
