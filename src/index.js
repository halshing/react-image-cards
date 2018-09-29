import React, { Component } from "react";
import { render } from "react-dom";
import dotenv from "dotenv";
import "./index.css";
import App from "./components/app";

dotenv.config();
render(<App />, document.getElementById("root"));
