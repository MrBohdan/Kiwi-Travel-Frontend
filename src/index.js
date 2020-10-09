import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {
//     UpperFeed,
//     MiddleFeed,
//     FooterContainer
// } from './components/feed/index';

import HorizontalSidebar from './components/Sidebar/js/HorizontalSidebar';
const Index = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="container-body">
                <HorizontalSidebar />
                {/* <UpperFeed />
                <MiddleFeed />
                <FooterContainer /> */}
            </div>
        </Suspense>
    );
}
ReactDOM.render(<Index
/>, document.getElementById('index'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();