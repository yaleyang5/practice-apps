import React from "react";
import { render } from "react-dom";
import App from './components/App.jsx';

render(
  <div>
    <h1>Multistep Checkout</h1>
    <App cookie={document.cookie}/>
  </div>,
  document.getElementById("root")
);
