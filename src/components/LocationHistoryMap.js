import React, {Component} from 'react';
import GoogleMap from 'google-map-react';
import '../styles/LocationHistoryMap.css';

export default class LocationHistoryMap extends Component {
  _getHeatMapLayerOptions(points, maps) {
    return {
      data: this._getHeatMapLayerDataOption(points, maps),
      dissipating: true,
      radius: 50,
      opacity: 1
    };
  }

  _getHeatMapLayerDataOption(points, maps) {
    return points.map(point => ({
        location: new maps.LatLng(point[0], point[1])
      })
    );
  }

  _initHeatMapLayer(maps, points) {
    return new maps.visualization.HeatmapLayer(
      this._getHeatMapLayerOptions(points, maps)
    );
  }

  _renderHeatMap(map, maps, points) {
    const heatmap = this._initHeatMapLayer(maps, points);
    heatmap.setMap(map);
  }

  _renderMarkers(map, maps, points) {
    points.map((point) =>
      new maps.Marker({
        position: {lat: point[0], lng: point[1]},
        map: map
      })
    )
  }

  _getDefaultCenter() {
    return {lat: this.props.centerLat, lng: this.props.centerLng};
  }

  _getBootstrapURLKeys() {
    return {
      key: this.props.gmKey,
      language: this.props.language,
      libraries: this.props.libraries,
      region: this.props.region
    }
  };

  render() {
    return (
      <div className="map">
        <GoogleMap
          defaultCenter={this._getDefaultCenter()}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={this._getBootstrapURLKeys()}
          onGoogleApiLoaded={({map, maps}) => this._renderHeatMap(map, maps, this.props.coordinates)}
          yesIWantToUseGoogleMapApiInternals={true}
        />
      </div>
    );
  }
}
