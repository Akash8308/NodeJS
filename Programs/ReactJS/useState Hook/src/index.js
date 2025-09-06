import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// import React from "react";

// function App() {
//   const [count, setCount] = React.useState(0);

//   const [red, green, blue] = [9, 132, 227];

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// }

// export default App;
