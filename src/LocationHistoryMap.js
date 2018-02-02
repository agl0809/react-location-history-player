import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import './styles/LocationHistoryMap.css';

export default class LocationHistoryMap extends Component {
  _renderMarkers(map, maps, coordinates) {
    coordinates.map((point) =>
      new maps.Marker({
        position: {lat: point[0], lng: point[1]},
        map: map
      })
    )
  }

  render() {
    return (
      <GoogleMap
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        bootstrapURLKeys={this.props.bootstrapURLKeys}
        onGoogleApiLoaded={({map, maps}) => this._renderMarkers(map, maps, this.props.coordinates)}
        yesIWantToUseGoogleMapApiInternals={true}
      />
    );
  }
}
