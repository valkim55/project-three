const mongoose = require('mongoose');
const db = require("../config/connection");
const {Product} = require("../models/Product");
const productData = require("./products.json");



const importData = async () => {
  try {
    db.dropDatabase(
        'deploy-skincare.products', function(err, result) {
            console.log('db dropped')
        }
    )
    const products = await Product.create(productData);
    console.log("success", products);
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

importData();
