import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { PRODUCT_BY_CATEGORY } from "../utils/queries";

import {
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

const SearchProduct = () => {
  const [category, setCategory] = useState("acne");
  const { loading, data } = useQuery(PRODUCT_BY_CATEGORY);
  useEffect(() => {
    if (data) {
      console.log(data);
      //   data.products.forEach((product) => {
      //     idbPromise("products", "put", product);
      //   });
    }
  }, [data, loading]);

  // const handleFormSubmit = async(event)=>{
  //     event.preventDefault();
  //     try {
  //         const {data} =
  //     } catch (error) {

  //     }
  // }
  return (
    <div>
      <Container>
        <h1>Search for Skincare!</h1>
        <Form>
          <Col xs={12} md={8}>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              {/* <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option> */}
            </Form.Select>
          </Col>
          <Col xs={12} md={4}>
            <Button type="submit" variant="success" size="lg">
              Submit Search
            </Button>
          </Col>
        </Form>
      </Container>

      <Container>
        <h2>results:</h2>
        <Card>
          <Card.Img alt="product bottle" />
          <Card.Body>
            <Card.Title>product title</Card.Title>
            <Card.Text>description</Card.Text>
            <Card.Text>price</Card.Text>
            <Button>add to faves</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default SearchProduct;
