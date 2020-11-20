import React, { Component } from "react";
import './App.css';
import getEmployee from "./componets/getEmployee"
import employees from "./employees.json"

class App extends Componet {
  stste = {
    "employees": employees,
  }
  render(){
    return <getEmployee emplyees = {this.state.employees}/>
  }
}

export default App;
