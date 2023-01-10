const { Product } = require("../models/Product");
const {User} = require('../models/User')
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { populate } = require("../models/User");

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select(' -__v -password')
                    .populate('favProducts')
                    
                console.log('authentication successful')
                return userData;
            }

            throw new AuthenticationError('Not logged in')
        },

        products: async () => {
            return Product.find().sort({ title: 1});
        }, 

        product: async (parent, { _id }) => {
            return Product.findOne({_id});
        },

        user: async (parent, { username }) => {
            return User.findOne({username})
            .select(' -__v -password')
            .populate('favProducts');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            
            const user = await User.create(args);
            const token = signToken(user);
            console.log('trying to add user')
            return { token, user };
            
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
            throw new AuthenticationError("Incorrect email!");
            }
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
            throw new AuthenticationError("Incorrect credentials");
            }
            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;
