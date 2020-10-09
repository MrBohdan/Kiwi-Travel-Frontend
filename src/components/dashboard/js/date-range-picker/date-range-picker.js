import React from 'react';
import {
    // Airbnb - react-dates
    DateRangePicker
} from '../index';

// Airbnb - react-dates
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const DateRangePickerAirbnb = ({ dateRange, setDateRange }) => {
    return (
        <DateRangePicker
            startDate={dateRange.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={dateRange.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
                setDateRange(dateRange => ({
                    ...dateRange,
                    startDate: startDate,
                    endDate: endDate
                }));
            }} // PropTypes.func.isRequired,
            focusedInput={dateRange.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => {
                setDateRange(dateRange => ({
                    ...dateRange,
                    focusedInput: focusedInput
                }));
            }} // PropTypes.func.isRequired,
        />
    );
};

export default DateRangePickerAirbnb;