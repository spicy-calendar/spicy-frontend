import React, { Component } from "react";
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

class EventTab extends Component{
  constructor(props){
    super(props);
    
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    const events = await axios.get('localhost:3000/get-daily-events');
    this.setState({events});
  }

  render(){
    return (
      <Card style={{ width: '100rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text> {props.body}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default EventTab;

// export default class EventCards extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//     }
//   }

//   render() {
//     return(
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//         <Card.Title>{this.props.title}</Card.Title>
//         <Card.Text> Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//       </Card>
//     );
//   }

// }
