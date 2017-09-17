import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App2(props) {
  return <button onClick={props.func}>{props.name}</button>
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      list: ["a", "b", "c"]
    };
  }

  clickMe = () => this.setState(
    {counter: this.state.counter + 1}
  );

  render() {
    /**
     *  używamy metody ponieważ React nie widzi takiej zmiany
     */
    this.state.conter = 7;
    const name = "Aga";
    let ul=this.state.list.map((e)=>{
      return <li key={e}>{e}</li>
    });
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}, {this.state.counter}
        </p>
        <button onClick={this.clickMe}>Text</button>
        <App2 name={this.props.name} func={this.clickMe} />
        <div>{this.state.list}</div>
        <ul>{ul}</ul>
      </div>
    );
  }
}

export default App;
