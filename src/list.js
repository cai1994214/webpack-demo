import React, { Component } from 'react';
import ReactDom from 'react-dom';
class App extends Component {
  
  render() {
    return (
      <div>
          <span>this is list</span>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
