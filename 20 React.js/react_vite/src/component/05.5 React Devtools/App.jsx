import React from "react";
import Card from "./Card";
import contacts from "./contact";
import Avatar from "./Avatar";

function ReactDevTools() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img={'https://picsum.photos/id/870/200/300'}></Avatar>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default ReactDevTools;
