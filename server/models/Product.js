const {Schema, model, Types} = require('mongoose');

const ProductSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId
        },

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
        }



    }
);

const Product = model('Product', ProductSchema);
module.exports = Product;