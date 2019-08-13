import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
      
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends React.Component {

  render(){
    return(
      <div>
          <Calculator />
      </div>
    )
  }
}

class Calculator extends React.Component{
  state = {
    count: [],
    keys: [
      {key: "Clear", keyclass: "clearButton"},
      {key: "/", keyclass: "operatorButton"},
      {key: "7", keyclass: "numberButton"},
      {key: "8", keyclass: "numberButton"},
      {key: "9", keyclass: "numberButton"},
      {key: "*", keyclass: "operatorButton"},
      {key: "4", keyclass: "numberButton"},
      {key: "5", keyclass: "numberButton"},
      {key: "6", keyclass: "numberButton"},
      {key: "-", keyclass: "operatorButton"},
      {key: "1", keyclass: "numberButton"},
      {key: "2", keyclass: "numberButton"},
      {key: "3", keyclass: "numberButton"},
      {key: "+", keyclass: "operatorButton"},
      {key: "0", keyclass: "numberButton zero"},
      {key: "=", keyclass: "operatorButton"},
    ]
  }

  number = name => {
    if (name === "Clear"){
      this.setState({ count: [] })
    }
    else if (name === "="){
      this.setState(prevState => ({
        count: [eval(prevState.count.join(""))]
      }))
     
    } else {
      this.setState(prevState => ({
        count: [...prevState.count, name]
      }))
    }
  }

  render(){
    return(
      <div className="wrapper">
      <div className="Calculator">
      <p> {this.state.count} </p>
      <div className="row">
        <div className="Keypad"> 
          {this.state.keys.map(keys =>{
            return(
              <button className={keys.keyclass} onClick={() => this.number(keys.key)}> {keys.key} </button>
            )
          })}
          </div>
        </div>
      </div>
      </div>
    )

  }
}



export default App;
