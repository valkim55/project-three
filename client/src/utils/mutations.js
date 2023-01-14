import {gql} from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($productId: ID!) {
    addProduct(productId: $productId) {
      _id
      username
      favoriteProducts {
        _id
        title
        main_image
        price
        rating
        ratings_total
        brand
        link
      }
    }
  }
`;