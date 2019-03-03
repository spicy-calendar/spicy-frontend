import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';

const EventCard = (props) => (
  <Card style={{ width: '100rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text> {props.body}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
)

export default EventCard;