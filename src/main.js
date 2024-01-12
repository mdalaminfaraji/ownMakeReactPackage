// console.log("first");
// console.log(React);
// console.log("Dom", ReactDOM);
import { hello } from "./another";
// const root = document.getElementById("root");
// root.innerText = "Hello world";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// const App = () => {
//   return React.createElement(
//     "h1",
//     { style: { color: "red" } },
//     "hello world somethon owe ",
//     hello()
//   );
// };
// const Ant = () => {
//   return <h1>How are you</h1>;
// };
// const App = () => {
//   return (
//     <React.Fragment>
//       <Ant />
//       <div>Hellow</div>
//     </React.Fragment>
//   );
// };
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(React.createElement(App));
root.render(<App />);
