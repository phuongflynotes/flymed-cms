import React from "react";
// import {Tooltip} from "@material-ui/core";
import { HeaderComponent } from "./Common/HeaderComponent";
import { FooterComponent } from "./Common/FooterComponent";
import "./css/App.css";
// import {StationComponent} from "./stationSelection";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div>
      <header>
        <HeaderComponent />
      </header>
      <main id="root">
        <AppRouter />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
