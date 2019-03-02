import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import { Card } from 'react-bootstrap';
import EventCard from '../components/EventCard';

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
        <h2>1st Pane</h2>
        <p>This is the 1st pane, and this is the primary pane by default.</p>
        <p>Try to resize the window and see how size changes.</p>
        <pre>
          &lt;SplitterLayout primaryIndex={'{0}'} percentage&gt;{'\n'}
          &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
          &nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
          &lt;/SplitterLayout&gt;
        </pre>
        {/* <Lorem title="1st Pane" /> */}
      </div>
      <div className="my-pane">
      {
        cards.map(card => <EventCard img={card.img} title={card.title} body={card.body}></EventCard>)
      }
        
      </div>
    </SplitterLayout>
  );
}