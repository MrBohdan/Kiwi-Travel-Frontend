import React, { useState } from 'react';
import {
    // metrics
    AudienceOverviewResponsiveLine,
    SessionsResponsiveLine,
    SessionDurationResponsiveLine,
    // Components
    DateRangePickerAirbnb,
    // material-ui
    PropTypes,
    SwipeableViews,
    makeStyles,
    useTheme,
    Paper,
    Tabs,
    Tab,
    Box,
} from '../index';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const ResponsiveGraphs = ({
    naming,
    metrix,
    dateRange,
    setDateRange
}) => {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className="container-responsive-graphs">
            <div className={classes.root}>
                <Paper className={classes.root} >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label={naming.audienceOverviewLineGraphName} component="span" {...a11yProps(0)} />
                        <Tab label={naming.sessionsLineGraphName} component="span" {...a11yProps(1)} />
                        <Tab label={naming.sessionDurationLineGraphName} component="span" {...a11yProps(2)} />
                    </Tabs>
                </Paper>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <div className="responsive-Line">
                            <AudienceOverviewResponsiveLine data={metrix.audienceOverview} />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <div className="responsive-Line">
                            <SessionsResponsiveLine data={metrix.sessions} />
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        <div className="responsive-Line">
                            <SessionDurationResponsiveLine data={metrix.sessionDuration} />
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </div>
            <DateRangePickerAirbnb
                dateRange={dateRange}
                setDateRange={setDateRange}
            />
        </div>
    )
};

export default ResponsiveGraphs;