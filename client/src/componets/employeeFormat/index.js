import React from "react";

function EmployeeFormat(props){
    return(
        <React.Fragment>
            <div>
             <h3>{props.employee.name.first} {props.employee.name.last}</h3>
             <img src = {props.employee.picture.medium}></img>
             <p>Email: {props.employee.email}</p>
             <p>Phone: {props.employee.cell}</p>
             <p>Location: {props.employee.location.country}</p>
             <p>Years with Company: {props.employee.registered.age}</p>
             </div>
        </React.Fragment>
    )
}
export default EmployeeFormat;