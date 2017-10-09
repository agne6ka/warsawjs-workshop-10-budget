import React, {Component} from 'react';

class HelloStateful extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }

  clickMe = () => this.setState(
    {counter: this.state.counter + 1}
  );

  render(){
    const {counter} = this.state;

    return (
      <div>
        <p className="App-intro">
          {this.state.counter}
        </p>
        <button onClick={this.clickMe}>Increment</button>
        <button onClick={this.clickMe}>Decrement</button>
      </div>
    )
  }
}

export default HelloStateful;