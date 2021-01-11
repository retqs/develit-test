import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Feed from './components/feed/FeedDataWrapper.container';

// This is a temp solution since we have only one page
// Router is here to make Link in BreadCrumbs works properly
// most of the types was missused for the simplicity sake
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Feed}></Route>
      </Switch>
    </Router>
  );
}

export default App;
