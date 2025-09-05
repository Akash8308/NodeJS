import React from "react";
import LoginPage from "./LoginPage";

var isLoggedIn = false;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Welcome</h1> : <LoginPage />}
    </div>
  );
}

export default App;
