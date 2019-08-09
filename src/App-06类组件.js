import React, {Component} from 'react';

class App extends Component {
  state = {  
    msg: 1000
  }

  render() { 
    return (  
      <div className="app">
        <h3> {this.state.msg} </h3>
      </div>
    );
  }
}

export default App;
