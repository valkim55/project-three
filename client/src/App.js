import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Signupform from "./components/Signupform";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="">
        <Header />
        <Signupform />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
