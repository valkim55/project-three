const {Schema, model} = require('mongoose');

const ProductSchema = new Schema(
    {
        
        title: {
            type: String, 
            required: true, 
            unique: true
        },

        category: {
            type: String, 
            required: true
        },

        description: {
            type: String, 
            required: true
        },

        price: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true 
        },

        rating: {
            type: Number
        },

        reviews: {
            type: Number 

        },

        brand: {
            type: String 
        },

        productLink: {
            type: String
        },
        username: {
            type: String,
            required: true
        }



    }
);

const Product = model('Product', ProductSchema);
module.exports = {Product};