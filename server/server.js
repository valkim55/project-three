const express = require("express");
// import ApolloServer
const { ApolloServer } = require("apollo-server-express");
const path = require('path');

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
//import middleware
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const jsonData = require("./seeders/seeds.json");



const PORT = process.env.PORT || 8080;
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.get("/categories/:category", (req, res) => {
  console.log(req.params.category);
  //console.log(jsonData)
  const filteredData = jsonData.filter((product) => {
    //console.log(product)
    return product.category === req.params.category;
  });
  return res.json({ filteredData });
});

app.get("/me/:favoriteProducts", (req, res) => {
  console.log(req.params._id);
  const filteredProducts = jsonData.filter((product) => {
    return product._id === req.params._id;
  });
  return res.json({filteredProducts});
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(process.env.PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);