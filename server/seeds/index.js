const db = require("../config/connection");
const { Product } = require("../models");
const productData = require("./seeds.json");

const importData = async () => {
  try {
    await Product.create(productData);
    console.log("success");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

importData();
