import React from "react";
import logo from "./logo.svg";
import { apps, newsLinks, redditLinks } from "./constants/links";
import { Container, Grid, Header } from "semantic-ui-react";
import ListLinks from "./components/listLinks";
import SubHeader from "./components/subheader";
import AppGrid from "./components/appGrid";
import "./App.css";

const App = () => (
  <div className="App">
    <SubHeader time={new Date()} />
  </div>
);

export default App;
