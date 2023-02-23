import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";

/*
const notes = [
  {
    id: 1,
    content: "HTML is sooo easy",
    important: true,
  },
  {
    id: 2,
    content: "The browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most fabulous HTTP protocol methods",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App notes={notes} />
);
*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
