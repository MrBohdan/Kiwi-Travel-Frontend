import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '30%',
    height: '40%',
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 47.444, lng: -122.176 }}
            />
        );
    }
}

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default GoogleApiWrapper({
    apiKey: `${API_KEY}`
})(MapContainer);


