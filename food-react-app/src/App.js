import "./App.css";
import React from "react";
import Table from "./components/EventsTable.js";
//import HighLightsTable from "./components/Highlight.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Table/>
      </header>
    </div>
  );
}

export default App;
