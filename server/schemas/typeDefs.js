// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  

  type Product {
    _id: ID!
    title: String
    category: String
    description: String
    image: String
    price: String
    rating: Int
    reviews: Int
    brand: String
    productLink: String
    username: String
  }

  type User {
    _id: ID
    username: String
    email: String
    favProducts: [Product]
  }

  

  type Query {
    me: User
    user(username: String!): User
    products(username: String): [Product]
    product(category: String!): Product
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(title: String!): Product
       
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
