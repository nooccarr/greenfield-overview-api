import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import {recordClick} from './components/related-products/ClickRecord.js'

window.onclick = (e) => {
    // console.log(window.location.search)
    // window.location.search = '?id=3'
    console.log(e.target.className)
    recordClick(e.target.className)
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);