import React from "react";

const CustomerPanel = () => {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [registrationDate, setRegistrationDate] = React.useState("");
  const [newCustomers, setNewCustomers] = React.useState([]);

  const addCustomer = () => {
 
    var newCust = newCustomers;
   
    var cust = { keyId:id , toDisplayId:id, toDisplayName:name, toDisplayAddress:address,  toDisplayCompanyName:companyName, toDisplayRegistrationDate:registrationDate};
  
    newCust.push(cust); 
    setNewCustomers(newCust);
    console.log(id);
  }
 
  const handleClick = (event) => {
    addCustomer(id, name, address);
  
    event.preventDefault();
    setId("");
    setName("");
    setAddress("");
    setCompanyName("");
    setRegistrationDate("");
  }

  const listNewCustomers = newCustomers.map((e) =>
<tr> 
  <td key={e.id}>{e.toDisplayId}</td>
  <td >{e.toDisplayName}</td>
   <td >{e.toDisplayAddress}</td>
</tr> 
  );
      
  return (
    <div>
      <label>
        <h3>Details:</h3>

        <input type="text" placeholder="Id" id="id" value={id} onChange={e => setId(e.target.value)}/>
        <input type="text" placeholder="Name" id="name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder="Address" id="address" value={address} onChange={e => setAddress(e.target.value)}/>
        <input type="text" placeholder="Comapny name" id="companyName" value={companyName} onChange={e => setCompanyName(e.target.value)}/>
        <input type="text" placeholder="Registration date" id="registrationDate" value={registrationDate} onChange={e => setRegistrationDate(e.target.value)}/>
      </label>
      
      <button onClick={handleClick}>Click to see the data</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Comany name</th>
            <th>Registration date</th>
          </tr>
        </thead>
        <tbody >{listNewCustomers}
         
             
        </tbody>
      </table>
    </div>
  );
};

export default CustomerPanel;

