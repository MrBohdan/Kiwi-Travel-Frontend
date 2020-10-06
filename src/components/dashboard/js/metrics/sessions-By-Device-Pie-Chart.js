import React from 'react';
import { ResponsivePie } from '@nivo/pie'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const SessionsByDevicePie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 150, left: 80 }}
        innerRadius={0.6}
        padAngle={2}
        cornerRadius={5}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        sortByValue={true}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="var(--dark-brown)"
        radialLabelsLinkOffset={-17}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="var(--dark-brown)"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: 'var(--dark-brown)',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: 'var(--dark-brown)'
                        }
                    }
                ]
            }
        ]}
    />
)

export default SessionsByDevicePie;