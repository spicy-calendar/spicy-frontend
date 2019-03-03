import React from 'react';
import SplitterLayout from 'react-splitter-layout';

class Splitter extends React.Component {
  render() {
    return (
      <SplitterLayout>
        <div>Pane 1</div>
        <div>Pane 2</div>
        <div>Pane 3</div>
      </SplitterLayout>
    );
  }
}

export default Splitter;