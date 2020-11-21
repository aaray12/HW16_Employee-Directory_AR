import React from "react";
import EmployeeFormat from "../employeeFormat"

function  GetEmployee(props) {
  console.log(props)
  //return all employee's countries to an array sorted alphabetically
  var mappedCountries = props.employees.map( employee => employee.location.country).sort()
  // filters the array so there are no duplicate countries
   mappedCountries = mappedCountries.filter((item, index) => mappedCountries.indexOf(item) === index)
  
  //  let employeeList =props.employees.filter( employee => employee.location.country === "Australia");
  
  //  props.employees = props.employees.filter( employee => employee.location.country === )
  return (
    <React.Fragment>
      <div>
      Select Country 
        <select class="form-control" id = "country" onChange ={e => props.switchCountry(e.target.value)}>
          <option>All</option>
         {mappedCountries.map( employee => <option>{employee}</option>)}
        </select>
      </div>
      <h1>Employee List:</h1>
      <ul>
        {props.employeeList.map(employee => {
          return( <li>
            <EmployeeFormat employee = {employee} ></EmployeeFormat>
           </li>)
        })
       }
      </ul>
    </React.Fragment>
  )
}
export default GetEmployee;