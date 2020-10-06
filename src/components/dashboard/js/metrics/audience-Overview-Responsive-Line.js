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

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const AudienceOverviewResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 55, bottom: 45, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false, }}
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
        axisLeft={{
            orient: 'left',
            tickSize: 10,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'users',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        colors={{ scheme: 'nivo' }}
        pointSymbol={CustomSymbol}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="users"
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
                            <strong>{point.serieId}:</strong> {point.data.yFormatted}
                        </div>
                    ))}
                </div>
            )
        }}
    />
)

export default AudienceOverviewResponsiveLine;