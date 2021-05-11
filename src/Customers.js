import React from "react";

const CustomerPanelCopy = () => {
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [registrationDate, setRegistrationDate] = React.useState("");

  const handleClick = event => {
    alert(
      "Your data was read:\nId: " + id + "\nName: " + name + "\nAddress: " + address + "\nCompany name: " + companyName + "\nRegistration date: " + registrationDate
    );
    event.preventDefault();

    setId("");
    setName("");
    setAddress("");
    setCompanyName("");
    setRegistrationDate("");
  };

  return (
    <div>
      <label>
        <h3>Customer details:</h3>
        <input type="text" placeholder="Id" value={id} onChange={e => setId(e.target.value)}/>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)}/>
        <input type="text" placeholder="Comapny name" value={companyName} onChange={e => setCompanyName(e.target.value)}/>
        <input type="text" placeholder="Registration date" value={registrationDate} onChange={e => setRegistrationDate(e.target.value)}/>
      </label>
      <button onClick={handleClick}>Click to see the data</button>
    </div>
  );
};

export default CustomerPanelCopy;