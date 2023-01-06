import React, { useState, useEffect } from "react";
import {
    
    Container,
    Col,
    Form,
    Button,
    Card,
    CardColumns,
} from "react-bootstrap";


const SearchProduct = () => {
  return (
    <div>
        <Container>
            <h1>Search for Skincare!</h1>
            <Form onSubmit=''>
                <Col xs={12} md={8}>
                    <Form.Control 
                        name='searchInput' 
                        value=''
                        placeholder="use keywords to search, ex. 'oily' "
                        onChange=''
                        type='text'
                        size='lg'
                    />
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
            <Card >
                <Card.Img alt='product bottle' />
                <Card.Body>
                    <Card.Title>product title</Card.Title>
                    <Card.Text>description</Card.Text>
                    <Card.Text>price</Card.Text>
                    <Button>add to faves</Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default SearchProduct