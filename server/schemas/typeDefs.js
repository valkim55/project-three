// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
  }

  type Product {
    productId: ID!
    title: String
    description: String
    main_image: String
    price: String
    rating: Int
    ratings_total: Int
    brand: String
    link: String
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    removeProduct(productId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
