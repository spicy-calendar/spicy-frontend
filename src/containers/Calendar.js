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
    // this.setState(state => {
    //   state.events[0].start = start;
    //   state.events[0].end = end;
    //   return { events: state.events };
    // });
    for(let i = 0; i < this.state.events.length; i++){
        if(this.state.events[i] === event) {
            this.setState(state => {
                const newEvent = {
                    start,
                    end,
                    title: event.title
                }
                return {
                    events: [...state.events.slice(0, i), newEvent, ...state.events.slice(i+1)]
                }
            });
            break;
        }
    }
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    for(let i = 0; i < this.state.events.length; i++){
        if(this.state.events[i] === event) {
            this.setState(state => {
                const newEvent = {
                    start,
                    end,
                    title: event.title
                }
                return {
                    events: [...state.events.slice(0, i), newEvent, ...state.events.slice(i+1)]
                }
            });
            break;
        }
    }

    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
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