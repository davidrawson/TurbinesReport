/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import { ReactApp } from "./components/ReactApp";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <ReactApp />
    </React.StrictMode>,
    document.getElementById("root")
);
