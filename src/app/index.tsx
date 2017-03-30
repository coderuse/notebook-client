import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { Home } from './views/home';

ReactDOM.render(
  (
    <Router>
      <div className="container">
        <div className="header">
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>

        <div className="content">
          <Route path="/" component={Home} />
        </div>

        <div className="footer"></div>
      </div>
    </Router>
  ),
  document.getElementById('notebook')
);