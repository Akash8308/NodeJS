import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <div>
        <h1>My Contacts</h1>
        <Card
          name={contacts[0].name}
          imgURL={contacts[0].imgURL}
          contactNum={contacts[0].phone}
          contactEmail={contacts[0].email}
        />
        <Card
          name={contacts[1].name}
          imgURL={contacts[1].imgURL}
          contactNum={contacts[1].phone}
          contactEmail={contacts[1].email}
        />
        <Card
          name={contacts[2].name}
          imgURL={contacts[2].imgURL}
          contactNum={contacts[2].phone}
          contactEmail={contacts[2].email}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
