import React from "react";
import Card from "./Card.jsx"
import contacts from "../contacts.js"
import Avatar from "./Avatar.jsx";


function createCard(contact)
{
  return <Card
  key = {contact.id} 
  name = {contact.name}
  image = {contact.imgURL}
  tel = {contact.phone}
  email = {contact.email}/>
}


function App() {
  return(
    <div>
     <Avatar image = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg"/>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
 
}

export default App;
