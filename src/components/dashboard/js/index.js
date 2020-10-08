import { lazy } from 'react';
// metrics
import SessionsByDevicePie from './metrics/sessions-By-Device-Pie-Chart';
import AudienceOverviewResponsiveLine from './metrics/audience-Overview-Responsive-Line';
import SessionsResponsiveLine from './metrics/sessions-Responsive-Line';
import SessionDurationResponsiveLine from './metrics/session-Duration-Responsive-Line';
import GeoNetworkChoropleth from './metrics/geo-network-choropleth'
import MapBox from './mapbox-testing/map-box';
// requests
import FetchSessionsByDevice from '../js/request/get-sessions-by-device'
import FetchAudienceOverview from '../js/request/get-audience-overview'
import FetchSessions from '../js/request/get-sessions'
import FetchSessionDuration from '../js/request/get-session-duration'
import FetchGeoNetwork from '../js/request/get-geo-network'
import FetchMapboxToken from '../js/request/get-mapbox-token'
// material-ui
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// Airbnb - react-dates
import { DateRangePicker } from 'react-dates';
// Components
const ResponsiveGraphs = lazy(() => import('./responsive-graphs/responsive-graphs'));
const MapsCharts = lazy(() => import('./responsive-graphs/maps-charts'));

export {
    // metrics
    SessionsByDevicePie,
    AudienceOverviewResponsiveLine,
    SessionsResponsiveLine,
    SessionDurationResponsiveLine,
    GeoNetworkChoropleth,
    MapBox,
    // requests
    FetchSessionsByDevice,
    FetchAudienceOverview,
    FetchSessions,
    FetchSessionDuration,
    FetchGeoNetwork,
    FetchMapboxToken,
    // material-ui
    PropTypes,
    SwipeableViews,
    makeStyles,
    useTheme,
    Paper,
    Tabs,
    Tab,
    Box,
    Grid,
    // Components
    ResponsiveGraphs,
    MapsCharts,
    // Airbnb - react-dates
    DateRangePicker,
}