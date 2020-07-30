import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Station from "./Station/Station";
import SearchExistingUsers from "./Users/UserManagement/SearchExistingUsers";
import SearchUsers from "./Users/UserManagement/SearchUsers";
import SearchResults from "./Users/UserManagement/SearchResults";

interface routerState {
  url: string;
}

const history = createBrowserHistory();

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/station" component={Station} /> */}
          {/* <Route exact path="/UserAdmin" component={SearchExistingUsers} /> */}
          <SearchResults />
          <SearchUsers />
        </Switch>
      </Router>
    );
  }
}
