import React from 'react';
import ReactDOM from 'react-dom';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/button';

import HorizontalSidebar from './components/Sidebar/js/HorizontalSidebar';
import * as serviceWorker from './serviceWorker';

const AdminPage = () => {
  return (
    <HorizontalSidebar />
  );
}

ReactDOM.render(<AdminPage />, document.getElementById('dashboard'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();