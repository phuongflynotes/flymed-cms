import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Station from "./Station/Station";
import SearchExistingUsers from "./Users/UserManagement/SearchExistingUsers";
import SearchUsers from "./Users/UserManagement/SearchUsers";
import SearchResults from "./Users/UserManagement/SearchResults";
import SitePreferences from "./Users/UserManagement/SitePreferences";
import UserDetails from "./Users/UserDetails";

interface routerState {
  url: string;
}

const history = createBrowserHistory();

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SearchExistingUsers} />
          <Route exact path="/user-details" component={UserDetails} />
          {/* <Route exact path="/station" component={Station} /> */}
          {/* <Route exact path="/UserAdmin" component={SearchExistingUsers} /> */}
          {/* <SearchResults /> */}
          {/* <SearchUsers /> */}
          <SitePreferences />
        </Switch>
      </Router>
    );
  }
}
