import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import './styles/LocationHistoryMap.css';

export default class LocationHistoryMap extends Component {
    render() {
        return (
            <GoogleMap
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                bootstrapURLKeys={this.props.bootstrapURLKeys}>
            </GoogleMap>
        );
    }
}
