import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo'
import worldCountries from './world_countries.json'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GeoNetworkChoropleth = ({ data }) => {
    
    // console.log("data", data);
    return (<ResponsiveChoropleth
        data={data}
        features={worldCountries.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666a3"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
    />);
}

export default GeoNetworkChoropleth;