import React, { Component } from 'react';
import './style.css';
import {
    faHome,
    faCogs,
    faTable,
    faTh,
    faInfoCircle,
    faSlidersH
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HorizontalSidebar extends Component {
    render() {
        return (
            <body>
                <div class="container-fluid">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="sidebar-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"> <FontAwesomeIcon icon={faHome} /> <span>Dashboard</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"><FontAwesomeIcon icon={faCogs} /><span>Components</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"><FontAwesomeIcon icon={faTable} /><span>Tables</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"><FontAwesomeIcon icon={faTh} /><span>Forms</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"><FontAwesomeIcon icon={faInfoCircle} /><span>About</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="#"><FontAwesomeIcon icon={faSlidersH} /><span>Settings</span></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div class="chartjs-size-monitor">
                            <div class="chartjs-size-monitor-expand">
                                <div class="sub-chartjs-size-monitor-expand">
                                </div></div>
                            <div class="chartjs-size-monitor-shrink">
                                <div class="sub-chartjs-size-monitor-shrink">
                                </div></div></div>
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                            </div>
                        </div>
                    </main>
                </div>
            </body>
        )
    }
}


export default HorizontalSidebar;
