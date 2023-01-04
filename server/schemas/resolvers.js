const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return user;
      }
      throw new AuthenticationError("User not logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
        console.log(args);
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        throw new AuthenticationError(error);
      }
    },

    login: async (parent, args) => {
      const user = await User.findOne({ email: args.email });
      if (!user) {
        throw new AuthenticationError("Incorrect email!");
      }
      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
