/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

import React from "react";
import ReactDOM from "react-dom";
import { SpaContainer } from "./components/SpaContainer";

ReactDOM.render(
    <React.StrictMode>
        <SpaContainer />
    </React.StrictMode>,
    document.getElementById("root")
);
