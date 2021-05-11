import React from "react";

function Customer(props) {
  const id = props.id;
  const name = props.name;
  const address = props.address;
  const companyName = props.companyName;
  const registrationDate = props.registrationDate;
  return (
    <div>
      <ul>
        <li>Id: {id};</li>
        <li>Name: {name};</li>
        <li>Address: {address};</li>
        <li>Company Name: {companyName};</li>
        <li>Registration Date: {registrationDate}</li>
      </ul>
    </div>
  );
}

export default Customer;
