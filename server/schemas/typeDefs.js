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
    _id: ID!
    title: String
    description: String
    main_image: String
    price: String
    rating: Float
    ratings_total: Int
    brand: String
    link: String
    category: String
  }

 

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    products(username: String): [Product]
    product(category: String!): [Product]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(title: String!): Product
    removeProduct(productId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
