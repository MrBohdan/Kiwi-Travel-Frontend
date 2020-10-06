import * as React from 'react';
import { useState } from 'react';

import ReactMapGL, { /*Marker,*/ Source, Layer } from 'react-map-gl';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers';
import bartStations from './bart-station.json';
// import MARKER_STYLE from './marker-style';

import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 500,
        latitude: 37.729,
        longitude: -122.36,
        zoom: 11,
        bearing: 0,
        pitch: 50
    });

    const [settings, setSettings] = useState({
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,
        doubleClickZoom: true,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85
    });

    const [interactionState, setInteractionState] = useState({});


    const _sourceRef = React.createRef();

    const _onClick = (event) => {
        const feature = event.features[0];
        console.log("feature", feature);
        var clusterId;
        if (event.features[0] === null) {
            clusterId = feature.properties.cluster_id;
            console.log("feature", clusterId);
        };

        const mapboxSource = _sourceRef.current.getSource();

        mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
                return;
            }

            setViewport({
                ...viewport,
                longitude: feature.geometry.coordinates[0],
                latitude: feature.geometry.coordinates[1],
                zoom,
                transitionDuration: 500
            });
        });
    };

    const _renderMarker = (station, i) => {
        const { name, coordinates } = station;
        return (
            // <Marker
            //     key={i}
            //     longitude={coordinates[0]}
            //     latitude={coordinates[1]}
            //     captureDrag={false}
            //     captureDoubleClick={false}
            // >
            //     <div className="station">
            //         <span>{name}</span>
            //     </div>
            // </Marker>
            <Source
                type="geojson"
                data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
                cluster={true}
                clusterMaxZoom={14}
                clusterRadius={50}
                ref={_sourceRef}
            >
                <Layer {...clusterLayer} />
                <Layer {...clusterCountLayer} />
                <Layer {...unclusteredPointLayer} />
            </Source>
        );
    };

    return (
        <ReactMapGL
            {...viewport}
            {...settings}
            // mapStyle="mapbox://styles/mapbox/dark-v9"
            // onViewportChange={nextViewport => setViewport(nextViewport)}
            // onInteractionStateChange={interactionState => setInteractionState(interactionState)}

            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={viewport => setViewport(viewport)}
            interactionState={interactionState => setInteractionState(interactionState)}
            interactiveLayerIds={[clusterLayer.id]}
            onClick={(e) => _onClick(e)}
            mapboxApiAccessToken={localStorage.getItem('MapboxToken')}
        >
            {/* <style>{MARKER_STYLE}</style> */}

            {bartStations.map(_renderMarker)}
        </ReactMapGL>
    );
}

export default MapBox;

