import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DnDCalendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default MyCalendar;

// export default function() {
// const localizer = BigCalendar.momentLocalizer(moment) 

//   return (
//     <SplitterLayout percentage>
//       <div className="my-pane">
//         <h2>1st Pane</h2>
//         <p>This is the 1st pane, and this is the primary pane by default.</p>
//         <p>Try to resize the window and see how size changes.</p>
//         <pre>
//           &lt;SplitterLayout primaryIndex={'{0}'} percentage&gt;{'\n'}
//           &nbsp;&nbsp;<strong>&lt;div&gt;1st&lt;/div&gt;</strong>{'\n'}
//           &nbsp;&nbsp;&lt;div&gt;2nd&lt;/div&gt;{'\n'}
//           &lt;/SplitterLayout&gt;
//         </pre>
//         {/* <Lorem title="1st Pane" /> */}
//       </div>
//       <div className="my-pane">
//       {
//         cards.map(card => <EventCard img={card.img} title={card.title} body={card.body}></EventCard>)
//       }
        
//       </div>
//     </SplitterLayout>
//   );
// }