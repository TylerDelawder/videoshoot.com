import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CurrentWeather from "./currentweather";
import forecast from "./forecast";
import home from "./home";


// function Index() {
//   return <h2>Home</h2>;
// }

// function CurrentWeather() {
//   return <h2>Current Weather</h2>;
// }

// function Forecast() {
//   return <h2>Users</h2>;
// }

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/src/home">Home</Link>
            </li>
            <li>
              <Link to="/src/currentweather">Current Weather</Link>
            </li>
            <li>
              <Link to="/src/forecast">Forceast</Link>
            </li>
          </ul>
        </nav>

        <Route path="/src/home" exact component={home} />
        <Route path="/src/currentweather" component={CurrentWeather} />
        <Route path="/src/forecast" component={forecast} />
      </div>
    </Router>
  );
}

export default AppRouter;
