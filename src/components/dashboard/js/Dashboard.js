import React, { useEffect, useState, Suspense } from 'react';
import {
    // metrics
    SessionsByDevicePie,
    // requests
    FetchSessionsByDevice,
    FetchAudienceOverview,
    FetchSessions,
    FetchSessionDuration,
    FetchGeoNetwork,
    FetchMapboxToken,
    // material-ui
    Grid,
    // Components
    ResponsiveGraphs,
    MapsCharts,
    // indicators
    CircularloadingIndicator,
} from '.';

import '../scss/_home.scss';

const Dashboard = () => {
    const dashboardNaming = {
        sectionName: 'Dashboard',
        audienceOverviewLineGraphName: 'Audience Overview',
        sessionsLineGraphName: 'Sessions',
        sessionDurationLineGraphName: 'Session Duration',
        sessionsByDevicePieChartName: 'Sessions by device',
        locations: "Locations",
        mapBox: "MAPBOX - testing"
    };

    const [metrix, setMetrix] = useState({
        audienceOverview: [],
        sessions: [],
        sessionDuration: [],
        sessionsByDevice: [],
        geoNetwork: []
    });

    useEffect(() => {
        FetchAudienceOverview(metrix, setMetrix);
        FetchSessions(metrix, setMetrix);
        FetchSessionDuration(metrix, setMetrix);
        FetchSessionsByDevice(metrix, setMetrix);
        FetchGeoNetwork(metrix, setMetrix);
        FetchMapboxToken();
    }, []);

    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null,
        focusedInput: null,
    });

    return (
        <main role="main" className="main-block col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h3 className="h3 noselect">{dashboardNaming.sectionName}</h3>
            </div>
            <Suspense fallback={<CircularloadingIndicator />}>
                <div className="container-graphs">
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <ResponsiveGraphs
                                naming={dashboardNaming}
                                metrix={metrix}
                                dateRange={dateRange}
                                setDateRange={setDateRange}
                            />
                        </Grid>
                        <Grid item>
                            <div className="container-pie-chart">
                                <h3>{dashboardNaming.sessionsByDevicePieChartName}</h3>
                                <SessionsByDevicePie data={metrix.sessionsByDevice} />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item>
                            <div className="container-pie-chart">
                                <h3>{dashboardNaming.sessionsByDevicePieChartName}</h3>
                                <SessionsByDevicePie data={metrix.sessionsByDevice} />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <MapsCharts
                            naming={dashboardNaming}
                            metrix={metrix}
                        />
                    </Grid>
                </div>
            </Suspense>
        </main >
    )
}


export default Dashboard;
