import React, {Component} from 'react';
require('../../scss/style.scss');

class App extends Component {
  render() {
    return(
      <div>
        This is our app
        {this.props.children}
      </div>
    )
  }
}

export default App;
