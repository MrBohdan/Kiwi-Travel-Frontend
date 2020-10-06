import React, { Component } from 'react';
import {
    BsHouseDoor,
    BsPencilSquare,
} from 'react-icons/bs';
import {
    FaDoorOpen,
} from 'react-icons/fa';
import { IconContext } from "react-icons";
import Post from '../../post/js/Post';
import Dashboard from '../../dashboard/js/Dashboard';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../../store'

import '../scss/_home.scss';

class HorizontalSidebar extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <nav className="navbar navbar-color sticky-top flex-md-nowrap p-0 shadow">
                        <div className="navbar-logo-set navbar-brand col-lg-2 mr-0 px-3 shadow-logo-box noselect">
                            <div className="border-bottom logo-set">
                                <a><span className="logo-color">KIWI TRAVEL</span><span className="sr-only"></span> </a>
                            </div>
                            {/* button response for the menu when the website is collapsed */}
                            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                    <Router>
                        <div className="container-fluid">
                            <div className="row">
                                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                                    <div className="sidebar-sticky pt-3">
                                        <ul className="nav flex-column">
                                            <li className="nav-item nav-link-color">
                                                <a className="nav-link" href="/dashboard">
                                                    <i> <IconContext.Provider value={{ size: "1.4em" }}>
                                                        <BsHouseDoor />
                                                    </IconContext.Provider></i>Dashboard
                                            </a>
                                            </li>
                                            <li className="nav-item nav-link-color">
                                                <a className="nav-link" href="/posts">
                                                    <i><IconContext.Provider value={{ size: "1.4em" }}>
                                                        <BsPencilSquare />
                                                    </IconContext.Provider></i>
                                               Posts</a>
                                            </li>
                                            <div className="sign-out-section">
                                                <div className="nav-item-sign-out">
                                                    <a className="nav-link sign-out border-top" href="/logout">
                                                        <i><IconContext.Provider value={{ size: "1.4em" }}>
                                                            <FaDoorOpen />
                                                        </IconContext.Provider></i>
                                                   Sign out
                                                    </a>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </nav>
                                {/* define router */}
                                <Switch>
                                    <Route path="/dashboard">
                                        <Dashboard />
                                    </Route>
                                    <Route path="/posts">
                                        <Post />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </div >
            </Provider>
        )
    }
}


export default HorizontalSidebar;
