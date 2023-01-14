// import the gql tagged template function
const { gql } = require("apollo-server-express");



// create our typeDefs
const typeDefs = gql`

  type Product {
    _id: ID!
    title: String
    price: String
  }

  input ProductInput {
    title: String
    price: String
  }

  type User {
    _id: ID!
    username: String
    email: String
    favoriteProducts: [Product]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    products(username: String): [Product]
    productByCategory(category: String!): [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveProduct(productData: ProductInput): User
    removeProduct(productId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
