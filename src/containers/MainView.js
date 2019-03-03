import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import { Card } from 'react-bootstrap';
import EventTab from '../components/EventTab';
import Calendar from './Calendar';

let cards = [
  {
    title: "Hi",
    body: "1",
    img: "btt"
  },
  {
    title: "Hi2",
    body: "2",
    img: "btt"
  },
  {
    title: "Hi3",
    body: "13",
    img: "bt"
  }
]

export default function() {
  return (
    <SplitterLayout percentage>
      <div className="my-pane">
        <Calendar/>
      </div>
      <div className="my-pane">
      {
        cards.map(card => <EventTab img={card.img} title={card.title} body={card.body}></EventTab>)
      }
        
      </div>
    </SplitterLayout>
  );
}