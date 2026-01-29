
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {Button,NavDropdown,Navbar,Container,Nav,Col, Row,Image, Card, } from "react-bootstrap";



function App() {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <Image src='https://cdn.pixabay.com/photo/2022/05/22/18/25/spain-7214284_960_720.jpg' fluid rounded/>
        </Col>
        <Col sm={5}>
          <h1 class="font-weigh-light" >Tagline</h1>
          <p class="mt-4"> 
I want to get at least 2 cards on the same row but since the data is getting mapped one by one, I have no idea how to do so. I am using a custom component named 'Content' and returning data here</p>
        <Button variant="outline-primary">call me</Button>
        </Col>
      </Row>
      <Row>
      <Card className="text-center bg-secondary text-white my-5 py-4">
        <Card.Body>
        This project is a port of https://github.com/Eonasdan/bootstrap-datetimepicker for React.js
        </Card.Body>

      </Card>
      </Row>
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  </div>
  )
}
  
   
    
    
   
export default App;
