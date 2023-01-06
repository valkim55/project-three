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
    image: String
    price: String
    rating: Int
    reviews: Int
    brand: String
    productLink: String
  }

  input ProductInput {
    
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
    saveProduct(productData: Product!): User
    removeProduct(productId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
