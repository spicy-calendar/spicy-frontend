import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';

const EventCard = (props) => (
  <Card style={{ width: '100rem' }}>
    {
      !!props.img &&
      <Card.Img class="listUnstyled" src={props.img} />
    }
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text> {props.body}</Card.Text>
      <Button variant="primary">Invite Friend</Button>
    </Card.Body>
  </Card>
)

// const style = {
//   width: "25%",
//   height: "auto"
// }

export default EventCard;