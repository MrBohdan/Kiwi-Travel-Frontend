import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
    <g>
        <circle fill="#fff" r={size / 2} strokeWidth={borderWidth} stroke={borderColor} />
        <circle
            r={size / 5}
            strokeWidth={borderWidth}
            stroke={borderColor}
            fill={color}
            fillOpacity={0.35}
        />
    </g>
)

const roundTime = (data, minutesToRound) => {
    if (data.length !== 0) {
        //get higher ave time
        const setMaxDate = [].concat(data[0].data).sort((a, b) => a.y < b.y ? 1 : -1);
        let time = setMaxDate[0].y;
        // separate time by parameters 
        let [hours, minutes, seconds] = time.split(':');
        hours = parseInt(hours);
        minutes = parseInt(minutes);
        seconds = parseInt(seconds);

        // Convert hours and minutes to time in minutes
        time = (hours * 60) + minutes;

        let rounded = Math.ceil(time / minutesToRound) * minutesToRound;
        let rHr = '' + Math.floor(rounded / 60)
        let rMin = '' + rounded % 60
        let rSec = '' + rounded % 60
        return rHr.padStart(2, '0') + ':' + rMin.padStart(2, '0') + ':' + rSec.padStart(2, '0');
    }
};

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SessionDurationResponsiveLine = ({ data }) => {
    return (<ResponsiveLine
        data={data}
        margin={{ top: 20, right: 55, bottom: 45, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: "time",
            format: "%H:%M:%S",
            precision: "minute",
            min: roundTime(data, 10),
            max: '00:00:00',
            useUTC: false,
            stacked: false,
            reverse: true,
        }}
        curve="monotoneX"
        enablePointLabel={true}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'top',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 25,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        yFormat="time:%Hh:%Mm:%Ss"
        axisLeft={{
            orient: 'left',
            format: "%H:%M:%S",
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Ave. Sessions-Duration',
            legendOffset: -70,
            legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        pointSymbol={CustomSymbol}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="Ave. Sessions-Duration"
        pointLabelYOffset={-12}
        useMesh={true}
        enableSlices={'x'}
        sliceTooltip={({ slice }) => {
            return (
                <div
                    style={{
                        background: "var(--light-pink)",
                        padding: '0.1rem 1rem',
                        border: '1px solid var(--dark-brown)',
                        borderRadius: '5px'
                    }}
                >
                    {slice.points.map(point => (
                        <div
                            key={point.id}
                            style={{
                                color: "var(--dark-brown)",
                                padding: '0.1rem 0',
                            }}
                        >
                            <div> <strong>Date:</strong> {point.data.x}</div>
                            <strong>{point.serieId}:</strong> {
                                point.data.yFormatted
                            }
                        </div>
                    ))}
                </div>
            )
        }}
    />)
}

export default SessionDurationResponsiveLine;