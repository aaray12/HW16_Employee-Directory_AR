import React, { Component } from "react";
import './App.css';
import GetEmployee from "./componets/getEmployee"
import employees from "./employees.json"

class App extends Component {
  state = {
    "employees": employees,
    "employeeList": employees
  };
  switchCountry = (country) => {
    let myemployeeList = [];
    if( country === "All"){
      myemployeeList = employees;
    }
    else if(country){
     myemployeeList = employees.filter( employee => employee.location.country === country)
    }
     this.setState({employeeList: myemployeeList})
  };
   sortYears = () => {
     console.log("Sorting")
     let myemployeeList = [];
     myemployeeList = this.state.employeeList.sort((a, b) => {
       return a.registered.age - b.registered.age
     });
     this.setState({employeeList: myemployeeList.reverse()})
     }
   
  render(){
    return (<GetEmployee employees = {this.state.employees} employeeList = {this.state.employeeList} switchCountry = {this.switchCountry} sortYears = {this.sortYears}/>)
  }
}

export default App;
