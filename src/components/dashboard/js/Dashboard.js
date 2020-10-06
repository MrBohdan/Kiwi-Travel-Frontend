import React, { useEffect, useState } from 'react';
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
    // Airbnb - react-dates
    // DateRangePicker,
} from '.';


// // Airbnb - react-dates
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
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

    const [sessionsByDevice, setSessionsByDevice] = useState([]);
    const [audienceOverview, setAudienceOverview] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [sessionDuration, setSessionDuration] = useState([]);
    const [geoNetwork, setGeoNetwork] = useState([]);

    useEffect(() => {
        FetchSessionsByDevice(setSessionsByDevice);
        FetchAudienceOverview(setAudienceOverview);
        FetchSessions(setSessions);
        FetchSessionDuration(setSessionDuration);
        FetchGeoNetwork(setGeoNetwork);
        FetchMapboxToken();
    }, []);

    // const [startDate, setStartDate] = useState(null);
    // const [endDate, setEndDate] = useState(null);
    // const [focusedInput, setFocusedInput] = useState(null);
    // const setDates = (startDate, endDate) => {
    //     setStartDate(startDate);
    //     setEndDate(endDate);
    // };

    return (
        <main role="main" className="main-block col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h3 className="h3 noselect">{dashboardNaming.sectionName}</h3>
            </div>
            {/* <DateRangePicker
                startDate={startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => setDates(startDate, endDate)} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            />  */}
            <div className="container-graphs">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ResponsiveGraphs
                            naming={dashboardNaming}
                            audienceOverview={audienceOverview}
                            sessions={sessions}
                            sessionDuration={sessionDuration}
                        />
                    </Grid>
                    <Grid item>
                        <div className="container-pie-chart">
                            <h3>{dashboardNaming.sessionsByDevicePieChartName}</h3>
                            <SessionsByDevicePie data={sessionsByDevice} />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item>
                        <div className="container-pie-chart">
                            <h3>{dashboardNaming.sessionsByDevicePieChartName}</h3>
                            <SessionsByDevicePie data={sessionsByDevice} />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs>
                    <MapsCharts
                        naming={dashboardNaming}
                        geoNetwork={geoNetwork}
                    />
                </Grid>
            </div>
        </main>
    )
}


export default Dashboard;
