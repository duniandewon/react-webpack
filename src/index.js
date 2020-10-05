import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxProvider from './redux/ReduxProvider';
import App from './App';

import './styles/index.scss';

ReactDOM.render(
  <ReduxProvider>
    <Router>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);
