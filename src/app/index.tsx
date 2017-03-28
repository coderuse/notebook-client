/// <reference path="../../typings/index.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import browserHistory from './browserHistory';

import { NotebookApp } from './components/notebook';
import { Home } from './views/home';

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={NotebookApp}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  ),
  document.getElementById('notebook')
);