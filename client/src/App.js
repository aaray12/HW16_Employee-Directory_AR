import React, { Component } from "react";
import './App.css';
import GetEmployee from "./componets/getEmployee"
import employees from "./employees.json"

class App extends Component {
  state = {
    "employees": employees,
  }
  render(){
    return (<GetEmployee employees = {this.state.employees}/>)
  }
}

export default App;
