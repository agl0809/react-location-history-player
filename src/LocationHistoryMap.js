import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import './LocationHistoryMap.css';

class LocationHistoryMap extends Component {
    static defaultProps = {
        center: {lat: 37.7657, lng: -122.4469},
        zoom: 13,
        bootstrapURLKeys: {
            key: 'AIzaSyBCMMT6VTHOjw2pyT_jTLQ8ga4xGkfydGI',
            language: 'en',
            region: 'us'
        }
    };

    render() {
        return (
            <GoogleMap
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                bootstrapURLKeys={this.props.bootstrapURLKeys}
            >
            </GoogleMap>
        );
    }
}

export default LocationHistoryMap;
