import React from "react";
// import {Tooltip} from "@material-ui/core";
import { Router } from "react-router-dom";
import { HeaderComponent } from "./Common/HeaderComponent";
import { FooterComponent } from "./Common/FooterComponent";
import "./css/App.css";
// import {StationComponent} from "./stationSelection";
import AppRouter from "./AppRouter";
import history from './history';


function App() {
  return (
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main id="root">
      <Router history={history}>
        <AppRouter />
      </Router>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
