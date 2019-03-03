import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import { Card } from 'react-bootstrap';
import EventTab from '../components/EventTab';
import Calendar from './Calendar';
import events from '../data/events'
import "./Login.css";

// let cards = [
//   {
//     title: "Hi",
//     body: "1",
//     img: "btt"
//   },
//   {
//     title: "Hi2",
//     body: "2",
//     img: "btt"
//   },
//   {
//     title: "Hi3",
//     body: "13",
//     img: "bt"
//   }
// ]

export default function() {
  return (
    <SplitterLayout percentage>
      <div className="my-pane">
        <Calendar/>
      </div>

      <div className="my-pane">
      {
        events.map(event => <EventTab img={!!event.logo ? event.logo.url : ''} title={event.name.text} body={event.description.text}></EventTab>)
      }
      </div>
    </SplitterLayout>
  );
}