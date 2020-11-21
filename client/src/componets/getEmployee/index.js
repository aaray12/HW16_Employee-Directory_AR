import React from "react";
import EmployeeFormat from "../employeeFormat"

function  GetEmployee(props) {
  console.log(props)
  return (
    <React.Fragment>
      <h1>test{props.employees[0].email}</h1>
      <ul>
        <li>
          <EmployeeFormat employee = {props.employees[0]}></EmployeeFormat>
        </li>
      </ul>
    </React.Fragment>
  )
}
export default GetEmployee;