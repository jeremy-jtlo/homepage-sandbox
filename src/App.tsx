import React from "react";
import logo from "./logo.svg";
import { apps, newsLinks, redditLinks } from "./constants/links";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <p>here is the first app: {apps[0][0].name}</p>
      <p>here is the first news: {newsLinks.sites[0].key}</p>
      <p>here is the first reddit: {redditLinks.sites[0].key}</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
