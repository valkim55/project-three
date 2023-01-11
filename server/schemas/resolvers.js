const { User, Product } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

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
        return Product.find().sort();
    }, 

    productByCategory: async (parent, { category }) => {
        return Product.find({category});
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
    },

    addProduct: async (parent, args, context) => {

        // check if the user is authenticated to be allowed to save products
        if(context.user) {

            // find product by its title
            const product = await Product.findOne(args.title, {username: context.user.username});

            // update User by adding selected product to user's products array
            await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: {favProducts: product._id} },
                { new: true }
            );

            return product;
        }

        throw new AuthenticationError('You need to be logged in to save products!')
    },

    removeProduct: async (parent, { productId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedProducts: { productId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
