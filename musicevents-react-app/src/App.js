import "./App.css";
import React from "react";
import EventsTable from "./components/EventsTable.js";
import HighLightsTable from "./components/HighlightsTable.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>

            <li>
              <Link to="/events/monday">Monday</Link>
            </li>

            <li>
              <Link to="/events/tuesday">Tuesday</Link>
            </li>

            <li>
              <Link to="/events/wednesday">Wednesday</Link>
            </li>
            <li>
              <Link to="/events/thursday">Thursday</Link>
            </li>
            <li>
              <Link to="/events/friday">Friday</Link>
            </li>
            <li>
              <Link to="/events/saturday">Saturday</Link>
            </li>
            <li>
              <Link to="/events/sunday">Sunday</Link>
            </li>

            <li>
              <Link to="/highlights">Top groups</Link>
            </li>

          </ul>
        </nav>

        <div className="App">
          <section>
            <Switch>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/events/:id">
                <EventsTable />
              </Route>

              {/* <Route path="/events">
                <Redirect to={`/`} />
              </Route> */}
              {/* default */}
              {/* <Redirect to={`/events/${moment().format('YYYY-MM-DD')}`} /> */}

              <Route path="/highlights">
                <h1>Top groups</h1>
                Click at the button to reload the page and see the top groups list!
                <HighLightsTable />
              </Route>

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. Please explore
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>About us</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}


export default App;