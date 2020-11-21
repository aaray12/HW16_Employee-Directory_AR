import React from "react";
import EmployeeFormat from "../employeeFormat"

function  GetEmployee(props) {
  console.log(props)
  return (
    <React.Fragment>
      <h1>Employee List:</h1>
      <ul>
        {props.employees.map(employee => {
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